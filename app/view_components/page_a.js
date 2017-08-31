/**
 * Created by Apple on 17/2/6.
 */
const React = require("react");
import { Button } from 'antd';
export default class Page_a extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return <div>
                    <h1>this is page_a</h1>
                    <Button type="primary">Primary</Button>
                </div>
    }

    componentWillMount() {
        //alert("componentWillMount");
    }

    componentDidMount(){
        console.log($("body"));
    }
};