const serviceResult = {
        accountsData: [
            {id: "F220960K",balance: 1024},
            {id: "S120456T",balance: 2260},
            {id: "J140793A",balance: -38},
            {id: "M120396V",balance: -114},
            {id: "A120289L",balance: 55000},
        ],
    };

    // Больше нуля
    const delinquent = serviceResult.accountsData.filter(v => v.balance > 0);
    console.log(delinquent);

    markers = [
        {name: "UY", lat: -34.9, lon: -56.2},
        {name: "AR", lat: -34.6, lon: -58.4},
        {name: "BR", lat: 2215.8, lon: 2247.9},
        {name: "BR", lat: -15.8, lon: -47.9},
        {name: "BR", lat: 115.8, lon: 147.9},
        {name: "BO", lat: -16.5, lon: -68.1}
    ];

    let brazilData = markers.find(v => v.name === "BR");
    console.log(brazilData);

    let brazilIndex = markers.findIndex(v => v.name === "BR");
    console.log(brazilIndex);




-------------
Поиск в массиве
const serviceResult = {
        accountsData: [
            {id: "F220960K",balance: 1024},
            {id: "S120456T",balance: 2260},
            {id: "J140793A",balance: -38},
            {id: "M120396V",balance: -114},
            {id: "A120289L",balance: 55000},
        ],
    };

    // Больше нуля
    const delinquent = serviceResult.accountsData.filter(v => v.balance > 0);
    console.log(delinquent);

    markers = [
        {name: "UY", lat: -34.9, lon: -56.2},
        {name: "AR", lat: -34.6, lon: -58.4},
        {name: "BR", lat: 2215.8, lon: 2247.9},
        {name: "BR", lat: -15.8, lon: -47.9},
        {name: "BR", lat: 115.8, lon: 147.9},
        {name: "BO", lat: -16.5, lon: -68.1}
    ];

    const delinquent1 = markers.filter(v => v.name == "BR");
    console.log(delinquent1);


    let brazilData = markers.find(v => v.name === "BR");
    console.log(brazilData);

    let brazilIndex = markers.findIndex(v => v.name === "BR");
    console.log(brazilIndex);
