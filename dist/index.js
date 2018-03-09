'use strict';

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var app = (0, _api2.default)();

var port = process.env.PORT || 3000;

// listen for http verbs
var server = app.listen(port, function () {
  console.info('The magic happens on ' + port);
});
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(app, 'app', 'index.js');
  reactHotLoader.register(port, 'port', 'index.js');
  reactHotLoader.register(server, 'server', 'index.js');
  leaveModule(module);
})();

;
