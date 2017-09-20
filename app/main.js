/**
 * Created by luwenwei on 17/2/5.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';
import axios from 'axios';
import App from './pages/app';
import {myInfo,constants,setMyInfo,setConstants} from './untils/global'
require("./styles/main.css");

async function getMyInfo() {
    var response = await axios.get('../package.json');
    setMyInfo(response.data);
}
getMyInfo();
ReactDom.render((
    <HashRouter>
        <App />
    </HashRouter>
), document.getElementById('root'));

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
