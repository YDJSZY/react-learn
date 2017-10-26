webpackJsonp([1],{

/***/ 1038:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(1039);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(970);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ 1039:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1040), __esModule: true };

/***/ }),

/***/ 1040:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(460);
__webpack_require__(459);
module.exports = __webpack_require__(1041);

/***/ }),

/***/ 1041:
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(205)
  , ITERATOR  = __webpack_require__(21)('iterator')
  , Iterators = __webpack_require__(75);
module.exports = __webpack_require__(24).isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};

/***/ }),

/***/ 1042:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1043), __esModule: true };

/***/ }),

/***/ 1043:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(459);
__webpack_require__(1044);
module.exports = __webpack_require__(24).Array.from;

/***/ }),

/***/ 1044:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx         = __webpack_require__(74)
  , $export     = __webpack_require__(73)
  , toObject    = __webpack_require__(462)
  , call        = __webpack_require__(472)
  , isArrayIter = __webpack_require__(473)
  , toLength    = __webpack_require__(474)
  , getIterFn   = __webpack_require__(461);
$export($export.S + $export.F * !__webpack_require__(475)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , $$      = arguments
      , $$len   = $$.length
      , mapfn   = $$len > 1 ? $$[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        result[index] = mapping ? mapfn(O[index], index) : O[index];
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ 1062:
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

var _extends2 = __webpack_require__(980);

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = __webpack_require__(1038);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _from = __webpack_require__(1042);

var _from2 = _interopRequireDefault(_from);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _tableTh = __webpack_require__(979);

var _tableTh2 = _interopRequireDefault(_tableTh);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
var getItems = function getItems(count) {
    return (0, _from2.default)({ length: count }, function (v, k) {
        return k;
    }).map(function (k) {
        return {
            id: 'item-' + k,
            content: 'item ' + k
        };
    });
};

// a little function to help us with reordering the result
/**
 * Created by luwenwei on 17/10/21.
 */
var reorder = function reorder(list, startIndex, endIndex) {
    var result = (0, _from2.default)(list);

    var _result$splice = result.splice(startIndex, 1),
        _result$splice2 = (0, _slicedToArray3.default)(_result$splice, 1),
        removed = _result$splice2[0];

    result.splice(endIndex, 0, removed);

    return result;
};

// using some little inline style helpers to make the app look okay
var grid = 8;
var getItemStyle = function getItemStyle(draggableStyle, isDragging) {
    return (0, _extends3.default)({
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        padding: grid * 2,
        marginBottom: grid,

        // change background colour if dragging
        background: isDragging ? 'lightgreen' : 'grey'

    }, draggableStyle);
};
var getListStyle = function getListStyle(isDraggingOver) {
    return {
        background: isDraggingOver ? 'lightblue' : 'lightgrey',
        padding: grid,
        width: 250
    };
};

var Page_c = function (_Component) {
    (0, _inherits3.default)(Page_c, _Component);

    function Page_c(props) {
        (0, _classCallCheck3.default)(this, Page_c);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Page_c.__proto__ || (0, _getPrototypeOf2.default)(Page_c)).call(this, props));

        _this.state = {
            items: [{ id: 1, content: "aaa" }, { id: 2, content: "bbb" }, { id: 3, content: "ccc" }],
            testTitles: ["id", "内容"]
        };
        _this.onDragEnd = _this.onDragEnd.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Page_c, [{
        key: 'onDragEnd',
        value: function onDragEnd(result) {
            // dropped outside the list
            if (!result.destination) {
                return;
            } /*result.destination:拖拽目的地*/
            console.log(result);

            var items = reorder(this.state.items, result.source.index, /*拖拽源*/
            result.destination.index);

            this.setState({
                items: items
            });
        }

        // Normally you would want to split things out into separate components.
        // But in this example everything is just done in one place for simplicity

    }, {
        key: 'render',
        value: function render() {
            var items = this.state.items;
            var testTitles = this.state.testTitles;
            return _react2.default.createElement(
                'div',
                { className: 'table-responsive', key: 'table' },
                _react2.default.createElement(
                    'table',
                    { className: 'table table-hover table-striped table-bordered' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            testTitles.map(function (item, index) {
                                return _react2.default.createElement(_tableTh2.default, { key: "_" + index, data: item });
                            })
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        items.map(function (item, index) {
                            return _react2.default.createElement(
                                'tr',
                                { key: "_" + index },
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    item.id
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    item.content
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);
    return Page_c;
}(_react.Component);

exports.default = Page_c;

/***/ }),

/***/ 968:
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

var _extends2 = __webpack_require__(980);

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = __webpack_require__(1038);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _from = __webpack_require__(1042);

var _from2 = _interopRequireDefault(_from);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _tableTh = __webpack_require__(979);

var _tableTh2 = _interopRequireDefault(_tableTh);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
var getItems = function getItems(count) {
    return (0, _from2.default)({ length: count }, function (v, k) {
        return k;
    }).map(function (k) {
        return {
            id: 'item-' + k,
            content: 'item ' + k
        };
    });
};

// a little function to help us with reordering the result
/**
 * Created by luwenwei on 17/10/21.
 */
var reorder = function reorder(list, startIndex, endIndex) {
    var result = (0, _from2.default)(list);

    var _result$splice = result.splice(startIndex, 1),
        _result$splice2 = (0, _slicedToArray3.default)(_result$splice, 1),
        removed = _result$splice2[0];

    result.splice(endIndex, 0, removed);

    return result;
};

// using some little inline style helpers to make the app look okay
var grid = 8;
var getItemStyle = function getItemStyle(draggableStyle, isDragging) {
    return (0, _extends3.default)({
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        padding: grid * 2,
        marginBottom: grid,

        // change background colour if dragging
        background: isDragging ? 'lightgreen' : 'grey'

    }, draggableStyle);
};
var getListStyle = function getListStyle(isDraggingOver) {
    return {
        background: isDraggingOver ? 'lightblue' : 'lightgrey',
        padding: grid,
        width: 250
    };
};

var Page_c = function (_Component) {
    (0, _inherits3.default)(Page_c, _Component);

    function Page_c(props) {
        (0, _classCallCheck3.default)(this, Page_c);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Page_c.__proto__ || (0, _getPrototypeOf2.default)(Page_c)).call(this, props));

        _this.state = {
            items: [{ id: 1, content: "aaa" }, { id: 2, content: "bbb" }, { id: 3, content: "ccc" }],
            testTitles: ["id", "内容"]
        };
        _this.onDragEnd = _this.onDragEnd.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Page_c, [{
        key: 'onDragEnd',
        value: function onDragEnd(result) {
            // dropped outside the list
            if (!result.destination) {
                return;
            } /*result.destination:拖拽目的地*/
            console.log(result);

            var items = reorder(this.state.items, result.source.index, /*拖拽源*/
            result.destination.index);

            this.setState({
                items: items
            });
        }

        // Normally you would want to split things out into separate components.
        // But in this example everything is just done in one place for simplicity

    }, {
        key: 'render',
        value: function render() {
            var items = this.state.items;
            var testTitles = this.state.testTitles;
            return _react2.default.createElement(
                'div',
                { className: 'table-responsive', key: 'table' },
                _react2.default.createElement(
                    'table',
                    { className: 'table table-hover table-striped table-bordered' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            testTitles.map(function (item, index) {
                                return _react2.default.createElement(_tableTh2.default, { key: "_" + index, data: item });
                            })
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        items.map(function (item, index) {
                            return _react2.default.createElement(
                                'tr',
                                { key: "_" + index },
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    item.id
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    item.content
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);
    return Page_c;
}(_react.Component);

exports.default = Page_c;

/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(974), __esModule: true };

/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(976), __esModule: true };

/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(460);
__webpack_require__(459);
module.exports = __webpack_require__(975);

/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(57)
  , get      = __webpack_require__(461);
module.exports = __webpack_require__(24).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(977);
module.exports = __webpack_require__(24).Object.assign;

/***/ }),

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(73);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(978)});

/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.1 Object.assign(target, source, ...)
var $        = __webpack_require__(16)
  , toObject = __webpack_require__(462)
  , IObject  = __webpack_require__(465);

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = __webpack_require__(131)(function(){
  var a = Object.assign
    , A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , $$    = arguments
    , $$len = $$.length
    , index = 1
    , getKeys    = $.getKeys
    , getSymbols = $.getSymbols
    , isEnum     = $.isEnum;
  while($$len > index){
    var S      = IObject($$[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  }
  return T;
} : Object.assign;

/***/ }),

/***/ 979:
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

var classNames = {
    "dragStart": { background: "#108ee9", color: "#fff", opacity: 0.5 }
}; /**
    * Created by luwenwei on 17/10/21.
    */

var TableThComponent = function (_React$Component) {
    (0, _inherits3.default)(TableThComponent, _React$Component);

    function TableThComponent(props) {
        (0, _classCallCheck3.default)(this, TableThComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TableThComponent.__proto__ || (0, _getPrototypeOf2.default)(TableThComponent)).call(this, props));

        _this.dragStart = function (e) {
            window.$dragRecord = {};
            _this.setState({ dragStatus: "start" });
            window.$dragRecord.$dragStartIndex = parseInt(e.target.getAttribute("data-index"));
            window.$dragRecord.$dragStartElement = e.target;
            e.dataTransfer.setData("Index", window.$dragRecord.$dragStartIndex);
        };

        _this.dragOver = function (e) {
            e.preventDefault();
            if (_this.dragStatus === "enter") {
                return;
            };
            window.$dragRecord.$dragLastStartIndex = null;
            return false;
        };

        _this.dragEnter = function (e) {
            _this.dragStatus = "";
            var $dragStartIndex = window.$dragRecord.$dragStartIndex;
            var targetElement = e.target;
            var titleModel = _this.props.titleModel;
            var targetIndex = parseInt(e.target.getAttribute("data-index")); /*目标节点的index*/
            if (window.$dragRecord.$dragStartIndex === targetIndex) return;
            if (window.$dragRecord.$dragLastStartIndex === targetIndex) return;
            if (isNaN(targetIndex)) return; /*防止当鼠标落在你不希望移动的节点上*/
            _this.removeClassDragOver(window.$dragRecord.$dragTargetElement);
            window.$dragRecord.$dragTargetIndex = targetIndex;
            window.$dragRecord.$dragLastStartIndex = window.$dragRecord.$dragStartIndex;
            window.$dragRecord.$dragStartIndex = window.$dragRecord.$dragTargetIndex;
            window.$dragRecord.$dragTargetElement = targetElement;
            window.$dragRecord.targetElementClass = targetElement.getAttribute("class");
            _this.addClassDragOver(targetElement);
            var startSource = titleModel[$dragStartIndex];
            titleModel[$dragStartIndex] = titleModel[targetIndex];
            titleModel[targetIndex] = startSource;
            _this.dragStatus = "enter";
            _this.setState({ dragStatus: "enter" });
            _this.props.titleModelChange(titleModel);
            return true;
        };

        _this.dragDrop = function (e) {
            e.preventDefault();
            var data = e.dataTransfer.getData("Index");
            if (window.$dragRecord.$dragTargetElement) {
                _this.removeClassDragOver(window.$dragRecord.$dragTargetElement);
                _this.removeClassDragOver(window.$dragRecord.$dragStartElement);
            }
        };

        _this.dragEnd = function (e) {
            _this.setState({ dragStatus: "end" });
            _this.removeClassDragOver(window.$dragRecord.$dragTargetElement);
            _this.removeClassDragOver(window.$dragRecord.$dragStartElement);
        };

        _this.state = {
            dragStatus: null
        };
        _this.dragOverClass = _this.props.dragOverClass || "dragOver";
        _this.styles = {
            start: { background: "#108ee9", color: "#fff", opacity: 0.5 },
            end: null
        };

        return _this;
    } /*拖拽元素在目标元素头上移动的时候*/

    /*拖拽元素进入目标元素头上，同时鼠标松开的时候*/

    (0, _createClass3.default)(TableThComponent, [{
        key: "addClassDragOver",
        value: function addClassDragOver(element) {
            var classNames = element.getAttribute("class");
            var newClassName = classNames + " dragOver";
            element.setAttribute("class", newClassName);
        }
    }, {
        key: "removeClassDragOver",
        value: function removeClassDragOver(element) {
            if (!element) return;
            var classNames = element.getAttribute("class");
            var newClassName = classNames.split(" ");
            var index = newClassName.indexOf("dragOver");
            if (index === -1) return;
            newClassName.splice(index, 1).join();
            element.setAttribute("class", newClassName);
        }
    }, {
        key: "render",
        value: function render() {
            var title = this.props.title;
            var index = this.props.dataIndex;
            return _react2.default.createElement(
                "th",
                { draggable: "true",
                    "data-key": title,
                    "data-index": index,
                    onDragStart: this.dragStart,
                    onDragOver: this.dragOver,
                    onDragEnter: this.dragEnter,
                    onDrop: this.dragDrop,
                    onDragEnd: this.dragEnd,
                    className: "drag-table-th",
                    style: this.styles[this.state.dragStatus]
                },
                _react2.default.createElement(
                    "span",
                    { style: { cursor: "pointer" } },
                    title
                ),
                this.props.children
            );
        }
    }]);
    return TableThComponent;
}(_react2.default.Component);

TableThComponent.defaultProps = {};
exports.default = TableThComponent;

/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$assign = __webpack_require__(971)["default"];

exports["default"] = _Object$assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.__esModule = true;

/***/ })

});