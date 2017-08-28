/**
 * Created by luwenwei on 17/2/5.
 */
const React = require("react");
const ReactDom = require("react-dom");
import "whatwg-fetch";
/*require("./route/nav");
require("./route/routes");*/
require("babel-polyfill");
import { BrowserRouter,Switch, Route, Link,Router,HashRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();
const Page_a = require("./view_components/page_a");
const Page_b = require("./view_components/page_b");

const Header = () => (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="/page_a">
                        <i className="fa fa-user"></i>
                        page_a
                    </Link>
                </li>
                <li>
                    <Link to="/page_b">
                        <i className="fa fa-table"></i>
                        page_b
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
)
const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Page_a}></Route>
            <Route path="/page_a" component={Page_a}></Route>
            <Route path="/page_b" component={Page_b}></Route>
        </Switch>
    </main>
)
const App = () => (
    <div>
        <Header />
        <Main />
    </div>
)
ReactDom.render((
    <HashRouter>
        <App />
    </HashRouter>
), document.getElementById('root'));

async function getMyInfo() {
    var response = await fetch('./package.json');
    var data = await response.json();
    console.log(data)
    var d = await fetch('../data.json');
    var da = await d.json();
    console.log(da)

        /*.then(function(response) {
            console.log(response.json())
            return response.json()
        }).then(function(json) {
        console.log('parsed json', json)
    }).catch(function(ex) {
        console.log('parsing failed', ex)
    })*/
}
//getMyInfo();

/*var arr = [
    <h1>Hello world!</h1>,
    <h2>React is awesome</h2>,
];
ReactDom.render(
    <h1>Hello, world!</h1>,
    document.getElementById('main')
);

ReactDom.render(
    <div>{arr}</div>,
    document.getElementById('main1')
);

var HelloMessage = React.createClass({
    render: function() {
        return <h1>Hello {this.props.name}</h1>;
    }
});

ReactDom.render(
    <HelloMessage name="John" />,
    document.getElementById('main2')
);

var Demoa = React.createClass({
    render: function () {
        return <a>{this.props.title}</a>
    }
})
var NotesList = React.createClass({
    render: function() {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function (child) {
                        return <li>{child}<Demoa title="fuck"></Demoa></li>;
                    })
                }
            </ol>
        );
    }
});

ReactDom.render(
    <NotesList>
        <span>hello</span>
        <span>world</span>
    </NotesList>,
    document.getElementById("main3")
);

var MyTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },/!*定义属性类型*!/

    getDefaultProps : function () {
        return {
            fuck : 'Hello World'
        };
    },/!*定义属性默认值*!/

    render: function() {
        return <h1> {this.props.title},{this.props.fuck} </h1>;
    }
});

ReactDom.render(
    <MyTitle title={"fuck"}>
    </MyTitle>,
    document.getElementById("main4")
);

var MyComponent = React.createClass({
    handleClick: function() {
        console.log(this.refs.myTextInput)
        this.refs.myTextInput.focus();
    },
    render: function() {
        return (
            <div>
                <input type="text" ref="myTextInput" />
                <input type="button" value="Focus the text input" onClick={this.handleClick} />
            </div>
        );
    }
});

ReactDom.render(
    <MyComponent />,
    document.getElementById('main5')
);

var LikeButton = React.createClass({
    getInitialState: function() {
        return {liked: false};
    },/!*定义初始状态*!/
    handleClick: function(event) {
        this.setState({liked: !this.state.liked});
    },
    render: function() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <p onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </p>
        );
    }
});

ReactDom.render(
    <LikeButton />,
    document.getElementById('main6')
);

var Input = React.createClass({
    getInitialState: function() {
        return {value: 'Hello!'};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    render: function () {
        var value = this.state.value;
        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange} />
                <p>{value}</p>
            </div>
        );
    }
});

ReactDom.render(<Input/>, document.getElementById('main7'));*/
