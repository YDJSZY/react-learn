/**
 * Created by luwenwe on 2017/10/11.
 */
import React from "react";

export default class FakeLoader extends React.Component {
    static defaultProps = {

    }

    constructor(props) {
        super()
    }
    
    render() {
        return <div className="fakeloader6" style={{position:'fixed',display: 'none', width:'100%', height:'100%',backgroundColor:'#dee1e2',zIndex: 9999,opacity: 0.7}}>
            <div className="fl spinner2">
                <div className="spinner-container container1">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                    <div className="circle4"></div>
                </div>
                <div className="spinner-container container2">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                    <div className="circle4"></div>
                </div>
                <div className="spinner-container container3">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                    <div className="circle4"></div>
                </div>
            </div>
            </div>
    }
}