/* global Logger */
 
function SWUtil() {
}
 
SWUtil.prototype.areServiceWorkersSupported = function() {
  Logger.newSection();
  Logger.log('Are Service Workers Supported?');

  Logger.debug('checking navigator.serviceWorker');

  if (navigator.serviceWorker) {
    Logger.info('Service workers supported by this browser');
    return true;
  }

  Logger.warn('No, service workers are NOT supported by this browser');
  Logger.debug(navigator.userAgent);
  return false;
};
 
SWUtil.prototype.isServiceWorkerControllingThisApp = function() {
  Logger.newSection();
  Logger.log('Are Service Workers in control?');

  Logger.debug('checking navigator.serviceWorker.controller');

 
  if (navigator.serviceWorker.controller) {

 
    Logger.info('A service worker controls this app');
    Logger.debug('The following service worker controls this app: ');
    Logger.debug(navigator.serviceWorker.controller.scriptURL +
                ' <= navigator.serviceWorker.controller.scriptURL');

 
    Logger.info('Please enable and check the browser logs for the oninstall' +
                ', onactivate, and onfetch events');

Firefox: about:serviceworkers
Chrome: chrome://serviceworker-internals/
Browser compatibility
 
    Logger.debug('More on about:serviceworkers (Firefox) ' +
                 'or chrome://serviceworker-internals/');

    return true;
  }

  Logger.warn('No, there is no service worker controlling this app');
  return false;
};
 
SWUtil.prototype.registerServiceWorker = function(scriptURL, scope) {
  var swRegisterSecondParam = {};

  Logger.newSection();
  Logger.log('Registering service worker...');
  Logger.info('Registering service worker with serviceWorker.register()');

  Logger.debug('navigator.serviceWorker.register(scriptURL, scope)');
  Logger.debug('scriptURL: ' + scriptURL);

 
  if (scope) {
    swRegisterSecondParam.scope = scope;
    Logger.debug('options.scope: ' + swRegisterSecondParam.scope);
  }

  return new Promise(
    function then(resolve, reject) {

 
      navigator.serviceWorker.register(
        scriptURL,
        swRegisterSecondParam
      ).then(
 
        function registrationSuccess(swRegistration) {
          Logger.debug('registrationSuccess(swRegistration)');
          Logger.debug(swRegistration);

 
          if (swRegistration.active) {

 
            Logger.debug('Registering the active service worker again: ');
            Logger.debug(swRegistration.active.scriptURL +
                         ' <= swRegistration.active.scriptURL');
          }

 
          if (swRegistration.installing) {

 
            Logger.debug('Registering the following service worker for ' +
                         'the first time: ');
            Logger.debug(swRegistration.installing.scriptURL +
                         ' <= swRegistration.installing.scriptURL');
          }

          if (swRegistration.scope) {
            Logger.debug('with scope: ' + swRegistration.scope +
                         ' <= swRegistration.scope');
          }

 
          Logger.info('Service worker successfully registered');

 
          Logger.info('Please enable and check the browser logs for' +
                      ' the oninstall, onactivate, and onfetch events');

 
          Logger.info('SW is in control, once document is reloaded');

Firefox: about:serviceworkers
Chrome: chrome://serviceworker-internals/
Browser compatibility
 
          Logger.debug('More on about:serviceworkers (Firefox) ' +
                       'or chrome://serviceworker-internals/');

          resolve();
        },
 
        function registrationError(why) {
          Logger.debug('registrationError(why)');
          Logger.info('Service worker NOT registered');
          Logger.error(why);
          reject();
        }
      );
    }
  );
};
 
SWUtil.prototype.unregisterServiceWorker = function() {
  Logger.newSection();

  Logger.log('Unregistering the active service worker...');
  Logger.debug('if something goes wrong, please unregister ' +
               'the service worker ');
  Logger.debug('about:serviceworkers (Firefox) ' +
               'or chrome://serviceworker-internals/');

  return new Promise(
    function then(resolve, reject) {
      Logger.debug('navigator.serviceWorker.getRegistration()' +
                   '.then(success, error)');
Calling navigator.serviceWorker.getRegistration()

 
      navigator.serviceWorker.getRegistration()
      .then(function getRegistrationSuccess(swRegistration) {
        Logger.debug('getRegistrationSuccess(swRegistration)');
        Logger.debug(swRegistration);
        Logger.debug('Unregistering the following service worker: ' +
          swRegistration.active.scriptURL +
          ' <= swRegistration.active.scriptURL');
        Logger.debug('with scope ' + swRegistration.scope +
                     ' <= swRegistration.scope');
Calling unregister() on a ServiceWorkerRegistration object

 
        Logger.debug('swRegistration.unregister().then()');
        swRegistration.unregister()
          .then(
 
            function unregisterSuccess() {
              Logger.debug('unregisterSuccess()');
              Logger.info('The service worker has been ' + 'successfully unregistered');

Firefox: about:serviceworkers
Chrome: chrome://serviceworker-internals/
Browser compatibility
 
              Logger.debug('More on about:serviceworkers (Firefox) ' +  'or chrome://serviceworker-internals/');

              resolve();
            },
 
            function unregisterError(why) {
              Logger.debug('unregisterError(why)');
              Logger.error('The service worker has NOT been unregistered');
              Logger.error(why);
              reject();
            }
          );
      },
      function getRegistrationError(why) {
        Logger.debug('getRegistrationError(why)');
        Logger.error(why);
        Logger.warn('It has been not possibile to unregister' +         ' the service worker');
      }
    );
    }
  );
};
