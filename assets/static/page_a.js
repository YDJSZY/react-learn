webpackJsonp([1],{

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _css = __webpack_require__(317);

var _button = __webpack_require__(318);

var _button2 = _interopRequireDefault(_button);

var _getPrototypeOf = __webpack_require__(84);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(85);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(86);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(87);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(88);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Apple on 17/2/6.
 */
var React = __webpack_require__(10);

var Page_a = function (_React$Component) {
    (0, _inherits3.default)(Page_a, _React$Component);

    function Page_a(props) {
        (0, _classCallCheck3.default)(this, Page_a);
        return (0, _possibleConstructorReturn3.default)(this, (Page_a.__proto__ || (0, _getPrototypeOf2.default)(Page_a)).call(this, props));
    }

    (0, _createClass3.default)(Page_a, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "this is page_a"
                ),
                React.createElement(
                    _button2.default,
                    { type: "primary" },
                    "Primary"
                )
            );
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            //alert("componentWillMount");
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log($("body"));
        }
    }]);
    return Page_a;
}(React.Component);

exports.default = Page_a;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(106)))

/***/ })

});