webpackJsonp([1],{

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _css = __webpack_require__(734);

var _breadcrumb = __webpack_require__(737);

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _getPrototypeOf = __webpack_require__(74);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(75);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(76);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(77);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(78);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Apple on 17/2/6.
 */
var React = __webpack_require__(3);

//import DateRange from '../../components/dateRange';
//import SelectComponent from '../../components/select';
//import axios from 'axios';
var Page_b = function (_React$Component) {
    (0, _inherits3.default)(Page_b, _React$Component);

    function Page_b() {
        (0, _classCallCheck3.default)(this, Page_b);
        return (0, _possibleConstructorReturn3.default)(this, (Page_b.__proto__ || (0, _getPrototypeOf2.default)(Page_b)).apply(this, arguments));
    }

    (0, _createClass3.default)(Page_b, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    _breadcrumb2.default,
                    { style: { margin: '12px 0' } },
                    React.createElement(
                        _breadcrumb2.default.Item,
                        null,
                        'Home'
                    ),
                    React.createElement(
                        _breadcrumb2.default.Item,
                        null,
                        'page_b'
                    )
                ),
                React.createElement(
                    'div',
                    { style: { padding: '0 15px 15px 15px', background: '#fff' } },
                    React.createElement(
                        'span',
                        { className: 'test' },
                        'this is page_b'
                    )
                )
            );
        }
    }]);
    return Page_b;
}(React.Component);

exports.default = Page_b;
;

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(36);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(67);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(70);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(68);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(69);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var BreadcrumbItem = function (_React$Component) {
    (0, _inherits3['default'])(BreadcrumbItem, _React$Component);

    function BreadcrumbItem() {
        (0, _classCallCheck3['default'])(this, BreadcrumbItem);
        return (0, _possibleConstructorReturn3['default'])(this, (BreadcrumbItem.__proto__ || Object.getPrototypeOf(BreadcrumbItem)).apply(this, arguments));
    }

    (0, _createClass3['default'])(BreadcrumbItem, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                separator = _a.separator,
                children = _a.children,
                restProps = __rest(_a, ["prefixCls", "separator", "children"]);
            var link = void 0;
            if ('href' in this.props) {
                link = _react2['default'].createElement(
                    'a',
                    (0, _extends3['default'])({ className: prefixCls + '-link' }, restProps),
                    children
                );
            } else {
                link = _react2['default'].createElement(
                    'span',
                    (0, _extends3['default'])({ className: prefixCls + '-link' }, restProps),
                    children
                );
            }
            if (children) {
                return _react2['default'].createElement(
                    'span',
                    null,
                    link,
                    _react2['default'].createElement(
                        'span',
                        { className: prefixCls + '-separator' },
                        separator
                    )
                );
            }
            return null;
        }
    }]);
    return BreadcrumbItem;
}(_react2['default'].Component);

exports['default'] = BreadcrumbItem;

BreadcrumbItem.__ANT_BREADCRUMB_ITEM = true;
BreadcrumbItem.defaultProps = {
    prefixCls: 'ant-breadcrumb',
    separator: '/'
};
BreadcrumbItem.propTypes = {
    prefixCls: _propTypes2['default'].string,
    separator: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].element]),
    href: _propTypes2['default'].string
};
module.exports = exports['default'];

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(71);

__webpack_require__(735);

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(736);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(50)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../../../css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(undefined);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable declaration-bang-space-before */\n/* stylelint-disable declaration-bang-space-before */\n.ant-breadcrumb {\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 12px;\n}\n.ant-breadcrumb a {\n  color: rgba(0, 0, 0, 0.65);\n  transition: color .3s;\n}\n.ant-breadcrumb a:hover {\n  color: #49a9ee;\n}\n.ant-breadcrumb > span:last-child {\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-breadcrumb > span:last-child .ant-breadcrumb-separator {\n  display: none;\n}\n.ant-breadcrumb-separator {\n  margin: 0 8px;\n  color: rgba(0, 0, 0, 0.3);\n}\n.ant-breadcrumb-link > .anticon + span {\n  margin-left: 4px;\n}\n", ""]);

// exports


/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Breadcrumb = __webpack_require__(738);

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

var _BreadcrumbItem = __webpack_require__(713);

var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_Breadcrumb2['default'].Item = _BreadcrumbItem2['default'];
exports['default'] = _Breadcrumb2['default'];
module.exports = exports['default'];

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(67);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(70);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(68);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(69);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(363);

var _warning2 = _interopRequireDefault(_warning);

var _BreadcrumbItem = __webpack_require__(713);

var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);

var _classnames = __webpack_require__(18);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getBreadcrumbName(route, params) {
    if (!route.breadcrumbName) {
        return null;
    }
    var paramsKeys = Object.keys(params).join('|');
    var name = route.breadcrumbName.replace(new RegExp(':(' + paramsKeys + ')', 'g'), function (replacement, key) {
        return params[key] || replacement;
    });
    return name;
}
function defaultItemRender(route, params, routes, paths) {
    var isLastItem = routes.indexOf(route) === routes.length - 1;
    var name = getBreadcrumbName(route, params);
    return isLastItem ? _react2['default'].createElement(
        'span',
        null,
        name
    ) : _react2['default'].createElement(
        'a',
        { href: '#/' + paths.join('/') },
        name
    );
}

var Breadcrumb = function (_React$Component) {
    (0, _inherits3['default'])(Breadcrumb, _React$Component);

    function Breadcrumb() {
        (0, _classCallCheck3['default'])(this, Breadcrumb);
        return (0, _possibleConstructorReturn3['default'])(this, (Breadcrumb.__proto__ || Object.getPrototypeOf(Breadcrumb)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Breadcrumb, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
            (0, _warning2['default'])(!('linkRender' in props || 'nameRender' in props), '`linkRender` and `nameRender` are removed, please use `itemRender` instead, ' + 'see: https://u.ant.design/item-render.');
        }
    }, {
        key: 'render',
        value: function render() {
            var crumbs = void 0;
            var _props = this.props,
                separator = _props.separator,
                prefixCls = _props.prefixCls,
                style = _props.style,
                className = _props.className,
                routes = _props.routes,
                _props$params = _props.params,
                params = _props$params === undefined ? {} : _props$params,
                children = _props.children,
                _props$itemRender = _props.itemRender,
                itemRender = _props$itemRender === undefined ? defaultItemRender : _props$itemRender;

            if (routes && routes.length > 0) {
                var paths = [];
                crumbs = routes.map(function (route) {
                    route.path = route.path || '';
                    var path = route.path.replace(/^\//, '');
                    Object.keys(params).forEach(function (key) {
                        path = path.replace(':' + key, params[key]);
                    });
                    if (path) {
                        paths.push(path);
                    }
                    return _react2['default'].createElement(
                        _BreadcrumbItem2['default'],
                        { separator: separator, key: route.breadcrumbName || path },
                        itemRender(route, params, routes, paths)
                    );
                });
            } else if (children) {
                crumbs = _react2['default'].Children.map(children, function (element, index) {
                    if (!element) {
                        return element;
                    }
                    (0, _warning2['default'])(element.type && element.type.__ANT_BREADCRUMB_ITEM, 'Breadcrumb only accepts Breadcrumb.Item as it\'s children');
                    return (0, _react.cloneElement)(element, {
                        separator: separator,
                        key: index
                    });
                });
            }
            return _react2['default'].createElement(
                'div',
                { className: (0, _classnames2['default'])(className, prefixCls), style: style },
                crumbs
            );
        }
    }]);
    return Breadcrumb;
}(_react2['default'].Component);

exports['default'] = Breadcrumb;

Breadcrumb.defaultProps = {
    prefixCls: 'ant-breadcrumb',
    separator: '/'
};
Breadcrumb.propTypes = {
    prefixCls: _propTypes2['default'].string,
    separator: _propTypes2['default'].node,
    routes: _propTypes2['default'].array,
    params: _propTypes2['default'].object,
    linkRender: _propTypes2['default'].func,
    nameRender: _propTypes2['default'].func
};
module.exports = exports['default'];

/***/ })

});