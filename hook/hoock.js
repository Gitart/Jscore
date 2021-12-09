import { useState, useEffect, useCallback } from 'react'

const nop = () => {}

const ContentTypeJSON = 'application/json'
const origin = window.location.origin

const defOpts = {
    method: 'GET',
    body: null,
    headers: {
        'Content-Type': ContentTypeJSON,
        'Accept': ContentTypeJSON,
    },
    mode: 'cors',
    credentials: 'omit',
    cache: 'no-cache',
}

const defConfig = {
    timeout: 20000,
    token: null,
    timerID: null,
    wantReturn: false,
    onError: nop,
    onLoading: nop,
    onResponse: nop,
}

const xhrclient = async (url, O, C) => {
    
    let targetUrl = /^http:\/\//.test(url) ? new URL(url) : new URL(url, origin)

    C.onError(null)
    C.onLoading(true)

    try {

        // Prepare body
        const b = O.body
        if (typeof b !== 'undefined' && b !== null) {
            if ( O.headers['Content-Type'] === ContentTypeJSON ) {
                O.body = JSON.stringify(b)
            }
        }

        // Set timeout
        if (typeof C.timeout !== 'undefined' && C.timeout !== null) {
            const ctrl = new AbortController()
            O.signal = ctrl.signal
            C.timerID = setTimeout(() => ctrl.abort(), C.timeout)
        }

        // Set token
        if (typeof C.token !== 'undefined' && C.token !== null) {
            O.headers['Authorization'] = 'Bearer '.concat(C.token)            
        }

        O.headers['X-Requested-With'] = 'fetch'

        {
            const keys = Object.keys(O.headers);
            for (let i = 0; i < keys.length; i++) {
                if ( O.headers[ keys[i] ] !== null ) continue

                delete O.headers[ keys[i] ]
            }
        }

        if ( O.cache === 'no-cache' ) {
            targetUrl.searchParams.set('_', +(new Date()))
        }

        // Clean and append headers
        // Convert headers
        O.headers = new Headers({ ...defOpts.headers, ...O.headers })

        // Execute request
        const response = await fetch(targetUrl, { ...O })
        const data = await response.json()

        // Clear timer
        if (typeof C.timerID !== 'undefined' && C.timerID !== null) {
            clearTimeout(C.timerID);
            C.timerID = null
        }

        if ( !data.hasOwnProperty('status') )
            throw new Error('Something went wrong')
        
        switch (data.status) {
            case 'success':
                if (!C.wantReturn) { C.onResponse(data) }
                break
            case 'error':
                throw new Error(data.message || 'Error request')
            case 'fail':
                throw new Error(data.message || 'Failed request')
        }

        return data

    } catch (err) {
        if (err.name === 'AbortError') { err = 'timeout exceeded' }
        
        C.onError(err)
    } finally {
        C.onLoading(false)
    }
}

export const useRequest = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const f = (url, options={}, config={}) => {

        const opts = { ...defOpts, ...options }

        const cfg = {
            ...defConfig,
            wantReturn: true,
            onError: setError,
            onLoading: setLoading,
            ...config,
        }

        return xhrclient(url, opts, cfg)
    }

    const request = useCallback(f, [])

    return [ loading, request, error ]
}

export const useFetch = (url, options={}, config={}) => {
    const [response, setResponse] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const opts = { ...defOpts, ...options }

    const cfg = {
        ...defConfig,
        wantReturn: false,
        onError: setError,
        onLoading: setLoading,
        onResponse: setResponse,
        ...config,
    }

    useEffect(() => {
        xhrclient(url, opts, cfg)
    }, [])

    return [ loading, response, error ]
}

/* HOW TO USE */
/*
import { useRequest, useFetch, useXHR } from 'fetch.hook'
const ExampleComponent1 = (props) => {
    const [ loading, request, error ] = useRequest()
    
    useEffect(() => {
        const response = request('http://or.just.path/path/to/api', { method: "POST" }, { token: "sOmEToKeN" })
        // ... your code here
    }, [])
    
    return null
}
const ExampleComponent2 = (props) => { 
    const [ loading, response, error ] = useFetch('http://or.just.path/path/to/api', { method: "PUT" }, { timeout: 5000 })
    
    useEffect(() => {
        // ... your code here
    }, [response])
    
    return null
}
*/
