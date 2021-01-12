App.prototype.constructor = function constructor() {
  var thisapp = this;

  Logger.log('App started');

 
  this.swUtil = new SWUtil();

 
  document.querySelector('#reloadapp').addEventListener('click', function() {
    window.location.reload();
  });
 
  if (this.swUtil.areServiceWorkersSupported()) {
    document.querySelector('#swinstall').addEventListener('click',
      function() {
        thisapp.enableCoolFeatures();
      }
    );

    document.querySelector('#swuninstall').addEventListener('click',
      function() {
        thisapp.disableCoolFeatures();
      }
    );

 
    if (this.swUtil.isServiceWorkerControllingThisApp()) {
      Logger.info('App code run as expected');

      this.disableSWRegistration();
    } else {
      this.enableSWRegistration();
    }
  } else {
    Logger.error('Service workers are not supported by this browser');
  }
};
 
App.prototype.enableCoolFeatures = function enableCoolFeatures() {
  var scriptURL;
  var scope;

  Logger.newSection();
  Logger.log('Enabling cool features...');

 
  scriptURL = document.querySelector('#swscripturl');
  scope = document.querySelector('#swscope');

  Logger.debug(
    'Configuring the following service worker ' + scriptURL.value +
    ' with scope ' + scope.value
  );

  if (scriptURL.value !== '') {
    Logger.debug('scriptURL: ' + scriptURL.value);
  } else {
    Logger.error('No SW scriptURL specified');
    return;
  }

  if (scope.value !== '') {
    Logger.debug('scope: ' + scope.value);
  } else {
    Logger.warn('scope: not specified ' +
      '(scope defaults to the path the script sits in)'
    );
  }

 
  this.swUtil.registerServiceWorker(scriptURL.value, scope.value).then(
      this.disableSWRegistration, // success
      this.enableSWRegistration // error
  );
};
 
App.prototype.disableCoolFeatures = function disableCoolFeatures() {
  Logger.newSection();
  Logger.log('Disabling cool features...');

  this.swUtil.unregisterServiceWorker().then(
      this.enableSWRegistration, // success
      this.disableSWRegistration // error
  );
};
 
App.prototype.enableSWRegistration = function() {
  document.querySelector('#swinstall').disabled = false;
  document.querySelector('#swuninstall').disabled = true;
};
 
App.prototype.disableSWRegistration = function() {
  document.querySelector('#swinstall').disabled = true;
  document.querySelector('#swuninstall').disabled = false;
};

 
var app = new App();
console.debug(app);
