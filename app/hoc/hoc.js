/**
 * Created by luwenwe on 2017/9/18.
 */
import React from "react";

function ppHOC(WrappedComponent) {
    return class NewComponent extends React.Component {
        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
}

function iiHOC(WrappedComponent) {
    return class NewComponent extends WrappedComponent {
        constructor() {
            super();
        }
        
        render() {
            return super.render();
        }
    }
}
/*
    (1）子类的__proto__属性，表示构造函数的继承，总是指向父类。
    （2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
    (3)子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。也就是说，子类的原型的原型，是父类的原型*/
export { ppHOC, iiHOC};