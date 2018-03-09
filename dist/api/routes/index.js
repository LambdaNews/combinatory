'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var router = (0, _express.Router)();

router.get('/api/ping', function (req, res, next) {
  res.status(200).send({ message: 'pong' });
});

var _default = router;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(router, 'router', 'api/routes/index.js');
  reactHotLoader.register(_default, 'default', 'api/routes/index.js');
  leaveModule(module);
})();

;