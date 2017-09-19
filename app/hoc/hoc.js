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

        selectCallBack = (model,value)=> {
            this.dataTableConfig.loadDataParams[model] = value;
            this.search();
        }

        dateRangeChange = (dateRange,noReq)=> {
            this.dataTableConfig.loadDataParams.begin_time = +new Date(dateRange.begin_time);
            this.dataTableConfig.loadDataParams.end_time = +new Date(dateRange.end_time);
            if(dateRange.dateRangeName == "自定义") return;
            if(noReq) return;
            this.search();
        }/*日期查询范围改变*/

        search = ()=> {
            if(!this.$dataTable){
                console.debug("$dataTable is not exist");
                return;
            }
            this.$dataTable.loadFirstPage();
        }

        searchChange = (e)=> {
            this.dataTableConfig.loadDataParams.search = e.target.value;
        }

        inputEnter = (e)=> {
            if(e.keyCode === 13) {
                this.search();
            }
        }/*enter搜索*/

        create = ()=> {
            this.$editModalForm.create({enabled:true});
        }

        edit = (record)=> {
            this.$editModalForm.edit(record);
        }

        saveFormCallBack = (res,type)=> {
            console.log(res)
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