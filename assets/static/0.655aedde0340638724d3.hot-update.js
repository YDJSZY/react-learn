webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	/**
	 * Created by luwenwei on 17/2/5.
	 */
	const React = __webpack_require__(98);
	const ReactDom = __webpack_require__(99);
	var arr = [React.createElement("h1", null, "Hello world!"), React.createElement("h2", null, "React is awesome")];
	ReactDom.render(React.createElement("h1", null, "Hello, world!"), document.getElementById('main'));

	ReactDom.render(React.createElement("div", null, arr), document.getElementById('main1'));

	var HelloMessage = React.createClass({
	    displayName: "HelloMessage",

	    render: function () {
	        return React.createElement("h1", null, "Hello ", this.props.name);
	    }
	});

	ReactDom.render(React.createElement(HelloMessage, { name: "John" }), document.getElementById('main2'));

	var NotesList = React.createClass({
	    displayName: "NotesList",

	    render: function () {
	        return React.createElement("ol", null, React.Children.map(this.props.children, function (child) {
	            return React.createElement("li", null, child);
	        }));
	    }
	});

	ReactDom.render(React.createElement(NotesList, null, React.createElement("span", null, "hello"), React.createElement("span", null, "world")), document.getElementById("main3"));

	var MyTitle = React.createClass({
	    displayName: "MyTitle",

	    propTypes: {
	        title: React.PropTypes.string.isRequired
	    }, /*定义属性类型*/

	    getDefaultProps: function () {
	        return {
	            fuck: 'Hello World'
	        };
	    }, /*定义属性默认值*/

	    render: function () {
	        return React.createElement("h1", null, " ", this.props.title, ",", this.props.fuck, " ");
	    }
	});

	ReactDom.render(React.createElement(MyTitle, { title: 2 }), document.getElementById("main4"));

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(189); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }
])