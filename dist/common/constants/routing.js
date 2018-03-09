'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SiteRoutes = exports.API_BASE = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var API_BASE = '/api';

var SiteRoutes = function () {
  function SiteRoutes() {
    (0, _classCallCheck3.default)(this, SiteRoutes);
  }

  (0, _createClass3.default)(SiteRoutes, null, [{
    key: 'home',

    /**
     * '/'
     * @returns {string}
     */
    get: function get() {
      return '/';
    }

    /**
     * '/about'
     * @returns {string}
     */

  }, {
    key: 'about',
    get: function get() {
      return '/about';
    }

    /**
     * '/contact'
     * @returns {string}
     */

  }, {
    key: 'contact',
    get: function get() {
      return '/contact';
    }
  }]);
  return SiteRoutes;
}();

exports.API_BASE = API_BASE;
exports.SiteRoutes = SiteRoutes;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(API_BASE, 'API_BASE', 'common/constants/routing.js');
  reactHotLoader.register(SiteRoutes, 'SiteRoutes', 'common/constants/routing.js');
  leaveModule(module);
})();

;