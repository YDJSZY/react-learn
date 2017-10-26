webpackJsonp([3],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(656);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(463);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$create = __webpack_require__(211)["default"];

var _Object$setPrototypeOf = __webpack_require__(212)["default"];

exports["default"] = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

exports.__esModule = true;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(131)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(16).setDesc
  , has = __webpack_require__(134)
  , TAG = __webpack_require__(21)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(465)
  , defined = __webpack_require__(139);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopstateOnHashchange = exports.supportsPopstateOnHashchange = function supportsPopstateOnHashchange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setLocalStorage = exports.getLocalStorage = exports.setConstants = exports.setMyInfo = exports.constants = exports.myInfo = undefined;

var _stringify = __webpack_require__(659);

var _stringify2 = _interopRequireDefault(_stringify);

var _baseConfig = __webpack_require__(464);

var _baseConfig2 = _interopRequireDefault(_baseConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myInfo,
    constants,
    $localStorage,
    localStorageName = _baseConfig2.default.localStorageName; /**
                                                               * Created by luwenwei on 2017/9/13.
                                                               */


var setMyInfo = function setMyInfo(data) {
    return exports.myInfo = myInfo = data;
};

var setConstants = function setConstants(data) {
    return exports.constants = constants = data;
};

var getLocalStorage = function getLocalStorage() {
    if (!window.localStorage.hasOwnProperty(localStorageName)) {
        var storage = {};
        setLocalStorage(storage);
    }
    if (!window.localStorage.getItem(localStorageName)) return {};
    return JSON.parse(window.localStorage.getItem(localStorageName));
};

var setLocalStorage = function setLocalStorage(storage) {
    try {
        window.localStorage.setItem(localStorageName, (0, _stringify2.default)(storage));
    } catch (e) {
        console.debug(e);
    }
};

exports.myInfo = myInfo;
exports.constants = constants;
exports.setMyInfo = setMyInfo;
exports.setConstants = setConstants;
exports.getLocalStorage = getLocalStorage;
exports.setLocalStorage = setLocalStorage;

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(137);

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

var $          = __webpack_require__(16)
  , createDesc = __webpack_require__(138);
module.exports = __webpack_require__(105) ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports = true;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Control = exports.CacheLink = exports.Link = exports.Route = exports.MemoryRouter = exports.BrowserRouter = exports.HashRouter = undefined;

var _HashRouter2 = __webpack_require__(612);

var _HashRouter3 = _interopRequireDefault(_HashRouter2);

var _BrowserRouter2 = __webpack_require__(621);

var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);

var _MemoryRouter2 = __webpack_require__(624);

var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);

var _Route2 = __webpack_require__(626);

var _Route3 = _interopRequireDefault(_Route2);

var _Link2 = __webpack_require__(257);

var _Link3 = _interopRequireDefault(_Link2);

var _CacheLink2 = __webpack_require__(633);

var _CacheLink3 = _interopRequireDefault(_CacheLink2);

var _HistoryControl = __webpack_require__(51);

var _HistoryControl2 = _interopRequireDefault(_HistoryControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.HashRouter = _HashRouter3.default;
exports.BrowserRouter = _BrowserRouter3.default;
exports.MemoryRouter = _MemoryRouter3.default;
exports.Route = _Route3.default;
exports.Link = _Link3.default;
exports.CacheLink = _CacheLink3.default;
exports.Control = _HistoryControl2.default;

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InnerRouter = __webpack_require__(252);

var _InnerRouter2 = _interopRequireDefault(_InnerRouter);

var _HistoryControl = __webpack_require__(51);

var _HistoryControl2 = _interopRequireDefault(_HistoryControl);

var _CacheOfLinkControl = __webpack_require__(161);

var _CacheOfLinkControl2 = _interopRequireDefault(_CacheOfLinkControl);

var _Logger = __webpack_require__(81);

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _ref;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Router.__proto__ || Object.getPrototypeOf(Router)).call.apply(_ref, [this].concat(args)));

    (0, _HistoryControl.setHistory)(_this.props.history);
    (0, _HistoryControl.listener)(_this.props.history.getCurrentLocation());

    /** start history listener */
    _this.unlisten = _this.props.history.listen(function (location, action) {

      (0, _HistoryControl.listener)(location, action);
      _CacheOfLinkControl2.default.onHistoryChanged(location);
      _this.forceUpdate();
    });
    return _this;
  }

  _createClass(Router, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        history: this.props.history
      };
    }

    /** react-hot-loader will unmount this component and */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.forceUpdate();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unlisten();
    }
  }, {
    key: 'render',
    value: function render() {
      var props = _objectWithoutProperties(this.props, []);

      return _react2.default.createElement(_InnerRouter2.default, _extends({
        location: this.props.history.getCurrentLocation(),
        action: this.props.history.action
      }, props));
    }
  }]);

  return Router;
}(_react2.default.Component);

exports.default = Router;


Router.childContextTypes = {
  history: _propTypes2.default.object
};

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * the cache of link controlle
 */

/** clear cache route */
var clear = function clear() {
  targetPath = '';
  cacheStack = [];
};

/** add cache route */
var add = exports.add = function add(srcRoute, _targetPath) {
  if (!srcRoute || !_targetPath) {
    return;
  }
  targetPath = _targetPath;
  cacheStack.push(srcRoute);
};

/** history listener */
var onHistoryChanged = exports.onHistoryChanged = function onHistoryChanged(location) {
  if (location.pathname !== targetPath) {
    clear();
  }
};

/** judge if route should cache */
var isCached = exports.isCached = function isCached(srcRoute) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = cacheStack[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var route = _step.value;

      if (route === srcRoute) {
        return true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
};

var cacheStack = [];
var targetPath = '';

exports.default = {
  add: add,
  isCached: isCached,
  onHistoryChanged: onHistoryChanged
};

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.go = exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getUserConfirmation = exports.getCurrentLocation = undefined;

var _LocationUtils = __webpack_require__(82);

var _DOMUtils = __webpack_require__(117);

var _DOMStateStorage = __webpack_require__(254);

var _PathUtils = __webpack_require__(52);

var _ExecutionEnvironment = __webpack_require__(162);

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var needsHashchangeListener = _ExecutionEnvironment.canUseDOM && !(0, _DOMUtils.supportsPopstateOnHashchange)();

var _createLocation = function _createLocation(historyState) {
  var key = historyState && historyState.key;

  return (0, _LocationUtils.createLocation)({
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
    state: key ? (0, _DOMStateStorage.readState)(key) : undefined
  }, undefined, key);
};

var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
  var historyState = void 0;
  try {
    historyState = window.history.state || {};
  } catch (error) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    historyState = {};
  }

  return _createLocation(historyState);
};

var getUserConfirmation = exports.getUserConfirmation = function getUserConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

var startListener = exports.startListener = function startListener(listener) {
  var handlePopState = function handlePopState(event) {
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) // Ignore extraneous popstate events in WebKit
      return;
    listener(_createLocation(event.state));
  };

  (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

  var handleUnpoppedHashChange = function handleUnpoppedHashChange() {
    return listener(getCurrentLocation());
  };

  if (needsHashchangeListener) {
    (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
  }

  return function () {
    (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

    if (needsHashchangeListener) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
    }
  };
};

var updateLocation = function updateLocation(location, updateState) {
  var state = location.state;
  var key = location.key;


  if (state !== undefined) (0, _DOMStateStorage.saveState)(key, state);

  updateState({ key: key }, (0, _PathUtils.createPath)(location));
};

var pushLocation = exports.pushLocation = function pushLocation(location) {
  return updateLocation(location, function (state, path) {
    return window.history.pushState(state, null, path);
  });
};

var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
  return updateLocation(location, function (state, path) {
    return window.history.replaceState(state, null, path);
  });
};

var go = exports.go = function go(n) {
  if (n) window.history.go(n);
};

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Indicates that navigation was caused by a call to history.push.
 */
var PUSH = exports.PUSH = 'PUSH';

/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = exports.REPLACE = 'REPLACE';

/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = exports.POP = 'POP';

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _AsyncUtils = __webpack_require__(620);

var _PathUtils = __webpack_require__(52);

var _runTransitionHook = __webpack_require__(255);

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _Actions = __webpack_require__(164);

var _LocationUtils = __webpack_require__(82);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createHistory = function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var getUserConfirmation = options.getUserConfirmation;
  var pushLocation = options.pushLocation;
  var replaceLocation = options.replaceLocation;
  var go = options.go;
  var keyLength = options.keyLength;


  var currentLocation = void 0;
  var pendingLocation = void 0;
  var beforeListeners = [];
  var listeners = [];
  var allKeys = [];

  var getCurrentIndex = function getCurrentIndex() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) return allKeys.indexOf(pendingLocation.key);

    if (currentLocation) return allKeys.indexOf(currentLocation.key);

    return -1;
  };

  var updateLocation = function updateLocation(nextLocation) {
    var currentIndex = getCurrentIndex();

    currentLocation = nextLocation;

    if (currentLocation.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, currentIndex + 1), [currentLocation.key]);
    } else if (currentLocation.action === _Actions.REPLACE) {
      allKeys[currentIndex] = currentLocation.key;
    }

    listeners.forEach(function (listener) {
      return listener(currentLocation);
    });
  };

  var listenBefore = function listenBefore(listener) {
    beforeListeners.push(listener);

    return function () {
      return beforeListeners = beforeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var listen = function listen(listener) {
    listeners.push(listener);

    return function () {
      return listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, callback) {
    (0, _AsyncUtils.loopAsync)(beforeListeners.length, function (index, next, done) {
      (0, _runTransitionHook2.default)(beforeListeners[index], location, function (result) {
        return result != null ? done(result) : next();
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          return callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  };

  var transitionTo = function transitionTo(nextLocation) {
    if (currentLocation && (0, _LocationUtils.locationsAreEqual)(currentLocation, nextLocation) || pendingLocation && (0, _LocationUtils.locationsAreEqual)(pendingLocation, nextLocation)) return; // Nothing to do

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted during confirmation

      pendingLocation = null;

      if (ok) {
        // Treat PUSH to same path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = (0, _PathUtils.createPath)(currentLocation);
          var nextPath = (0, _PathUtils.createPath)(nextLocation);

          if (nextPath === prevPath && (0, _LocationUtils.statesAreEqual)(currentLocation.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
        }

        if (nextLocation.action === _Actions.POP) {
          updateLocation(nextLocation);
        } else if (nextLocation.action === _Actions.PUSH) {
          if (pushLocation(nextLocation) !== false) updateLocation(nextLocation);
        } else if (nextLocation.action === _Actions.REPLACE) {
          if (replaceLocation(nextLocation) !== false) updateLocation(nextLocation);
        }
      } else if (currentLocation && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(currentLocation.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL
      }
    });
  };

  var push = function push(input) {
    return transitionTo(createLocation(input, _Actions.PUSH));
  };

  var replace = function replace(input) {
    return transitionTo(createLocation(input, _Actions.REPLACE));
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength || 6);
  };

  var createHref = function createHref(location) {
    return (0, _PathUtils.createPath)(location);
  };

  var createLocation = function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];
    return (0, _LocationUtils.createLocation)(location, action, key);
  };

  return {
    getCurrentLocation: getCurrentLocation,
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: _PathUtils.createPath,
    createHref: createHref,
    createLocation: createLocation
  };
};

exports.default = createHistory;

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(499), __esModule: true };

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(76)
  , TAG = __webpack_require__(21)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(490), __esModule: true };

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(38)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

var store  = __webpack_require__(208)('wks')
  , uid    = __webpack_require__(209)
  , Symbol = __webpack_require__(38).Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};

/***/ }),

/***/ 210:
/***/ (function(module, exports) {



/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(496), __esModule: true };

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(497), __esModule: true };

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = __webpack_require__(16).getDesc
  , isObject = __webpack_require__(108)
  , anObject = __webpack_require__(57);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(74)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(140)
  , $export        = __webpack_require__(73)
  , redefine       = __webpack_require__(136)
  , hide           = __webpack_require__(137)
  , has            = __webpack_require__(134)
  , Iterators      = __webpack_require__(75)
  , $iterCreate    = __webpack_require__(501)
  , setToStringTag = __webpack_require__(106)
  , getProto       = __webpack_require__(16).getProto
  , ITERATOR       = __webpack_require__(21)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , methods, key;
  // Fix native
  if($native){
    var IteratorPrototype = getProto($default.call(new Base));
    // Set @@toStringTag to native iterators
    setToStringTag(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES  ? $default : getMethod(VALUES),
      keys:    IS_SET      ? $default : getMethod(KEYS),
      entries: !DEF_VALUES ? $default : getMethod('entries')
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Logger = __webpack_require__(81);

var _Logger2 = _interopRequireDefault(_Logger);

var _RouteBase = __webpack_require__(253);

var _RouteBase2 = _interopRequireDefault(_RouteBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InnerRouter = function (_React$Component) {
  _inherits(InnerRouter, _React$Component);

  function InnerRouter() {
    var _ref;

    _classCallCheck(this, InnerRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = InnerRouter.__proto__ || Object.getPrototypeOf(InnerRouter)).call.apply(_ref, [this].concat(args)));

    _this.getChildContext = function () {
      return {
        subscribe: _this.subscribe,
        router: _this
      };
    };

    _this.subscribe = function (callback) {
      if (_this.subscribers.indexOf(callback) < 0) {
        _this.subscribers.push(callback);
      }
      return function () {
        var index = _this.subscribers.indexOf(callback);
        if (index >= 0) {
          _this.subscribers.splice(index, 1);
        }
      };
    };

    _this.notify = function () {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _this.subscribers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var fn = _step.value;

          fn();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    };

    _this.subscribers = [];
    return _this;
  }

  /** get child context */


  _createClass(InnerRouter, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
        this.notify();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.children || this.props.children.length === 0) {
        return null;
      }

      if (this.props.children.length > 0) {
        _Logger2.default.error('Router must have only one children.');
        return null;
      }

      if (_react2.default.isValidElement(this.props.children)) {
        return _react2.default.Children.only(this.props.children);
      }
      _Logger2.default.error('The children of `*Router` component must be a single tag (not an array), like `div`|`view` .');
      return null;
    }
  }]);

  return InnerRouter;
}(_react2.default.Component);

exports.default = InnerRouter;


InnerRouter.childContextTypes = {
  subscribe: _propTypes2.default.func,
  router: _propTypes2.default.instanceOf(InnerRouter) // to support root's Route's 'miss' tag
};

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _functional = __webpack_require__(614);

var _functional2 = _interopRequireDefault(_functional);

var _InnerRouter = __webpack_require__(252);

var _InnerRouter2 = _interopRequireDefault(_InnerRouter);

var _RouteControl = __webpack_require__(615);

var _HistoryControl = __webpack_require__(51);

var _HistoryControl2 = _interopRequireDefault(_HistoryControl);

var _matchPath = __webpack_require__(616);

var _matchPath2 = _interopRequireDefault(_matchPath);

var _Util = __webpack_require__(42);

var _Logger = __webpack_require__(81);

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteBase = function (_React$Component) {
  _inherits(RouteBase, _React$Component);

  function RouteBase() {
    var _ref;

    _classCallCheck(this, RouteBase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = RouteBase.__proto__ || Object.getPrototypeOf(RouteBase)).call.apply(_ref, [this].concat(args)));

    _this.locationChanged = function () {
      _this.routeCheckEntry();
    };

    _this.state = {
      status: 0, // 0: unmount, 1: mounted
      mountBy: 0 // 0: mount by route or none, 1: mount by 'cache', 2: mount by 'CacheLink'
    };
    _this.unsubscribe = _this.context.subscribe(_this.locationChanged);

    _this.matcher = null; // dont use state to save matcher, for state will change after component is mounted.
    _this.component = null;

    if (!_this.context.history) {
      throw new Error('Route must be used in Router Component ( HashRouter,BrowserRouter or MemoryRouter )!');
    }
    return _this;
  }

  /** location change listener */


  _createClass(RouteBase, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.locationChanged();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        parent: this
      };
    }

    /** dirty check */

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.offDirtyCheck) {
        return true;
      }
      if (nextState.status) {
        return true;
      }
      return !(0, _Util.compare)(nextProps, this.props) || !(0, _Util.compare)(nextState, this.state);
    }

    /**
     * entry of check
     * compute route mount's state
     */

  }, {
    key: 'routeCheckEntry',
    value: function routeCheckEntry() {
      var matchData = this.checkPath(this.context.history.getCurrentLocation() || {});

      if (matchData.match) {
        this.setToMatch(matchData);
      } else {
        this.setToUnmount(matchData);
      }
    }

    /** set state to match */

  }, {
    key: 'setToMatch',
    value: function setToMatch(matchData) {
      var _this2 = this;

      this.loadComponent(function (succeed, component) {
        if (!succeed) {
          return;
        }

        _this2.setToMount(matchData);
      });
    }

    /**
     * set to mount state
     * (also invoke by outside)
     */

  }, {
    key: 'setToMount',
    value: function setToMount(matchData) {
      this.updateMountStatus({ status: 1, matchData: matchData });
    }

    /**
     * set to unmount state
     */

  }, {
    key: 'setToUnmount',
    value: function setToUnmount(matchData) {
      this.updateMountStatus({ status: 0 });
    }

    /** update bind state */

  }, {
    key: 'updateMountStatus',
    value: function updateMountStatus(_ref2) {
      var status = _ref2.status,
          mountBy = _ref2.mountBy,
          matchData = _ref2.matchData;


      if (typeof mountBy === 'undefined' || mountBy === null) {
        mountBy = 0;
      }

      this.matcher = matchData;
      if (status === 1) {
        this.setState({
          status: status,
          mountBy: mountBy,
          selfPathname: this.getSelfPath(matchData && matchData.matcher)
        });
      } else {
        this.setState({ status: status, mountBy: mountBy });
      }
    }

    /** get parents' path */

  }, {
    key: 'getParentPath',
    value: function getParentPath() {
      var paths = [];
      var rou = this;
      var path = void 0;
      while (rou.context.parent) {
        if (rou.context.parent.matcher && rou.context.parent.matcher.matcher) {
          path = rou.context.parent.matcher.matcher.matchStr;
          if (path && path.indexOf('/') !== 0) {
            path = '/' + path;
          }
          paths.unshift(path);
        }
        rou = rou.context.parent;
      }

      return paths.join('').replace(/[/]{2,}/g, '/');
    }

    /** getSelfPath */

  }, {
    key: 'getSelfPath',
    value: function getSelfPath(matcher) {
      return ('' + this.getParentPath() + (matcher ? matcher.matchStr : '')).replace(/[/]{2,}/g, '/');
    }

    /** check path match */

  }, {
    key: 'checkPath',
    value: function checkPath(location) {
      var pattern = this.props.path;

      var _ref3 = location || {},
          pathname = _ref3.pathname;

      if (typeof pathname === 'undefined') {
        return { match: false };
      }
      pathname = (0, _Util.resetPath)(pathname);
      var parentPath = this.getParentPath();

      if (!pattern) {
        return { match: false };
      }
      pattern = (0, _Util.resetPath)(pattern);

      var checkPathname = pathname;
      if (parentPath) {
        checkPathname = pathname.substring(parentPath.length);
      }

      var matcher = (0, _matchPath2.default)(checkPathname, pattern);

      if (matcher.match) {
        return { match: true, matcher: matcher };
      }
      return { match: false };
    }

    /** load component, contains dynamic component */

  }, {
    key: 'loadComponent',
    value: function loadComponent(callback) {
      var _this3 = this;

      if (this.component) {
        callback(true, this.component);
        return;
      }
      var _props = this.props,
          component = _props.component,
          dynamicComponent = _props.loadComponent;

      if (component) {
        this.component = component ? (0, _Util.isStatelessComponent)(component) ? (0, _functional2.default)({ render: component }) : component : null;
        callback(true, this.component);
        return;
      }
      if (dynamicComponent) {
        dynamicComponent(function (comp) {
          _this3.component = comp ? (0, _Util.isStatelessComponent)(comp) ? (0, _functional2.default)({ render: comp }) : comp : null;
          callback(true, _this3.component);
        });
        return;
      }
      callback(true, null);
    }

    /** render */

  }, {
    key: 'render',
    value: function render() {

      /** 1. unmount state */
      if (this.state.status === 0) {
        return null;
      }

      var children = this.props.children;

      /** mount state */
      if (this.component) {
        var props = (0, _Util.objectWithoutProperties)(this.props, ['children', 'component', 'loadComponent', 'enterFilter', 'leaveFilter', 'path', 'redirect', 'cache', 'index', 'miss']);
        // add route state to props
        props.route = { isActive: this.state.mountBy === 0 };

        props.ref = 'component';

        // create element
        return _react2.default.createElement(this.component, _extends({ pathname: this.state.selfPathname
        }, props, {
          params: this.matcher && this.matcher.matcher ? this.matcher.matcher.params || {} : {}
        }), children);
      }
      if (_react2.default.isValidElement(children)) {
        return _react2.default.cloneElement(_react2.default.Children.only(children), { ref: 'component' });
      }
      _Logger2.default.error('When `Route` component has no component property, it\'s children must be a single tag (not an array), like `div`|`view` .');
      return null;
    }
  }]);

  return RouteBase;
}(_react2.default.Component);

exports.default = RouteBase;


if (process.env.NODE_ENV !== 'production') {

  RouteBase.propTypes = {
    component: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
    loadComponent: _propTypes2.default.func,
    enterFilter: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.func]),
    leaveFilter: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.func]),
    path: _propTypes2.default.string,
    redirect: _propTypes2.default.string,
    cache: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    index: _propTypes2.default.bool,
    miss: _propTypes2.default.bool,
    offDirtyCheck: _propTypes2.default.bool,
    children: _propTypes2.default.any
  };
}

RouteBase.contextTypes = {
  history: _propTypes2.default.object,
  subscribe: _propTypes2.default.func,
  parent: _propTypes2.default.instanceOf(RouteBase),
  router: _propTypes2.default.any
};

RouteBase.childContextTypes = {
  parent: _propTypes2.default.instanceOf(RouteBase)
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports.readState = exports.saveState = undefined;

var _warning = __webpack_require__(9);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuotaExceededErrors = {
  QuotaExceededError: true,
  QUOTA_EXCEEDED_ERR: true
};

var SecurityErrors = {
  SecurityError: true
};

var KeyPrefix = '@@History/';

var createKey = function createKey(key) {
  return KeyPrefix + key;
};

var saveState = exports.saveState = function saveState(key, state) {
  try {
    if (!window.sessionStorage) {
      // Session storage is not available or hidden.
      // sessionStorage is undefined in Internet Explorer when served via file protocol.
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available') : void 0;

      return;
    }

    if (state == null) {
      window.sessionStorage.removeItem(createKey(key));
    } else {
      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
    }
  } catch (error) {
    if (SecurityErrors[error.name]) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available due to security settings') : void 0;

      return;
    }

    if (QuotaExceededErrors[error.name] && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : void 0;

      return;
    }

    throw error;
  }
};

var readState = exports.readState = function readState(key) {
  var json = void 0;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (SecurityErrors[error.name]) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to read state; sessionStorage is not available due to security settings') : void 0;

      return undefined;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return undefined;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _warning = __webpack_require__(9);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var runTransitionHook = function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(result === undefined, 'You should not "return" in a transition hook with a callback argument; ' + 'call the callback instead') : void 0;
  }
};

exports.default = runTransitionHook;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _runTransitionHook = __webpack_require__(255);

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _PathUtils = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useBasename = function useBasename(createHistory) {
  return function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var history = createHistory(options);
    var basename = options.basename;


    var addBasename = function addBasename(location) {
      if (!location) return location;

      if (basename && location.basename == null) {
        if (location.pathname.toLowerCase().indexOf(basename.toLowerCase()) === 0) {
          location.pathname = location.pathname.substring(basename.length);
          location.basename = basename;

          if (location.pathname === '') location.pathname = '/';
        } else {
          location.basename = '';
        }
      }

      return location;
    };

    var prependBasename = function prependBasename(location) {
      if (!basename) return location;

      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
      var pname = object.pathname;
      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
      var pathname = normalizedBasename + normalizedPathname;

      return _extends({}, object, {
        pathname: pathname
      });
    };

    // Override all read methods with basename-aware versions.
    var getCurrentLocation = function getCurrentLocation() {
      return addBasename(history.getCurrentLocation());
    };

    var listenBefore = function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        return (0, _runTransitionHook2.default)(hook, addBasename(location), callback);
      });
    };

    var listen = function listen(listener) {
      return history.listen(function (location) {
        return listener(addBasename(location));
      });
    };

    // Override all write methods with basename-aware versions.
    var push = function push(location) {
      return history.push(prependBasename(location));
    };

    var replace = function replace(location) {
      return history.replace(prependBasename(location));
    };

    var createPath = function createPath(location) {
      return history.createPath(prependBasename(location));
    };

    var createHref = function createHref(location) {
      return history.createHref(prependBasename(location));
    };

    var createLocation = function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
    };

    return _extends({}, history, {
      getCurrentLocation: getCurrentLocation,
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation
    });
  };
};

exports.default = useBasename;

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _HistoryControl = __webpack_require__(51);

var _HistoryControl2 = _interopRequireDefault(_HistoryControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * replace the tag 'A', used to link to a new url
 * @module Link
 */
var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _ref;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args)));

    _this.handleClick = function () {

      if (_this.props.onClick && typeof _this.props.onClick === 'function') {
        _this.props.onClick();
      }

      var _this$props = _this.props,
          to = _this$props.to,
          href = _this$props.href,
          state = _this$props.state;

      if (!to) {
        to = href;
      }
      if (typeof to === 'undefined' || to === null) {
        return;
      }
      if (!to) {
        to = '/';
      }
      if (to.indexOf('#') === 0) {
        to = to.substring(1);
      }
      if (to.indexOf('/') !== 0) {
        to = '/' + to;
      }

      if (_this.context.history.getCurrentLocation().pathname === to) {
        return;
      }

      _this.go(to, state);
    };

    return _this;
  }

  _createClass(Link, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          to = _props.to,
          href = _props.href,
          state = _props.state,
          children = _props.children,
          isActive = _props.isActive,
          activeStyle = _props.activeStyle,
          activeClassName = _props.activeClassName,
          style = _props.style,
          className = _props.className,
          type = _props.type,
          props = _objectWithoutProperties(_props, ['to', 'href', 'state', 'children', 'isActive', 'activeStyle', 'activeClassName', 'style', 'className', 'type']);

      if (!type) {
        type = 'a';
      }

      if (type === 'a') {
        props['href'] = 'javascript:void(0)';
      }

      if (isActive) {
        if (typeof isActive === 'function') {
          isActive = isActive();
        } else {
          isActive = !!isActive;
        }
      } else {
        isActive = _HistoryControl2.default.path === to;
      }

      if (isActive) {
        if (activeStyle) style = Object.assign({}, style, activeStyle);
        if (activeClassName) className = className ? className + ' ' + activeClassName : activeClassName;
      }

      return _react2.default.createElement(type, _extends({ onClick: this.handleClick, style: style, className: className }, props), children);
    }
  }]);

  return Link;
}(_react2.default.Component);

exports.default = Link;


Link.prototype.go = function (to, state) {
  _HistoryControl2.default.go(to, state);
};

if (process.env.NODE_ENV !== 'production') {

  Link.propTypes = {
    state: _propTypes2.default.object,
    to: _propTypes2.default.string.isRequired,
    href: _propTypes2.default.string,
    children: _propTypes2.default.any,
    onClick: _propTypes2.default.func
  };
}

Link.contextTypes = {
  history: _propTypes2.default.object
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isStatelessComponent = exports.arrayContains = exports.objectWithoutProperties = exports.compare = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.size = size;
exports.hashCode = hashCode;
exports.isNull = isNull;
exports.resetPath = resetPath;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** compare two objects */
var compare = exports.compare = function compare(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  if (!obj1 || !obj2) {
    return false;
  }
  if ((typeof obj1 === 'undefined' ? 'undefined' : _typeof(obj1)) !== 'object') {
    if ((typeof obj2 === 'undefined' ? 'undefined' : _typeof(obj2)) === 'object') {
      return false;
    }
    if (obj1 !== obj2) {
      return false;
    }
    return true;
  }

  if ((typeof obj2 === 'undefined' ? 'undefined' : _typeof(obj2)) !== 'object') {
    return false;
  }

  if (size(obj1) !== size(obj2)) {
    return false;
  }

  var result = void 0;
  for (var i in obj1) {
    if (!obj1.hasOwnProperty(i)) {
      continue;
    }
    if (!obj2.hasOwnProperty(i)) {
      return false;
    }
    result = compare(obj1[i], obj2[i]);
    if (!result) {
      return false;
    }
  }
  return true;
};

/**
 * object without properties
 */
var objectWithoutProperties = exports.objectWithoutProperties = function objectWithoutProperties(obj, keys) {
  var re = {};
  if (!obj || !keys || !(keys instanceof Array) || keys.length === 0) {
    return re;
  }
  for (var item in obj) {
    if (arrayContains(keys, item)) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, item)) continue;

    re[item] = obj[item];
  }
  return re;
};

/**
 * array contains
 */
var arrayContains = exports.arrayContains = function arrayContains(array, item) {
  if (!array || !item || !array.length) {
    return false;
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return true;
    }
  }
  return false;
};

/** is stateless component */
var isStatelessComponent = exports.isStatelessComponent = function isStatelessComponent(componentClass) {
  return !componentClass.prototype || !componentClass.prototype.render;
};

/**
 * get the size of an object
 *
 * @method size
 *
 * @param {object} ob    - the object to check
 *
 * @return {int}         - the size of the object
 */
function size(ob) {
  if (!ob) return 0;
  return Object.keys(ob).length;
}

/**
 * get unique hashCode
 * @methdo hashCode - Usually use to create an identify an object
 */
function hashCode() {
  var res = '';
  for (var i = 0; i < 6; i++) {
    res += chars[Math.ceil(Math.random() * 35)];
  }
  return res + new Date().getTime();
}

/** is null */
function isNull(obj) {
  if (typeof obj === 'undefined' || obj === null) {
    return true;
  }
  return false;
}

/**
 * get correct path
 * @method resetPath
 */
function resetPath(path) {
  if (!path) {
    return '/';
  }
  if (path.charAt(0) !== '/') {
    path = '/' + path;
  }
  if (path.length > 1 && path.charAt(path.length - 1) === '/') {
    path = path.substring(0, path.length - 1);
  }
  return path.replace(/\/{2,}/g, '/');
}

var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(500)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(215)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(502);
var Iterators = __webpack_require__(75);
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(205)
  , ITERATOR  = __webpack_require__(21)('iterator')
  , Iterators = __webpack_require__(75);
module.exports = __webpack_require__(24).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(139);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(207)["default"];

exports["default"] = function (obj) {
  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
};

exports.__esModule = true;

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by luwenwe on 2017/9/20.
 */
var baseConfig = {
  localStorageName: "admin"
}; /*基础配置*/

exports.default = baseConfig;

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(76);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(489);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

module.exports = { "default": module.exports, __esModule: true };

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59)))

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(57);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(75)
  , ITERATOR   = __webpack_require__(21)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(214)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(21)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(204);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            return step("next", value);
          }, function (err) {
            return step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(471);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(476);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getMyInfo = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var response;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _axios2.default.get('../package.json');

                    case 2:
                        response = _context.sent;

                        (0, _global.setMyInfo)(response.data);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getMyInfo() {
        return _ref.apply(this, arguments);
    };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactKeeper = __webpack_require__(159);

var _axios = __webpack_require__(203);

var _axios2 = _interopRequireDefault(_axios);

var _app = __webpack_require__(652);

var _app2 = _interopRequireDefault(_app);

var _global = __webpack_require__(130);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { HashRouter } from 'react-router-dom';
/**
 * Created by luwenwei on 17/2/5.
 */
__webpack_require__(925);
__webpack_require__(927);
__webpack_require__(929);

getMyInfo();
_reactDom2.default.render(_react2.default.createElement(
    _reactKeeper.HashRouter,
    null,
    _react2.default.createElement(_app2.default, null)
), document.getElementById('root'));

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */



var _Symbol = __webpack_require__(207)["default"];

var _Object$create = __webpack_require__(211)["default"];

var _Object$setPrototypeOf = __webpack_require__(212)["default"];

var _Promise = __webpack_require__(204)["default"];

!(function (global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof _Symbol === "function" ? _Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = _Object$create((outerFn || Generator).prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (_Object$setPrototypeOf) {
      _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = _Object$create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function (arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value instanceof AwaitArgument) {
          return _Promise.resolve(value.arg).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return _Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new _Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            context.sent = undefined;
          }
        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }
        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59), __webpack_require__(2)))

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(491);
__webpack_require__(210);
module.exports = __webpack_require__(24).Symbol;

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var $              = __webpack_require__(16)
  , global         = __webpack_require__(38)
  , has            = __webpack_require__(134)
  , DESCRIPTORS    = __webpack_require__(105)
  , $export        = __webpack_require__(73)
  , redefine       = __webpack_require__(136)
  , $fails         = __webpack_require__(131)
  , shared         = __webpack_require__(208)
  , setToStringTag = __webpack_require__(106)
  , uid            = __webpack_require__(209)
  , wks            = __webpack_require__(21)
  , keyOf          = __webpack_require__(492)
  , $names         = __webpack_require__(493)
  , enumKeys       = __webpack_require__(494)
  , isArray        = __webpack_require__(495)
  , anObject       = __webpack_require__(57)
  , toIObject      = __webpack_require__(107)
  , createDesc     = __webpack_require__(138)
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , _create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , useNative      = typeof $Symbol == 'function'
  , ObjectProto    = Object.prototype;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(setDesc({}, 'a', {
    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = getDesc(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  setDesc(it, key, D);
  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
} : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function(it){
  return typeof it == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toIObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};
var $stringify = function stringify(it){
  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
  var args = [it]
    , i    = 1
    , $$   = arguments
    , replacer, $replacer;
  while($$.length > i)args.push($$[i++]);
  replacer = args[1];
  if(typeof replacer == 'function')$replacer = replacer;
  if($replacer || !isArray(replacer))replacer = function(key, value){
    if($replacer)value = $replacer.call(this, key, value);
    if(!isSymbol(value))return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var buggyJSON = $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  redefine($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  isSymbol = function(it){
    return it instanceof $Symbol;
  };

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(140)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
  'species,split,toPrimitive,toStringTag,unscopables'
).split(','), function(it){
  var sym = wks(it);
  symbolStatics[it] = useNative ? sym : wrap(sym);
});

setter = true;

$export($export.G + $export.W, {Symbol: $Symbol});

$export($export.S, 'Symbol', symbolStatics);

$export($export.S + $export.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

var $         = __webpack_require__(16)
  , toIObject = __webpack_require__(107);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(107)
  , getNames  = __webpack_require__(16).getNames
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var $ = __webpack_require__(16);
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(76);
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(16);
module.exports = function create(P, D){
  return $.create(P, D);
};

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(498);
module.exports = __webpack_require__(24).Object.setPrototypeOf;

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(73);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(213).set});

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(210);
__webpack_require__(459);
__webpack_require__(460);
__webpack_require__(505);
module.exports = __webpack_require__(24).Promise;

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(214)
  , defined   = __webpack_require__(139);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $              = __webpack_require__(16)
  , descriptor     = __webpack_require__(138)
  , setToStringTag = __webpack_require__(106)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(137)(IteratorPrototype, __webpack_require__(21)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(503)
  , step             = __webpack_require__(504)
  , Iterators        = __webpack_require__(75)
  , toIObject        = __webpack_require__(107);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(215)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ 503:
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),

/***/ 504:
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $          = __webpack_require__(16)
  , LIBRARY    = __webpack_require__(140)
  , global     = __webpack_require__(38)
  , ctx        = __webpack_require__(74)
  , classof    = __webpack_require__(205)
  , $export    = __webpack_require__(73)
  , isObject   = __webpack_require__(108)
  , anObject   = __webpack_require__(57)
  , aFunction  = __webpack_require__(135)
  , strictNew  = __webpack_require__(506)
  , forOf      = __webpack_require__(507)
  , setProto   = __webpack_require__(213).set
  , same       = __webpack_require__(508)
  , SPECIES    = __webpack_require__(21)('species')
  , speciesConstructor = __webpack_require__(509)
  , asap       = __webpack_require__(510)
  , PROMISE    = 'Promise'
  , process    = global.process
  , isNode     = classof(process) == 'process'
  , P          = global[PROMISE]
  , empty      = function(){ /* empty */ }
  , Wrapper;

var testResolve = function(sub){
  var test = new P(empty), promise;
  if(sub)test.constructor = function(exec){
    exec(empty, empty);
  };
  (promise = P.resolve(test))['catch'](empty);
  return promise === test;
};

var USE_NATIVE = function(){
  var works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = P && P.resolve && testResolve();
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
    if(works && __webpack_require__(105)){
      var thenableThenGotten = false;
      P.resolve($.setDesc({}, 'then', {
        get: function(){ thenableThenGotten = true; }
      }));
      works = thenableThenGotten;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
var sameConstructor = function(a, b){
  // library wrapper special case
  if(LIBRARY && a === P && b === Wrapper)return true;
  return same(a, b);
};
var getConstructor = function(C){
  var S = anObject(C)[SPECIES];
  return S != undefined ? S : C;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var PromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve),
  this.reject  = aFunction(reject)
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(record, isReject){
  if(record.n)return;
  record.n = true;
  var chain = record.c;
  asap(function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , result, then;
      try {
        if(handler){
          if(!ok)record.h = true;
          result = handler === true ? value : handler(value);
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    chain.length = 0;
    record.n = false;
    if(isReject)setTimeout(function(){
      var promise = record.p
        , handler, console;
      if(isUnhandled(promise)){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      } record.a = undefined;
    }, 1);
  });
};
var isUnhandled = function(promise){
  var record = promise._d
    , chain  = record.a || record.c
    , i      = 0
    , reaction;
  if(record.h)return false;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var $reject = function(value){
  var record = this;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  notify(record, true);
};
var $resolve = function(value){
  var record = this
    , then;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(record.p === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      asap(function(){
        var wrapper = {r: record, d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      record.v = value;
      record.s = 1;
      notify(record, false);
    }
  } catch(e){
    $reject.call({r: record, d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    aFunction(executor);
    var record = this._d = {
      p: strictNew(this, P, PROMISE),         // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false,                               // <- handled rejection
      n: false                                // <- notify
    };
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  __webpack_require__(515)(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction = new PromiseCapability(speciesConstructor(this, P))
        , promise  = reaction.promise
        , record   = this._d;
      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      record.c.push(reaction);
      if(record.a)record.a.push(reaction);
      if(record.s)notify(record, false);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
__webpack_require__(106)(P, PROMISE);
__webpack_require__(516)(PROMISE);
Wrapper = __webpack_require__(24)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = new PromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof P && sameConstructor(x.constructor, this))return x;
    var capability = new PromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(475)(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject
      , values     = [];
    var abrupt = perform(function(){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        var alreadyCalled = false;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled = true;
          results[index] = value;
          --remaining || resolve(results);
        }, reject);
      });
      else resolve(results);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),

/***/ 506:
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(74)
  , call        = __webpack_require__(472)
  , isArrayIter = __webpack_require__(473)
  , anObject    = __webpack_require__(57)
  , toLength    = __webpack_require__(474)
  , getIterFn   = __webpack_require__(461);
module.exports = function(iterable, entries, fn, that){
  var iterFn = getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    call(iterator, f, step.value, entries);
  }
};

/***/ }),

/***/ 508:
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(57)
  , aFunction = __webpack_require__(135)
  , SPECIES   = __webpack_require__(21)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listener = exports.setHistory = undefined;
exports.go = go;
exports.replace = replace;

var _Logger = __webpack_require__(81);

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * dynamicly put value to History Object
 * mainly called by RouteHistory
 * @method set
 *
 * @param {string} key
 * @param {object} value
 * @return none
 */

var setHistory = exports.setHistory = function setHistory(history) {
  HistoryControl.history = history;
};

var listener = exports.listener = function listener(location, action) {
  HistoryControl.path = location.pathname;
  HistoryControl.state = location.state;
};

function go(pathOrIndex, state) {

  if (typeof pathOrIndex === 'number') {
    if (pathOrIndex === -1) {
      HistoryControl.history.goBack();
    } else if (pathOrIndex === 1) {
      HistoryControl.history.goForward();
    } else {
      HistoryControl.history.go(pathOrIndex);
    }
  } else {
    if (pathOrIndex === HistoryControl.path) return;
    if (HistoryControl.history) {
      HistoryControl.history.push({ pathname: pathOrIndex, state: state });
      HistoryControl.history.goForward();
    } else {
      setTimeout(function () {
        if (HistoryControl.history) {
          HistoryControl.history.push({ pathname: pathOrIndex, state: state });
          HistoryControl.history.goForward();
        }
      }, 0);
    }
  }
}

function replace(path, state) {
  HistoryControl.history.replace({ pathname: path, state: state });
}

/**
 * export History Object to outer' using
 */
var HistoryControl = {
  path: '/',
  state: null,
  go: go,
  replace: replace
};

exports.default = HistoryControl;

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(38)
  , macrotask = __webpack_require__(511).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(76)(process) == 'process'
  , head, last, notify;

var flush = function(){
  var parent, domain, fn;
  if(isNode && (parent = process.domain)){
    process.domain = null;
    parent.exit();
  }
  while(head){
    domain = head.domain;
    fn     = head.fn;
    if(domain)domain.enter();
    fn(); // <- currently we use it only for Promise - try / catch not required
    if(domain)domain.exit();
    head = head.next;
  } last = undefined;
  if(parent)parent.enter();
};

// Node.js
if(isNode){
  notify = function(){
    process.nextTick(flush);
  };
// browsers with MutationObserver
} else if(Observer){
  var toggle = 1
    , node   = document.createTextNode('');
  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
  notify = function(){
    node.data = toggle = -toggle;
  };
// environments with maybe non-completely correct, but existent Promise
} else if(Promise && Promise.resolve){
  notify = function(){
    Promise.resolve().then(flush);
  };
// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
} else {
  notify = function(){
    // strange IE + webpack dev server bug - use .call(global)
    macrotask.call(global, flush);
  };
}

module.exports = function asap(fn){
  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
  if(last)last.next = task;
  if(!head){
    head = task;
    notify();
  } last = task;
};

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(74)
  , invoke             = __webpack_require__(512)
  , html               = __webpack_require__(513)
  , cel                = __webpack_require__(514)
  , global             = __webpack_require__(38)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listner = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(76)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listner, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),

/***/ 512:
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38).document && document.documentElement;

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(108)
  , document = __webpack_require__(38).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(136);
module.exports = function(target, src){
  for(var key in src)redefine(target, key, src[key]);
  return target;
};

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core        = __webpack_require__(24)
  , $           = __webpack_require__(16)
  , DESCRIPTORS = __webpack_require__(105)
  , SPECIES     = __webpack_require__(21)('species');

module.exports = function(KEY){
  var C = core[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports.createPath = exports.parsePath = exports.getQueryStringValueFromPath = exports.stripQueryStringValueFromPath = exports.addQueryStringValueToPath = undefined;

var _warning = __webpack_require__(9);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addQueryStringValueToPath = exports.addQueryStringValueToPath = function addQueryStringValueToPath(path, key, value) {
  var _parsePath = parsePath(path);

  var pathname = _parsePath.pathname;
  var search = _parsePath.search;
  var hash = _parsePath.hash;


  return createPath({
    pathname: pathname,
    search: search + (search.indexOf('?') === -1 ? '?' : '&') + key + '=' + value,
    hash: hash
  });
};

var stripQueryStringValueFromPath = exports.stripQueryStringValueFromPath = function stripQueryStringValueFromPath(path, key) {
  var _parsePath2 = parsePath(path);

  var pathname = _parsePath2.pathname;
  var search = _parsePath2.search;
  var hash = _parsePath2.hash;


  return createPath({
    pathname: pathname,
    search: search.replace(new RegExp('([?&])' + key + '=[a-zA-Z0-9]+(&?)'), function (match, prefix, suffix) {
      return prefix === '?' ? prefix : suffix;
    }),
    hash: hash
  });
};

var getQueryStringValueFromPath = exports.getQueryStringValueFromPath = function getQueryStringValueFromPath(path, key) {
  var _parsePath3 = parsePath(path);

  var search = _parsePath3.search;

  var match = search.match(new RegExp('[?&]' + key + '=([a-zA-Z0-9]+)'));
  return match && match[1];
};

var extractPath = function extractPath(string) {
  var match = string.match(/^(https?:)?\/\/[^\/]*/);
  return match == null ? string : string.substring(match[0].length);
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = extractPath(path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(path === pathname, 'A path must be pathname + search + hash only, not a full URL like "%s"', path) : void 0;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  if (location == null || typeof location === 'string') return location;

  var basename = location.basename;
  var pathname = location.pathname;
  var search = location.search;
  var hash = location.hash;

  var path = (basename || '') + pathname;

  if (search && search !== '?') path += search;

  if (hash) path += hash;

  return path;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(108);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Router = __webpack_require__(160);

var _Router2 = _interopRequireDefault(_Router);

var _createHashHistory = __webpack_require__(618);

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

var _useBasename = __webpack_require__(256);

var _useBasename2 = _interopRequireDefault(_useBasename);

var _Util = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _ref;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = HashRouter.__proto__ || Object.getPrototypeOf(HashRouter)).call.apply(_ref, [this].concat(args)));

    _this.createHistory = function () {
      var _this$props = _this.props,
          basename = _this$props.basename,
          hashType = _this$props.hashType,
          getUserConfirmation = _this$props.getUserConfirmation;

      if (basename && !/^(\.|\/)/.test(basename)) basename = (0, _Util.resetPath)(basename);
      if (basename) {
        return (0, _useBasename2.default)(_createHashHistory2.default)({ basename: basename, hashType: hashType, getUserConfirmation: getUserConfirmation });
      } else {
        return (0, _createHashHistory2.default)({ hashType: hashType, getUserConfirmation: getUserConfirmation });
      }
    };

    _this.history = _this.createHistory();
    _this.history.type = 'hash';
    return _this;
  }

  _createClass(HashRouter, [{
    key: 'render',
    value: function render() {
      var props = (0, _Util.objectWithoutProperties)(this.props, ['basename', 'hashType', 'getUserConfirmation']);
      return _react2.default.createElement(_Router2.default, _extends({ history: this.history }, props));
    }
  }]);

  return HashRouter;
}(_react2.default.Component);

exports.default = HashRouter;

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (component) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!component) {
    throw new Error('\n      [ReactStateless.createClass(component)] stateless needs a component\n    ');
  }

  component = component instanceof Function ? _extends({ render: component }, component) : component;

  if (!('render' in component)) {
    throw new Error('\n      [ReactStateless.createClass(component)] No render function found.\n      "component" should be a render function or contain a render function.\n    ');
  }

  component = _extends({}, component, opts);

  var _component = component,
      _render = _component.render;


  var displayName = _render.name;

  var methods = ['componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

  var properties = ['propTypes', 'defaultProps', 'getDefaultProps', 'displayName'];

  var spec = _extends({
    displayName: displayName,
    render: function render() {
      return _render(this.props, this);
    }
  }, properties.reduce(function (o, p) {
    if (!(p in component)) return o;
    o[p] = component[p];
    return o;
  }, {}), methods.reduce(function (o, m) {
    if (!(m in component)) return o;
    o[m] = function (input) {
      var _component2;

      if (!this) throw Error('NO CONTEXT');
      var props = this.props,
          refs = this.refs;

      return (_component2 = component)[m].apply(_component2, _toConsumableArray([props, input, refs, this].filter(Boolean)));
    };
    return o;
  }, {}));

  return (0, _createReactClass2.default)(spec);
};

var _createReactClass = __webpack_require__(10);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelfPathname = exports.getMatchedPath = exports.getMatch = exports.shouldMatch = exports.removeMatch = exports.getLastMatchedRoute = exports.addMatch = exports.clearMatch = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Util = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** record the matched component by asc order */
var routeMatch = [];

/** clear all matched component, used when path changed */
var clearMatch = function clearMatch() {
  routeMatch = [];
};

/** when a component matched the path and should to be mount, record it */
var addMatch = function addMatch(instance) {
  if (routeMatch.length > 0) {
    routeMatch.forEach(function (item) {
      if (item === instance) {
        return;
      }
    });
  }
  routeMatch.push(instance);
};

/** get last matched route */
var getLastMatchedRoute = function getLastMatchedRoute() {
  return routeMatch.length ? routeMatch[routeMatch.length - 1] : null;
};

/** get match component */
var getMatch = function getMatch(index) {
  if (routeMatch.length === 0) {
    return null;
  }
  if (index < 0 || index >= routeMatch.length) {
    return routeMatch[routeMatch.length - 1];
  }
  return routeMatch[index];
};

/** get matched path, all components matched will be counted */
var getMatchedPath = function getMatchedPath() {
  if (routeMatch.length === 0) {
    return '';
  }
  var path = [];
  routeMatch.forEach(function (item) {
    if (item.matcher) path.push(item.matcher.matchStr);
  });
  return path.join('');
};

/**
 * get addtive mathced component path
 * different with getMatchedPath
 */
var getSelfPathname = function getSelfPathname(obj) {
  if (!obj.context) {
    return '';
  }
  var path = [];
  (obj.context.routes || []).forEach(function (item) {
    // path.push(resetPath(item.props.path))
    path.push(item.matcher ? item.matcher.matchStr : '');
  });
  path.push(obj.matcher ? obj.matcher.matchStr : '');
  return path.join('');
};

/** when a component unmount, remove it */
var removeMatch = function removeMatch(instance) {
  routeMatch.forEach(function (item, index) {
    if (item === instance) {
      routeMatch = routeMatch.splice(index, 1);
      return;
    }
  });
};

/**
 * 'index' property support
 * when no component matched, this one will match if condition
 * the condition is 'when no matched, it's parent is last matched one'
 */
// const checkMissMatch = (child) => {
//   const parent = routeMatch.length>0? routeMatch[0] : ''
//   if(!child) {
//     return
//   }
//   setTimeout(()=> {
//     if(routeMatch.length===0) {
//       if(parent === '') {
//         child.setToMount()
//       }
//       return
//     }
//     if(routeMatch[routeMatch.length-1] === parent) {
//       child.setToMount()
//       return
//     }
//   }, 0)
// }

/**
 * to judge if a component should match
 * the condition is 'if it's the direct child of last matched component'
 */
var shouldMatch = function shouldMatch(instance) {
  var match = false;
  if (routeMatch.length === 0) {
    match = true;
  } else {
    match = (0, _Util.reactContains)(routeMatch[routeMatch.length - 1], instance);
  }
  return match;
};

exports.clearMatch = clearMatch;
exports.addMatch = addMatch;
exports.getLastMatchedRoute = getLastMatchedRoute;
exports.removeMatch = removeMatch;
exports.shouldMatch = shouldMatch;
exports.getMatch = getMatch;
exports.getMatchedPath = getMatchedPath;
exports.getSelfPathname = getSelfPathname;

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matchPath;

var _compilePattern = __webpack_require__(617);

var _compilePattern2 = _interopRequireDefault(_compilePattern);

var _Util = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * match path with pattern
 * @module matchPath
 *   1. check if the path matches the pattern
 *   2. retract param values by param names from the path
 *
 * @param {string} path         - the path of next location
 * @param {string} pattern      - the pattern defined by property 'path' on the component 'Route'
 *
 * @return {object} {
 *     match: {boolean}         - match result
 *     params: {object}         - param names & param values of the path
 *   }
 */
function matchPath(path, pattern) {
  if (!patterns[pattern]) {
    patterns[pattern] = (0, _compilePattern2.default)(pattern);
  }
  path = (0, _Util.resetPath)(path);

  var patternCompile = patterns[pattern];
  var regular = new RegExp(patternCompile.regular, 'g');
  var match = regular.exec(path);
  if (!match) {
    return { match: false };
  }

  var matchers = match.splice(1);
  var params = {};
  if (patternCompile.params) {
    for (var index in patternCompile.params) {
      params[patternCompile.params[index]] = matchers.length > index ? matchers[index] : null;
    }
  }
  return {
    pattern: pattern,
    match: true,
    params: params,
    matchStr: match[0],
    lastIndex: regular.lastIndex
  };
}

/**
 * @property {object} patterns  - record the patterns(with param names) of the paths
 */
var patterns = {};

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compilePattern;
/**
 * compile path pattern
 * @module compilePattern
 *   1. compile path pattern to regular string
 *   2. extrac param names from path pattern
 *
 * @param {string} pattern - the pattern defined by property 'path' on the component 'Route'
 */
function compilePattern(pattern) {

  // '>' means 'end'
  var endForcedCheck = false;
  if (pattern.indexOf('>') === pattern.length - 1) {
    endForcedCheck = true;
    pattern = pattern.substring(0, pattern.length - 1);
  }
  pattern = pattern.replace(/\$/g, '\\$');

  var regular = [];
  var params = {};
  var _ulrPart = '([0-9a-zA-Z-_$%]+)';
  var _rule = new RegExp('\\(\\/:' + _ulrPart + '\\)|:' + _ulrPart + '|(\\*\\*)|(\\*)', 'g');

  var _match = void 0;
  var _lastIndex = 0;
  var _index = 0;

  while (_match = _rule.exec(pattern)) {

    regular.push(pattern.substring(_lastIndex, _match.index));

    if (_match[0] === '**') {

      regular.push('(.*)');
    } else if (_match[0] === '*') {

      regular.push('([^\/]+)');
    } else if (_match[0].indexOf('(/:') === 0) {

      regular.push('(?:/' + _ulrPart + ')?');
      params[_index] = _match[1];
    } else if (_match[0].indexOf(':') === 0) {

      regular.push('' + _ulrPart);
      params[_index] = _match[2];
    }

    _lastIndex = _rule.lastIndex;
    _index++;
  }

  if (_lastIndex < pattern.length) {
    regular.push(pattern.substring(_lastIndex, pattern.length));
  }

  if (endForcedCheck) {
    regular.push('$');
  } else if (regular.length !== 1 || regular[0] !== '/') {
    /** followed by `/` or none */
    regular.push('(?=/|$)');
  }

  return {
    regular: regular.join(''),
    params: params,
    pattern: pattern
  };
}

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(9);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(14);

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = __webpack_require__(162);

var _DOMUtils = __webpack_require__(117);

var _HashProtocol = __webpack_require__(619);

var HashProtocol = _interopRequireWildcard(_HashProtocol);

var _createHistory = __webpack_require__(165);

var _createHistory2 = _interopRequireDefault(_createHistory);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultQueryKey = '_k';

var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!' + path;
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substring(1) : path;
    }
  },
  noslash: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '/' ? path.substring(1) : path;
    },
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

var createHashHistory = function createHashHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Hash history needs a DOM') : (0, _invariant2.default)(false) : void 0;

  var queryKey = options.queryKey;
  var hashType = options.hashType;


  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(queryKey !== false, 'Using { queryKey: false } no longer works. Instead, just don\'t ' + 'use location state if you don\'t want a key in your URL query string') : void 0;

  if (typeof queryKey !== 'string') queryKey = DefaultQueryKey;

  if (hashType == null) hashType = 'slash';

  if (!(hashType in HashPathCoders)) {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Invalid hash type: %s', hashType) : void 0;

    hashType = 'slash';
  }

  var pathCoder = HashPathCoders[hashType];

  var getUserConfirmation = HashProtocol.getUserConfirmation;


  var getCurrentLocation = function getCurrentLocation() {
    return HashProtocol.getCurrentLocation(pathCoder, queryKey);
  };

  var pushLocation = function pushLocation(location) {
    return HashProtocol.pushLocation(location, pathCoder, queryKey);
  };

  var replaceLocation = function replaceLocation(location) {
    return HashProtocol.replaceLocation(location, pathCoder, queryKey);
  };

  var history = (0, _createHistory2.default)(_extends({
    getUserConfirmation: getUserConfirmation }, options, {
    getCurrentLocation: getCurrentLocation,
    pushLocation: pushLocation,
    replaceLocation: replaceLocation,
    go: HashProtocol.go
  }));

  var listenerCount = 0,
      stopListener = void 0;

  var startListener = function startListener(listener, before) {
    if (++listenerCount === 1) stopListener = HashProtocol.startListener(history.transitionTo, pathCoder, queryKey);

    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopListener();
    };
  };

  var listenBefore = function listenBefore(listener) {
    return startListener(listener, true);
  };

  var listen = function listen(listener) {
    return startListener(listener, false);
  };

  var goIsSupportedWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var go = function go(n) {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;

    history.go(n);
  };

  var createHref = function createHref(path) {
    return '#' + pathCoder.encodePath(history.createHref(path));
  };

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    go: go,
    createHref: createHref
  });
};

exports.default = createHashHistory;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

var _BrowserProtocol = __webpack_require__(163);

Object.defineProperty(exports, 'getUserConfirmation', {
  enumerable: true,
  get: function get() {
    return _BrowserProtocol.getUserConfirmation;
  }
});
Object.defineProperty(exports, 'go', {
  enumerable: true,
  get: function get() {
    return _BrowserProtocol.go;
  }
});

var _warning = __webpack_require__(9);

var _warning2 = _interopRequireDefault(_warning);

var _LocationUtils = __webpack_require__(82);

var _DOMUtils = __webpack_require__(117);

var _DOMStateStorage = __webpack_require__(254);

var _PathUtils = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashChangeEvent = 'hashchange';

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var supportStateFunction = function supportStateFunction() {
  return typeof window.history.pushState === 'function' && typeof window.history.replaceState === 'function';
};

var pushHashPath = function pushHashPath(path, state) {
  if (supportStateFunction()) {
    window.history.pushState(state, undefined, '#' + path);
  } else {
    window.location.hash = path;
  }
};

var replaceHashPath = function replaceHashPath(path, state) {
  if (supportStateFunction()) {
    window.history.replaceState(state, undefined, '#' + path);
  } else {
    var hashIndex = window.location.href.indexOf('#');

    window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
  }
};

var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation(pathCoder, queryKey) {
  var path = pathCoder.decodePath(getHashPath());
  var key = (0, _PathUtils.getQueryStringValueFromPath)(path, queryKey);
  var state = void 0;
  if (key) {
    path = (0, _PathUtils.stripQueryStringValueFromPath)(path, queryKey);
    state = (0, _DOMStateStorage.readState)(key);
  } else {
    state = window.history.state;
  }

  var init = (0, _PathUtils.parsePath)(path);
  init.state = state;

  return (0, _LocationUtils.createLocation)(init, undefined, key);
};

var prevLocation = void 0;

var startListener = exports.startListener = function startListener(listener, pathCoder, queryKey) {
  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = pathCoder.encodePath(path);

    if (path !== encodedPath) {
      // Always be sure we have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var currentLocation = getCurrentLocation(pathCoder, queryKey);

      if (prevLocation && currentLocation.key && prevLocation.key === currentLocation.key) return; // Ignore extraneous hashchange events

      prevLocation = currentLocation;

      listener(currentLocation);
    }
  };

  // Ensure the hash is encoded properly.
  var path = getHashPath();
  var encodedPath = pathCoder.encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);

  return function () {
    return (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
  };
};

var updateLocation = function updateLocation(location, pathCoder, queryKey, updateHash) {
  var state = location.state;
  var key = location.key;


  var path = pathCoder.encodePath((0, _PathUtils.createPath)(location));

  if (state !== undefined && typeof window.history.pushState !== 'function') {
    path = (0, _PathUtils.addQueryStringValueToPath)(path, queryKey, key);
    (0, _DOMStateStorage.saveState)(key, state);
  }

  prevLocation = location;

  updateHash(path, state);
};

var pushLocation = exports.pushLocation = function pushLocation(location, pathCoder, queryKey) {
  return updateLocation(location, pathCoder, queryKey, function (path, state) {
    if (getHashPath() !== path) {
      pushHashPath(path, state);
    } else {
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'You cannot PUSH the same path using hash history') : void 0;
    }
  });
};

var replaceLocation = exports.replaceLocation = function replaceLocation(location, pathCoder, queryKey) {
  return updateLocation(location, pathCoder, queryKey, function (path, state) {
    if (getHashPath() !== path) replaceHashPath(path, state);
  });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var loopAsync = exports.loopAsync = function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var isSync = false,
      hasNext = false,
      doneArgs = void 0;

  var done = function done() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    isDone = true;

    if (isSync) {
      // Iterate instead of recursing if possible.
      doneArgs = args;
      return;
    }

    callback.apply(undefined, args);
  };

  var next = function next() {
    if (isDone) return;

    hasNext = true;

    if (isSync) return; // Iterate instead of recursing if possible.

    isSync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work(currentTurn++, next, done);
    }

    isSync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(undefined, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  };

  next();
};

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Router = __webpack_require__(160);

var _Router2 = _interopRequireDefault(_Router);

var _createBrowserHistory = __webpack_require__(622);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _useBasename = __webpack_require__(256);

var _useBasename2 = _interopRequireDefault(_useBasename);

var _Util = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _ref;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = BrowserRouter.__proto__ || Object.getPrototypeOf(BrowserRouter)).call.apply(_ref, [this].concat(args)));

    _this.createHistory = function () {
      var _this$props = _this.props,
          basename = _this$props.basename,
          hashType = _this$props.hashType,
          getUserConfirmation = _this$props.getUserConfirmation;

      if (basename && !/^(\.|\/)/.test(basename)) basename = (0, _Util.resetPath)(basename);
      var history = void 0;
      if (basename) {
        history = (0, _useBasename2.default)(_createBrowserHistory2.default)({ basename: basename, getUserConfirmation: getUserConfirmation });
      } else {
        history = (0, _createBrowserHistory2.default)({ getUserConfirmation: getUserConfirmation });
      }
      return history;
    };

    _this.history = _this.createHistory();
    _this.history.type = 'browser';
    return _this;
  }

  _createClass(BrowserRouter, [{
    key: 'render',
    value: function render() {
      var props = (0, _Util.objectWithoutProperties)(this.props, ['basename', 'hashType', 'getUserConfirmation']);
      return _react2.default.createElement(_Router2.default, _extends({ history: this.history }, props));
    }
  }]);

  return BrowserRouter;
}(_react2.default.Component);

exports.default = BrowserRouter;

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _invariant = __webpack_require__(14);

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = __webpack_require__(162);

var _BrowserProtocol = __webpack_require__(163);

var BrowserProtocol = _interopRequireWildcard(_BrowserProtocol);

var _RefreshProtocol = __webpack_require__(623);

var RefreshProtocol = _interopRequireWildcard(_RefreshProtocol);

var _DOMUtils = __webpack_require__(117);

var _createHistory = __webpack_require__(165);

var _createHistory2 = _interopRequireDefault(_createHistory);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve clean URLs. You can force this
 * behavior using { forceRefresh: true } in options.
 */
var createBrowserHistory = function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Browser history needs a DOM') : (0, _invariant2.default)(false) : void 0;

  var useRefresh = options.forceRefresh || !(0, _DOMUtils.supportsHistory)();
  var Protocol = useRefresh ? RefreshProtocol : BrowserProtocol;

  var getUserConfirmation = Protocol.getUserConfirmation;
  var getCurrentLocation = Protocol.getCurrentLocation;
  var pushLocation = Protocol.pushLocation;
  var replaceLocation = Protocol.replaceLocation;
  var go = Protocol.go;


  var history = (0, _createHistory2.default)(_extends({
    getUserConfirmation: getUserConfirmation }, options, {
    getCurrentLocation: getCurrentLocation,
    pushLocation: pushLocation,
    replaceLocation: replaceLocation,
    go: go
  }));

  var listenerCount = 0,
      stopListener = void 0;

  var startListener = function startListener(listener, before) {
    if (++listenerCount === 1) stopListener = BrowserProtocol.startListener(history.transitionTo);

    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopListener();
    };
  };

  var listenBefore = function listenBefore(listener) {
    return startListener(listener, true);
  };

  var listen = function listen(listener) {
    return startListener(listener, false);
  };

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen
  });
};

exports.default = createBrowserHistory;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.replaceLocation = exports.pushLocation = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

var _BrowserProtocol = __webpack_require__(163);

Object.defineProperty(exports, 'getUserConfirmation', {
  enumerable: true,
  get: function get() {
    return _BrowserProtocol.getUserConfirmation;
  }
});
Object.defineProperty(exports, 'go', {
  enumerable: true,
  get: function get() {
    return _BrowserProtocol.go;
  }
});

var _LocationUtils = __webpack_require__(82);

var _PathUtils = __webpack_require__(52);

var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
  return (0, _LocationUtils.createLocation)(window.location);
};

var pushLocation = exports.pushLocation = function pushLocation(location) {
  window.location.href = (0, _PathUtils.createPath)(location);
  return false; // Don't update location
};

var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
  window.location.replace((0, _PathUtils.createPath)(location));
  return false; // Don't update location
};

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Router = __webpack_require__(160);

var _Router2 = _interopRequireDefault(_Router);

var _createMemoryHistory = __webpack_require__(625);

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _Util = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MemoryRouter = function (_React$Component) {
  _inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _ref;

    _classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MemoryRouter.__proto__ || Object.getPrototypeOf(MemoryRouter)).call.apply(_ref, [this].concat(args)));

    _this.createHistory = function () {
      var _this$props = _this.props,
          initialEntries = _this$props.initialEntries,
          initialIndex = _this$props.initialIndex,
          getUserConfirmation = _this$props.getUserConfirmation;

      return (0, _createMemoryHistory2.default)({ initialEntries: initialEntries, initialIndex: initialIndex, getUserConfirmation: getUserConfirmation });
    };

    _this.history = _this.createHistory();
    _this.history.type = 'memory';
    return _this;
  }

  _createClass(MemoryRouter, [{
    key: 'render',
    value: function render() {
      var props = (0, _Util.objectWithoutProperties)(this.props, ['initialEntries', 'initialIndex', 'getUserConfirmation']);
      return _react2.default.createElement(_Router2.default, _extends({ history: this.history }, props));
    }
  }]);

  return MemoryRouter;
}(_react2.default.Component);

exports.default = MemoryRouter;

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(9);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(14);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(82);

var _PathUtils = __webpack_require__(52);

var _createHistory = __webpack_require__(165);

var _createHistory2 = _interopRequireDefault(_createHistory);

var _Actions = __webpack_require__(164);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStateStorage = function createStateStorage(entries) {
  return entries.filter(function (entry) {
    return entry.state;
  }).reduce(function (memo, entry) {
    memo[entry.key] = entry.state;
    return memo;
  }, {});
};

var createMemoryHistory = function createMemoryHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  if (Array.isArray(options)) {
    options = { entries: options };
  } else if (typeof options === 'string') {
    options = { entries: [options] };
  }

  var getCurrentLocation = function getCurrentLocation() {
    var entry = entries[current];
    var path = (0, _PathUtils.createPath)(entry);

    var key = void 0,
        state = void 0;
    if (entry.key) {
      key = entry.key;
      state = readState(key);
    }

    var init = (0, _PathUtils.parsePath)(path);

    return (0, _LocationUtils.createLocation)(_extends({}, init, { state: state }), undefined, key);
  };

  var canGo = function canGo(n) {
    var index = current + n;
    return index >= 0 && index < entries.length;
  };

  var go = function go(n) {
    if (!n) return;

    if (!canGo(n)) {
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Cannot go(%s) there is not enough history', n) : void 0;

      return;
    }

    current += n;
    var currentLocation = getCurrentLocation();

    // Change action to POP
    history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
  };

  var pushLocation = function pushLocation(location) {
    current += 1;

    if (current < entries.length) entries.splice(current);

    entries.push(location);

    saveState(location.key, location.state);
  };

  var replaceLocation = function replaceLocation(location) {
    entries[current] = location;
    saveState(location.key, location.state);
  };

  var history = (0, _createHistory2.default)(_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    pushLocation: pushLocation,
    replaceLocation: replaceLocation,
    go: go
  }));

  var _options = options;
  var entries = _options.entries;
  var current = _options.current;


  if (typeof entries === 'string') {
    entries = [entries];
  } else if (!Array.isArray(entries)) {
    entries = ['/'];
  }

  entries = entries.map(function (entry) {
    return (0, _LocationUtils.createLocation)(entry);
  });

  if (current == null) {
    current = entries.length - 1;
  } else {
    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : (0, _invariant2.default)(false) : void 0;
  }

  var storage = createStateStorage(entries);

  var saveState = function saveState(key, state) {
    return storage[key] = state;
  };

  var readState = function readState(key) {
    return storage[key];
  };

  return _extends({}, history, {
    canGo: canGo
  });
};

exports.default = createMemoryHistory;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _RouteBase = __webpack_require__(253);

var _RouteBase2 = _interopRequireDefault(_RouteBase);

var _RouteIndex = __webpack_require__(627);

var _RouteIndex2 = _interopRequireDefault(_RouteIndex);

var _RouteCache = __webpack_require__(628);

var _RouteCache2 = _interopRequireDefault(_RouteCache);

var _RouteFilter = __webpack_require__(630);

var _RouteFilter2 = _interopRequireDefault(_RouteFilter);

var _RouteRedirect = __webpack_require__(631);

var _RouteRedirect2 = _interopRequireDefault(_RouteRedirect);

var _RouteMiss2 = __webpack_require__(632);

var _RouteMiss3 = _interopRequireDefault(_RouteMiss2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Route = function (_RouteMiss) {
  _inherits(Route, _RouteMiss);

  function Route() {
    _classCallCheck(this, Route);

    return _possibleConstructorReturn(this, (Route.__proto__ || Object.getPrototypeOf(Route)).apply(this, arguments));
  }

  return Route;
}((0, _RouteMiss3.default)((0, _RouteCache2.default)((0, _RouteRedirect2.default)((0, _RouteFilter2.default)((0, _RouteIndex2.default)(_RouteBase2.default))))));

exports.default = Route;

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Util = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (RouteBase) {
  return function (_RouteBase) {
    _inherits(_class, _RouteBase);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'checkPath',


      /** check 'index' tag */
      value: function checkPath(location) {
        var matchData = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'checkPath', this).call(this, location);
        if (matchData.match) {
          return matchData;
        }
        var _props = this.props,
            pattern = _props.path,
            index = _props.index;

        var _ref = location || {},
            pathname = _ref.pathname;

        if (!index || typeof pathname === 'undefined') {
          return { match: false };
        }

        if (index && (0, _Util.resetPath)(pathname) === (0, _Util.resetPath)(this.getParentPath())) {
          return { match: true };
        }

        return { match: false };
      }
    }]);

    return _class;
  }(RouteBase);
};

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Logger = __webpack_require__(81);

var _Logger2 = _interopRequireDefault(_Logger);

var _CacheOfTagControl = __webpack_require__(629);

var _CacheOfTagControl2 = _interopRequireDefault(_CacheOfTagControl);

var _CacheOfLinkControl = __webpack_require__(161);

var _CacheOfLinkControl2 = _interopRequireDefault(_CacheOfLinkControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (RouteBase) {
  return function (_RouteBase) {
    _inherits(_class, _RouteBase);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'isCached',


      /** check 'cache' tag and link */
      value: function isCached() {
        if (_CacheOfTagControl2.default.isCached(this)) {
          return 1;
        }
        if (_CacheOfLinkControl2.default.isCached(this)) {
          return 2;
        }
        return 0;
      }

      /** check `cache` tag, used after route is mounted succeed */

    }, {
      key: 'checkCacheTag',
      value: function checkCacheTag(remove) {

        var cache = void 0;
        if (remove) {
          cache = null;
        } else {
          cache = typeof this.cacheMark !== 'undefined' ? this.cacheMark : this.props.cache;
          if (!cache) {
            cache = null;
          }
          if (cache === true) {
            cache = 'root';
          }
          if (cache !== 'parent' && cache !== 'root') {
            cache = null;
          }
        }
        _CacheOfTagControl2.default.put(this, cache);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'componentWillReceiveProps', this) && _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
        if (nextProps.cache !== this.props.cache) {
          this.cacheMark = nextProps.cache;
          this.checkCacheTag(false);
          this.routeCheckEntry();
        }
      }

      /** check cache, link cache & tag cache */

    }, {
      key: 'setToUnmount',
      value: function setToUnmount(matchData) {
        var cache = this.isCached();
        if (cache) {
          this.checkPath(this.cacheLocation);
          if (this.state.mountBy !== cache && this.state.status === 1) {
            _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'setToUnmount', this).call(this, matchData);
            this.updateMountStatus({ status: 1, mountBy: cache, matchData: this.state.cacheMatch });
          }
          return;
        }
        _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'setToUnmount', this).call(this, matchData);
      }

      /** check cache tag after update status  */

    }, {
      key: 'updateMountStatus',
      value: function updateMountStatus(_ref) {
        var status = _ref.status,
            mountBy = _ref.mountBy,
            matchData = _ref.matchData;

        _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'updateMountStatus', this).call(this, { status: status, mountBy: mountBy, matchData: matchData });
        this.checkCacheTag(status === 0);
      }

      /** hide or show it's component after it mounted */

    }, {
      key: 'hideOrShow',
      value: function hideOrShow() {
        if (!this.state.status) return;
        var display = this.state.mountBy === 0 ? this.initDisplay || null : 'none';
        var dom = void 0;
        try {
          dom = this.refs.component ? _reactDom2.default.findDOMNode(this.refs.component) : null;
        } catch (error) {
          _Logger2.default.warn('Cannot find dom.');
          return;
        }
        if (!dom) {
          _Logger2.default.warn('Cannot find dom.');
          return;
        }

        // change display
        if (dom) {
          if (typeof this.initDisplay === 'undefined') {
            this.initDisplay = dom ? dom.style.display || null : null;
          }
          dom.style.display = display;
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'componentWillUnmount', this) && _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'componentWillUnmount', this).call(this);
        this.checkCacheTag(true);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.hideOrShow();
        _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'componentDidUpdate', this) && _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'componentDidUpdate', this).call(this);
      }
    }]);

    return _class;
  }(RouteBase);
};

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var cachedRoute = []
/**
 * {
 *   route: { Route Component}      // the component of route
 *   rule: { string }               // the rule : ''
 * }
 */


/** add(or delete when rule is null) cached route to array */
;var put = exports.put = function put(route, rule) {
  var index = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = cachedRoute[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (item.route === route) {
        if (rule) {
          item.rule = rule;
        } else {
          cachedRoute.splice(index, 1);
        }
        return;
      }
      index++;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (rule) cachedRoute.push({ route: route, rule: rule });
};

var _tempRoute = void 0;
var _tempIsEnd = void 0;

/** check if route is cached */
var isCached = exports.isCached = function isCached(route) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = cachedRoute[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var item = _step2.value;

      if (item.route === route) {
        return true;
      }
      _tempRoute = item.route.context.parent;
      _tempIsEnd = item.rule === 'parent';
      while (_tempRoute) {
        if (_tempRoute === route) {
          return true;
        }
        _tempRoute = _tempIsEnd ? null : _tempRoute.context.parent;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return false;
};

exports.default = {
  put: put,
  isCached: isCached
};

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _HistoryControl = __webpack_require__(51);

var _HistoryControl2 = _interopRequireDefault(_HistoryControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (RouteBase) {
  return function (_RouteBase) {
    _inherits(_class, _RouteBase);

    function _class() {
      var _ref;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args)));
    }

    _createClass(_class, [{
      key: 'setToMount',
      value: function setToMount(matchData) {
        var _this2 = this;

        this.checkFilter(this.props.enterFilter, function (passed) {
          if (!passed) {
            return;
          }
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'setToMount', _this2).call(_this2, matchData);
        });
      }

      /** check 'leaveFilter' tag and link */

    }, {
      key: 'setToUnmount',
      value: function setToUnmount(matchData) {
        var _this3 = this;

        this.checkFilter(this.props.leaveFilter, function (passed) {
          if (!passed) {
            return;
          }
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'setToUnmount', _this3).call(_this3, matchData);
        });
      }

      /**
       * check filters
       * @param { Function or Array of function } filters : filters to check in order
       * @param { Function } callback(passed)
       *   @passed { Boolean } : pass result of filters
       */

    }, {
      key: 'checkFilter',
      value: function checkFilter(filters, callback) {
        var _this4 = this;

        if (!filters) {
          callback(true);
          return;
        }
        if (!(filters instanceof Array)) {
          filters = [filters];
        }
        var tempFilters = [];
        for (var i = 0; i < filters.length; i++) {
          if (typeof filters[i] === 'function') {
            tempFilters.push(filters[i]);
          }
        }
        filters = tempFilters;

        if (filters.length === 0) {
          callback(true);
          return;
        }

        var pointer = 0; // record the index of the running filter

        var filterCallback = function filterCallback() {
          if (pointer === filters.length - 1) {
            callback(true);
          } else {
            filters[++pointer](filterCallback, _this4.props);
          }
        };

        filters[0](filterCallback, this.props);
      }
    }]);

    return _class;
  }(RouteBase);
};

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _HistoryControl = __webpack_require__(51);

var _HistoryControl2 = _interopRequireDefault(_HistoryControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (RouteBase) {
  return function (_RouteBase) {
    _inherits(_class, _RouteBase);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'updateMountStatus',


      /** check 'redirect' props */
      value: function updateMountStatus(_ref) {
        var status = _ref.status,
            mountBy = _ref.mountBy,
            matchData = _ref.matchData;
        var redirect = this.props.redirect;

        if (redirect && typeof redirect === 'string') {
          _HistoryControl2.default.replace(redirect);
          return;
        }

        _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'updateMountStatus', this).call(this, { status: status, mountBy: mountBy, matchData: matchData });
      }
    }]);

    return _class;
  }(RouteBase);
};

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Util = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (RouteBase) {
  return function (_RouteBase) {
    _inherits(_class2, _RouteBase);

    function _class2() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, _class2);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.checkMissTag = function () {
        var miss = _this.props.miss;


        if (!miss) {
          return;
        }
        window.clearTimeout(_this.missTimer);
        _this.missTimer = setTimeout(function () {
          _this.checkMissMatch();
        }, 0);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /** check 'miss' tag */


    _createClass(_class2, [{
      key: 'setToMatch',
      value: function setToMatch(matchData) {
        this.addToParent();
        _get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'setToMatch', this).call(this, matchData);
      }
    }, {
      key: 'setToUnmount',
      value: function setToUnmount(matchData) {
        this.removeFromParent();
        _get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'setToUnmount', this).call(this);
        this.checkMissTag();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.clearTimeout(this.missTimer);
        this.removeFromParent();
        _get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'componentWillUnmount', this) && _get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'componentWillUnmount', this).call(this);
      }

      /** add this to parent' cached children list */

    }, {
      key: 'addToParent',
      value: function addToParent() {
        var parent = this.getParentRoute();
        if (!parent) return;
        if (!parent.children) {
          parent.children = [];
        }
        for (var i = 0; i < parent.children.length; i++) {
          if (parent.children[i] === this) {
            return;
          }
        }
        parent.children.push(this);
      }

      /** remove this from parent' cached children list */

    }, {
      key: 'removeFromParent',
      value: function removeFromParent() {
        var parent = this.getParentRoute();
        if (!parent || !parent.children || !parent.children.length) return;
        for (var i = 0; i < parent.children.length; i++) {
          if (parent.children[i] === this) {
            parent.children.splice(i, 1);
            break;
          }
        }
      }

      /**
       * 'miss' property support
       * when no component matched, this one will match if condition
       */

    }, {
      key: 'checkMissMatch',
      value: function checkMissMatch() {
        var parent = this.getParentRoute();
        if (!parent) {
          return;
        }
        if (!parent.children || !parent.children.length) {
          var parentPath = this.getParentPath();

          var _ref2 = this.context.history.getCurrentLocation() || {},
              pathname = _ref2.pathname;

          this.setToMatch({
            match: true,
            matcher: {
              pattern: null,
              match: true,
              params: {},
              matchStr: pathname && (0, _Util.resetPath)(pathname).substring(parentPath.length),
              lastIndex: 0
            }
          });
        }
      }

      /** get parent */

    }, {
      key: 'getParentRoute',
      value: function getParentRoute() {
        return this.context.parent || this.context.router;
      }
    }]);

    return _class2;
  }(RouteBase);
};

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Link2 = __webpack_require__(257);

var _Link3 = _interopRequireDefault(_Link2);

var _CacheOfLinkControl = __webpack_require__(161);

var _CacheOfLinkControl2 = _interopRequireDefault(_CacheOfLinkControl);

var _HistoryControl = __webpack_require__(51);

var _HistoryControl2 = _interopRequireDefault(_HistoryControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CacheLink = function (_Link) {
  _inherits(CacheLink, _Link);

  function CacheLink() {
    _classCallCheck(this, CacheLink);

    return _possibleConstructorReturn(this, (CacheLink.__proto__ || Object.getPrototypeOf(CacheLink)).apply(this, arguments));
  }

  _createClass(CacheLink, [{
    key: 'render',
    value: function render() {
      return _get(CacheLink.prototype.__proto__ || Object.getPrototypeOf(CacheLink.prototype), 'render', this).call(this);
    }
  }]);

  return CacheLink;
}(_Link3.default);

CacheLink.contextTypes = {
  history: _propTypes2.default.object
};
exports.default = CacheLink;


CacheLink.prototype.go = function (to, state) {
  var route = void 0;
  if (this.context.routes && this.context.routes.length) {
    route = this.context.routes[this.context.routes.length - 1];
  }
  _CacheOfLinkControl2.default.add(this.context.routes && this.context.routes.length && this.context.routes[this.context.routes.length - 1], to);
  _HistoryControl2.default.go(to, state);
};

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(99);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(100);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(101);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(102);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(103);

var _inherits3 = _interopRequireDefault(_inherits2);

var _nav = __webpack_require__(658);

var _nav2 = _interopRequireDefault(_nav);

var _routes = __webpack_require__(661);

var _routes2 = _interopRequireDefault(_routes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_React$Component) {
    (0, _inherits3.default)(App, _React$Component);

    function App(props) {
        (0, _classCallCheck3.default)(this, App);

        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.toggle = function () {
            _this.setState({
                collapsed: !_this.state.collapsed
            });
        };

        _this.state = {
            collapsed: false
        };
        return _this;
    }

    (0, _createClass3.default)(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'app app-header-fixed', id: 'app' },
                _react2.default.createElement(
                    'div',
                    { className: 'app-header navbar', style: { textAlign: "center" } },
                    _react2.default.createElement(
                        'div',
                        { className: 'navbar-header bg-info dker', style: { background: "#108ee9" } },
                        _react2.default.createElement(
                            'button',
                            { className: 'pull-right visible-xs dk', 'data-toggle': 'className:show', 'data-target': '.navbar-collapse' },
                            _react2.default.createElement('i', { className: 'glyphicon glyphicon-cog' })
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: 'pull-right visible-xs', 'data-toggle': 'className:off-screen', 'data-target': '.app-aside' },
                            _react2.default.createElement('i', { className: 'glyphicon glyphicon-align-justify' })
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '#/', className: 'navbar-brand text-lt system-name', style: { fontSize: "19px" } },
                            _react2.default.createElement(
                                'span',
                                { className: 'hidden-folded' },
                                'Admin'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'collapse pos-rlt navbar-collapse box-shadow bg-white-only' },
                        _react2.default.createElement(
                            'div',
                            { className: 'nav navbar-nav hidden-xs' },
                            _react2.default.createElement(
                                'a',
                                { href: '', className: 'btn no-shadow navbar-btn', 'data-toggle': 'className:app-aside-folded', 'data-target': '.app' },
                                _react2.default.createElement('i', { className: 'fa fa-dedent fa-fw text' }),
                                _react2.default.createElement('i', { className: 'fa fa-indent fa-fw text-active' })
                            )
                        ),
                        _react2.default.createElement('ul', { className: 'nav navbar-nav hidden-sm' })
                    )
                ),
                _react2.default.createElement(_nav2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'app-content' },
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('a', { href: true, className: 'off-screen-toggle hide', 'data-toggle': 'className:off-screen', 'data-target': '.app-aside' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'app-content-body ainmate-scale-up' },
                        _react2.default.createElement(_routes2.default, null)
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'app-footer wrapper b-t bg-light', style: { "textAlign": "center" } },
                    _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement('strong', null)
                    )
                )
            );
        }
    }]);
    return App;
}(_react2.default.Component); /**
                               * Created by luwenwei on 17/8/29.
                               */


exports.default = App;

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(654);
module.exports = __webpack_require__(24).Object.getPrototypeOf;

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(462);

__webpack_require__(655)('getPrototypeOf', function($getPrototypeOf){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(73)
  , core    = __webpack_require__(24)
  , fails   = __webpack_require__(131);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(657), __esModule: true };

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(16);
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(99);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(100);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(101);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(102);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(103);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactKeeper = __webpack_require__(159);

var _global = __webpack_require__(130);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { BrowserRouter as StaticRouter,Link } from 'react-router-dom';
/**
 * Created by Apple on 17/2/6.
 */
var $localStorage = (0, _global.getLocalStorage)(); //引入classnames依赖库

var currentRoute = $localStorage.route;

var MyMenu = function (_React$Component) {
    (0, _inherits3.default)(MyMenu, _React$Component);

    function MyMenu(props) {
        (0, _classCallCheck3.default)(this, MyMenu);

        var _this = (0, _possibleConstructorReturn3.default)(this, (MyMenu.__proto__ || (0, _getPrototypeOf2.default)(MyMenu)).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(MyMenu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var $href = '#/' + currentRoute + '/';
            var admin_nav_a = $(".admin-nav").find("a[href='" + $href + "']");
            $(admin_nav_a).parent("li").addClass("active");
            $(admin_nav_a).parents("li.main-menu").addClass("active");
        }
    }, {
        key: 'render',
        value: function render() {
            var collapsedClass = (0, _classnames2.default)({
                'nav-text': true,
                'hideNavText': this.props.collapsed
            });

            return _react2.default.createElement(
                'div',
                { className: 'app-aside hidden-xs bg-black', style: { position: "fixed", height: "100%" } },
                _react2.default.createElement(
                    'div',
                    { className: 'aside-wrap' },
                    _react2.default.createElement(
                        'div',
                        { className: 'navi-wrap' },
                        _react2.default.createElement(
                            'nav',
                            { className: 'navi' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'nav admin-nav' },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'main-menu' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: true, className: 'auto' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'pull-right text-muted' },
                                            _react2.default.createElement('i', { className: 'fa fa-fw fa-angle-right text' }),
                                            _react2.default.createElement('i', { className: 'fa fa-fw fa-angle-down text-active' })
                                        ),
                                        _react2.default.createElement('i', { className: 'fa fa-money text-info-dker' }),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'font-bold' },
                                            '\u9875\u9762'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'nav nav-sub dk' },
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                _reactKeeper.Link,
                                                { to: '/page_b/' },
                                                'page_b'
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactKeeper.Link,
                                        { to: '/page_a/' },
                                        'page_a'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactKeeper.Link,
                                        { to: '/page_c/' },
                                        'page_c'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);
    return MyMenu;
}(_react2.default.Component);

exports.default = MyMenu;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(129)))

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(660), __esModule: true };

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(24);
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
};

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(99);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(100);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(101);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(102);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(103);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactKeeper = __webpack_require__(159);

var _bundle = __webpack_require__(662);

var _bundle2 = _interopRequireDefault(_bundle);

var _page_a = __webpack_require__(663);

var _page_a2 = _interopRequireDefault(_page_a);

var _page_c = __webpack_require__(917);

var _page_c2 = _interopRequireDefault(_page_c);

var _global = __webpack_require__(130);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import page_b from 'bundle-loader?lazy&name=[name]!../pages/page_b/page_b.js';
/**
 * Created by Apple on 17/2/6.
 */
//import  { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
var $localStorage = (0, _global.getLocalStorage)();
//var SystemJS = require('systemjs');

var currentRoute = $localStorage.route;
var exactRoute = currentRoute || "page_a";
var Page_a = function Page_a(match) {
    return _react2.default.createElement(
        _bundle2.default,
        { load: _page_a2.default },
        function (Page_a) {
            return _react2.default.createElement(Page_a, { match: match });
        }
    );
};
/*const Page_b = (cb) => {
    SystemJS.import('../pages/page_b/page_b').then((Page_b)=>{
        console.log(Page_b)
        return cb(Page_b)
    })
}*/
var Page_c = function Page_c(match) {
    return _react2.default.createElement(
        _bundle2.default,
        { load: _page_c2.default },
        function (Page_c) {
            return _react2.default.createElement(Page_c, { match: match });
        }
    );
};

var Main = function (_React$Component) {
    (0, _inherits3.default)(Main, _React$Component);

    function Main() {
        (0, _classCallCheck3.default)(this, Main);
        return (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).apply(this, arguments));
    }

    (0, _createClass3.default)(Main, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactKeeper.HashRouter,
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_reactKeeper.Route, { path: '/page_a/',
                        loadComponent: function loadComponent(cb) {
                            __webpack_require__.e/* require.ensure */(0).then((function (require) {
                                cb(__webpack_require__(1061).default);
                            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                        },
                        index: true, cache: true }),
                    _react2.default.createElement(_reactKeeper.Route, { path: '/page_b/',
                        loadComponent: function loadComponent(cb) {
                            __webpack_require__.e/* require.ensure */(8).then((function (require) {
                                cb(__webpack_require__(1059).default);
                            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                        },
                        cache: true }),
                    _react2.default.createElement(_reactKeeper.Route, { path: '/page_c/',
                        loadComponent: function loadComponent(cb) {
                            __webpack_require__.e/* require.ensure */(1).then((function (require) {
                                cb(__webpack_require__(1062).default);
                            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                        },
                        cache: true })
                )
            );
        }
    }]);
    return Main;
}(_react2.default.Component);

exports.default = Main;

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(99);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(100);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(101);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(102);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(103);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bundle = function (_React$Component) {
    (0, _inherits3.default)(Bundle, _React$Component);

    function Bundle() {
        (0, _classCallCheck3.default)(this, Bundle);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Bundle.__proto__ || (0, _getPrototypeOf2.default)(Bundle)).call(this));

        _this.state = {
            // short for "module" but that's a keyword in js, so "mod"
            mod: null
        };
        return _this;
    }

    (0, _createClass3.default)(Bundle, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.load(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.load !== this.props.load) {
                this.load(nextProps);
            }
        }
    }, {
        key: 'load',
        value: function load(props) {
            var _this2 = this;

            this.setState({
                mod: null
            });
            props.load(function (mod) {
                _this2.setState({
                    // handle both es imports and cjs
                    mod: mod.default ? mod.default : mod
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.state.mod) return false;
            return this.props.children(this.state.mod);
        }
    }]);
    return Bundle;
}(_react2.default.Component); /**
                               * Created by luwenwei on 17/8/30.
                               */


exports.default = Bundle;

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(967));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(38)
  , core      = __webpack_require__(24)
  , ctx       = __webpack_require__(74)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(135);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = log;
exports.warn = warn;
exports.error = error;
function log() {
  if (console) {
    var _console;

    (_console = console).log.apply(_console, arguments);
  }
}

function warn() {
  if (console) {
    var _console2;

    (_console2 = console).warn.apply(_console2, arguments);
  }
}

function error() {
  if (console) {
    var _console3;

    (_console3 = console).error.apply(_console3, arguments);
  }
}

exports.default = {
  log: log,
  warn: warn,
  error: error
};

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _invariant = __webpack_require__(14);

var _invariant2 = _interopRequireDefault(_invariant);

var _warning = __webpack_require__(9);

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(52);

var _Actions = __webpack_require__(164);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createQuery = exports.createQuery = function createQuery(props) {
  return _extends(Object.create(null), props);
};

var createLocation = exports.createLocation = function createLocation() {
  var input = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var object = typeof input === 'string' ? (0, _PathUtils.parsePath)(input) : input;

  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(!object.path, 'Location descriptor objects should have a `pathname`, not a `path`.') : void 0;

  var pathname = object.pathname || '/';
  var search = object.search || '';
  var hash = object.hash || '';
  var state = object.state;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
};

var isDate = function isDate(object) {
  return Object.prototype.toString.call(object) === '[object Date]';
};

var statesAreEqual = exports.statesAreEqual = function statesAreEqual(a, b) {
  if (a === b) return true;

  var typeofA = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var typeofB = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (typeofA !== typeofB) return false;

  !(typeofA !== 'function') ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You must not store functions in location state') : (0, _invariant2.default)(false) : void 0;

  // Not the same object, but same type.
  if (typeofA === 'object') {
    !!(isDate(a) && isDate(b)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You must not store Date objects in location state') : (0, _invariant2.default)(false) : void 0;

    if (!Array.isArray(a)) {
      var keysofA = Object.keys(a);
      var keysofB = Object.keys(b);
      return keysofA.length === keysofB.length && keysofA.every(function (key) {
        return statesAreEqual(a[key], b[key]);
      });
    }

    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return statesAreEqual(item, b[index]);
    });
  }

  // All other serializable types (string, number, boolean)
  // should be strict equal.
  return false;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.key === b.key &&
  // a.action === b.action && // Different action !== location change.
  a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && statesAreEqual(a.state, b.state);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(968));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(926);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(72)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./main.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./main.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(71)(undefined);
// imports


// module
exports.push([module.i, "section.content{\n    padding: 15px;\n}\n\n.hideNavText{\n    max-width: 0;\n    opacity: 0;\n}\n\n.filter-form{\n    margin-bottom: 15px;\n    padding: 0 15px;\n}\n\n.filter-form .form-group,.filter-form .input-group{\n    margin:15px 5px 0 0;\n}\n\n.panel-title-text{\n    margin: 10px 0;\n}\n\n.separator{\n    margin: 0 8px;\n    color: rgba(0, 0, 0, 0.3);\n}\n\n.parent-menu-title{\n    color: rgba(0, 0, 0, 0.65);\n}\n\n.children-menu-title{\n    vertical-align: text-top;\n    color: rgba(0, 0, 0, 0.65);\n    font-weight:initial;\n}\n\n@media screen and (max-width: 1920px) {\n    .table-responsive {\n        width: 100%;\n        margin-bottom: 15px;\n        overflow-y: hidden;\n        -ms-overflow-style: -ms-autohiding-scrollbar;\n        border: 1px solid #ddd;\n    }\n    .table-responsive > .table {\n        margin-bottom: 0;\n    }\n    .table-responsive > .table > thead > tr > th,\n    .table-responsive > .table > tbody > tr > th,\n    .table-responsive > .table > tfoot > tr > th,\n    .table-responsive > .table > thead > tr > td,\n    .table-responsive > .table > tbody > tr > td,\n    .table-responsive > .table > tfoot > tr > td {\n        white-space: nowrap;\n    }\n    .table-responsive > .table-bordered {\n        border: 0;\n    }\n    .table-responsive > .table-bordered > thead > tr > th:first-child,\n    .table-responsive > .table-bordered > tbody > tr > th:first-child,\n    .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n    .table-responsive > .table-bordered > thead > tr > td:first-child,\n    .table-responsive > .table-bordered > tbody > tr > td:first-child,\n    .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n        border-left: 0;\n    }\n    .table-responsive > .table-bordered > thead > tr > th:last-child,\n    .table-responsive > .table-bordered > tbody > tr > th:last-child,\n    .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n    .table-responsive > .table-bordered > thead > tr > td:last-child,\n    .table-responsive > .table-bordered > tbody > tr > td:last-child,\n    .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n        border-right: 0;\n    }\n    .table-responsive > .table-bordered > tbody > tr:last-child > th,\n    .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n    .table-responsive > .table-bordered > tbody > tr:last-child > td,\n    .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n        border-bottom: 0;\n    }\n}\n\n.table-bordered>thead>tr>th, .table-bordered>tbody>tr>th, .table-bordered>tfoot>tr>th, .table-bordered>thead>tr>td, .table-bordered>tbody>tr>td, .table-bordered>tfoot>tr>td {\n    border: 1px solid #ddd;\n}\n\n.seperate-line{\n    display: inline-block;\n    width:1px;\n    height:20px;\n    background: #cccccc;\n    margin: 0 6px;\n    vertical-align: middle;\n}\n\n.custom-select{\n    height: 32px;\n    border:1px solid #cfdadd;\n    color: #555;\n    outline: none;\n}\n\n.pagination a{\n    cursor: pointer;\n    padding: 6px 12px;\n    display: inline-block;\n}\n\n.pagination .not_allow{\n    cursor: not-allowed;\n}\n\nul.ui_pagination{\n    vertical-align: middle;\n    display: inline-block;\n    height: 34px;\n}\n\nul.ui_pagination li{\n    display: inline-block;\n    background: #ffffff;\n    text-align: center;\n}\n\n/*ul.ui_pagination li:not(.not_allow):hover{\n    background: #eeeeee;\n}\n\nul.ui_pagination li.not_allow:hover{\n    background: #ffffff;\n}*/\n\nul.ui_pagination li.active{\n    background: #108ee9;\n}\n\nul.ui_pagination li.active a{\n    color: #ffffff;\n    cursor: default;\n}\n\nul.ui_pagination li:first-child{\n    border-right: none;\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px;\n}\n\nul.ui_pagination li:last-child{\n    border-left: none;\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px;\n}\n\n.input-go-page{\n    display: inline-block;\n    height:34px;\n    line-height: 34px;\n    margin-left: 5px;\n}\n\n.input-go-page input,.input-go-page button{\n    display: inline-block;\n    height: 32px;\n    border-radius: 15px;\n}\n\n\n.input-go-page input{\n    width: 55px;\n    text-align: center;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    color: #767676;\n    border:1px solid #CFDADA;\n    border-right: none;\n    outline: none;\n    height: 33px;\n    vertical-align: top;\n}\n\n.input-go-page button{\n    border:none;\n    height:33px;\n    background: #108ee9;\n    outline: none;\n    color:#fff;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    width: 30px;\n    font-size: 14px;\n}\n\n.pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover {\n    z-index: 3;\n    color: #fff;\n    cursor: default;\n    background-color: #108ee9;\n    border-color: #108ee9;\n}/*重写bootstrap的分页部分样式*/\n\n.btn-icon-round {\n    border-radius: 100%;\n    width:25px;\n    height:25px;\n    line-height: 25px;\n    text-align: center;\n}\n\n.btn-icon i{\n    line-height: 25px;\n}\n\n/*fadeLoader*/\n.spinner2 {\n    width: 55px;\n    height: 55px;\n    margin: auto;\n    position: absolute;\n    top: 50%; left: 50%;\n    -webkit-transform: translate(-250%,-100%);\n    -ms-transform: translate(-250%,-100%);\n    transform: translate(-250%,-100%);\n}\n\n\n.container1 > div, .container2 > div, .container3 > div {\n    width: 13px;\n    height: 13px;\n    background-color: #4368ec;\n    border-radius: 100%;\n    position: absolute;\n    -webkit-animation: bouncedelay 1.2s infinite ease-in-out;\n    animation: bouncedelay 1.2s infinite ease-in-out;\n    /* Prevent first frame from flickering when animation starts */\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n.spinner2 .spinner-container {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.container2 {\n    -webkit-transform: rotateZ(45deg);\n    transform: rotateZ(45deg);\n}\n\n.container3 {\n    -webkit-transform: rotateZ(90deg);\n    transform: rotateZ(90deg);\n}\n\n.circle1 { top: 0; left: 0; }\n.circle2 { top: 0; right: 0; }\n.circle3 { right: 0; bottom: 0; }\n.circle4 { left: 0; bottom: 0; }\n\n.container2 .circle1 {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s;\n}\n\n.container3 .circle1 {\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s;\n}\n\n.container1 .circle2 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s;\n}\n\n.container2 .circle2 {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s;\n}\n\n.container3 .circle2 {\n    -webkit-animation-delay: -0.7s;\n    animation-delay: -0.7s;\n}\n\n.container1 .circle3 {\n    -webkit-animation-delay: -0.6s;\n    animation-delay: -0.6s;\n}\n\n.container2 .circle3 {\n    -webkit-animation-delay: -0.5s;\n    animation-delay: -0.5s;\n}\n\n.container3 .circle3 {\n    -webkit-animation-delay: -0.4s;\n    animation-delay: -0.4s;\n}\n\n.container1 .circle4 {\n    -webkit-animation-delay: -0.3s;\n    animation-delay: -0.3s;\n}\n\n.container2 .circle4 {\n    -webkit-animation-delay: -0.2s;\n    animation-delay: -0.2s;\n}\n\n.container3 .circle4 {\n    -webkit-animation-delay: -0.1s;\n    animation-delay: -0.1s;\n}\n\n@-webkit-keyframes bouncedelay {\n    0%, 80%, 100% { -webkit-transform: scale(0.0) }\n    40% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes bouncedelay {\n    0%, 80%, 100% {\n        transform: scale(0.0);\n        -webkit-transform: scale(0.0);\n    } 40% {\n          transform: scale(1.0);\n          -webkit-transform: scale(1.0);\n      }\n}/*fadeLoader*/\n\ninput.warning-border{\n    border:1px solid red\n}\n\nfieldset{\n    padding: .35em .625em .75em;\n    margin: 0 2px;\n    border: 1px solid #ccc;\n}\n\nlegend {\n    padding: .1em;\n    border: 0;\n    width: auto;\n}\n\n.mySelectBox {\n    position: relative;\n}\n\n.switch-td-panel{\n    outline-style: none;\n    width: 150px;\n    border: 1px solid #ccc;\n    padding: 10px;\n    position: absolute;\n    z-index: 9999;\n    display: none;\n    background: #fff;\n    border-radius: 5px;\n    box-shadow: 3px 3px 5px #888;\n    max-height: 370px;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.switch-td-panel ul{\n    list-style: none;\n}\n\n.switch-td-panel ul li{\n\n}\n\n.switch-td-panel .myCheckBox{\n    display: inline-block;\n    width:18px;\n    height: 18px;\n    border-radius: 2px;\n    color: #fff;\n    text-align: center;\n    line-height: 18px;\n    background: #ffffff;\n    border: 1px solid #dddddd;\n    margin-right: 10px;\n    cursor: pointer;\n}\n\n.switch-td-panel .selectSpan{\n    background: rgb(16, 142, 233);\n}\n\n.drag-table-th{\n    cursor: move;\n}\n\n[draggable] {\n    -moz-user-select: none;\n    -khtml-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    /* Required to make elements draggable in old WebKit */\n    -khtml-user-drag: element;\n    -webkit-user-drag: element;\n}\n\n.dragOver{\n    background: #108ee9;\n    color:#fff;\n}\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(928);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(72)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./someReset.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./someReset.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(71)(undefined);
// imports


// module
exports.push([module.i, ".ant-input{\n    height: 34px;\n}\n\n.ant-calendar-picker .ant-input{\n    height: 34px;\n}\n\n.ant-select-allow-clear .ant-select-selection--multiple .ant-select-selection__rendered{\n    height: 32px;\n}\n\n.ant-select .ant-select-selection--single{\n    height: 32px;\n}\n\n.ant-select .ant-select-selection__rendered{\n    line-height: 30px;\n}", ""]);

// exports


/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

/**
 * Created by luwenwe on 2017/9/21.
 */
+function ($) {
    $(function () {
        $(document).on('click', '[data-toggle^="class"]', function (e) {
            e && e.preventDefault();
            var $this = $(e.target),
                $class,
                $target,
                $tmp,
                $classes,
                $targets;
            !$this.data('toggle') && ($this = $this.closest('[data-toggle^="class"]'));
            $class = $this.data()['toggle'];
            $target = $this.data('target') || $this.attr('href');
            $class && ($tmp = $class.split(':')[1]) && ($classes = $tmp.split(','));
            $target && ($targets = $target.split(','));
            $classes && $classes.length && $.each($targets, function (index, value) {
                if ($classes[index].indexOf('*') !== -1) {
                    var patt = new RegExp('\\s' + $classes[index].replace(/\*/g, '[A-Za-z0-9-_]+').split(' ').join('\\s|\\s') + '\\s', 'g');
                    $($this).each(function (i, it) {
                        var cn = ' ' + it.className + ' ';
                        while (patt.test(cn)) {
                            cn = cn.replace(patt, ' ');
                        }
                        it.className = $.trim(cn);
                    });
                }
                $targets[index] != '#' && $($targets[index]).toggleClass($classes[index]) || $this.toggleClass($classes[index]);
            });
            $this.toggleClass('active');
        });

        $(document).on('click', 'nav a', function (e) {
            var $this = $(e.target),
                $active;
            $this.is('a') || ($this = $this.closest('a'));
            $active = $this.parent().siblings(".active");
            $active && $active.toggleClass('active').find('> ul:visible').slideUp(200);
            $this.parent().hasClass('active') && $this.next().slideUp(200) || $this.next().slideDown(200);
            $this.parent().toggleClass('active');
            $this.next().is('ul') && e.preventDefault();
            setTimeout(function () {
                $(document).trigger('updateNav');
            }, 300);
        });
    });
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(129)))

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(653), __esModule: true };

/***/ })

},[488]);