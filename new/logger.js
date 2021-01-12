ar Logger = {

 
  logDomObj: document.querySelector('#log'),
 
  debug: function debug(message) {
    this.writeLog(message, { debug: true });
  },
 
  info: function info(message) {
    this.writeLog(message, { info: true });
  },
 
  log: function log(message) {
    this.writeLog(message);
  },
 
  warn: function warn(message) {
    this.writeLog(message, { warn: true });
  },
 
  error: function error(message) {
    this.writeLog(message, { error: true });
  },
 
  newSection: function newSection() {
    var separator = '----------';
    var newLine = document.createElement('div');
    newLine.innerHTML = separator;
    this.logDomObj.appendChild(newLine);
    console.log(separator);
  },
 
  writeLog: function writeLog(message, level) {
    var logMessage = document.createElement('div');

    if (message) {

 
      logMessage.innerHTML = message;
    } else {

 
      if (message === null) {
        logMessage.innerHTML = 'null';
      } else if (message === undefined) {
        logMessage.innerHTML = 'undefined';
      }
    }

 
    if (level) {
      if (level.error) {
        logMessage.setAttribute('class', 'error');
        console.error(message);
      } else if (level.warn) {
        logMessage.setAttribute('class', 'warning');
        console.warn(message);
      } else if (level.info) {
        logMessage.setAttribute('class', 'info');
        console.info(message);
      } else if (level.debug) {
        logMessage.setAttribute('class', 'debug');
        console.debug(message);
      }
    } else {

 
      console.log(message);
    }

 
    this.logDomObj.appendChild(logMessage);
    this.logDomObj.scrollTop = this.logDomObj.scrollHeight;
  },

};

 
Logger.newSection();
