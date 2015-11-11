var app = require('app');
var os = require('os');
var BrowserWindow = require('browser-window');
var autoUpdater = require('auto-updater');

require('crash-reporter').start();
var platform = os.platform() + '_' + os.arch();
var version = app.getVersion();
autoUpdater.setFeedUrl('http://mizchi-nuts-test.herokuapp.com/update/'+platform+'/'+version);

var mainWindow = null;
app.on('window-all-closed', function() {app.quit();});
app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadUrl('file://' + __dirname + '/www/index.html');
  // mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
