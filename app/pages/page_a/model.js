/**
 * Created by luwenwei on 17/9/3.
 */
import React from 'react';
import { Popover, Icon, Avatar } from 'antd';
import { renderAvatar,renderEnabled,renderTooltip } from '../../untils/renderData';
var action = function () {
    var self = this;
    action = function (actionName,args) {
        if(!actionName) return;
        if(!this[actionName]){
            console.error("The function "+actionName+" is not exits");
            return;
        }
        this[actionName](args)
    }.bind(self)
}
var model = {
    getFields:function (context) {
        var self = context;
        return [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
                sorter:true,/*服务端排序*/
                render: text => <a href="#">{text}</a>,
            },
            {
                title: '名字',
                dataIndex: 'username',
                key: 'username',
                edit:true,
                type:'text',
                placeholder:'请输入您的名字',
                options:{rules:[
                    {required: true, message: '请填写名字'}
                ]},
                render: text => <a href="#">{text}</a>,
            }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                edit:true,
                type:'number',
                min:0,
                max:10,
                options:{rules:[
                    {required: true, message: '请填写年龄'},
                    {validator: function (rule, value, callback) {
                        if(value < 0 || value > 10){
                            callback("年龄必须在0和10之间")
                        }else{
                            callback();
                        }
                    }}
                ]},
                sorter:true/*服务端排序*/
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
                edit:true,
                type:'text'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                edit:true,
                type:'select',
                options:{rules:[
                    {required: true, message: '请填写性别'}
                ]},
                source:[{id:"1",name:"男"},{id:"2",name:"女"},{id:"3",name:"未知"}]
            },
            {
                title: '身高',
                dataIndex: 'height',
                key: 'height',
            },
            {
                title: '体重',
                dataIndex: 'weight',
                key: 'weight',
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                key: 'birthday',
                edit:true,
                type:"date",
                options:{rules:[
                    {required: true, message: '请填写生日'}
                ]},
                config:{
                    format:"YYYY-MM-DD",/*默认*/
                }
            },
            {
                title: '启用',
                dataIndex: 'enabled',
                key: 'enabled',
                edit:true,
                type:"switch",
                options:{
                    initialValue:true
                },
                render:(text, record) => {
                    return renderEnabled(text)
                }
            },
            {
                title: '描述',
                dataIndex: 'description',
                key: 'description',
                edit:true,
                type:"textarea",
                render:(text,record) =>{
                    return renderTooltip(text,10);
                }
            },
            {
                title: '头像',
                dataIndex: 'head',
                key: 'head',
                edit:true,
                type:"file",
                uploadBtnText:"上传头像",
                render:(text,record) =>{
                    return renderAvatar(text)
                }
            },
            {
                title: '操作',
                key: 'action',
                fixed: 'right',
                width: 100,
                render: (text, record) => {
                    return <span>
                          <a onClick={self.edit.bind(self,record)}>编辑</a>
                          <span className="ant-divider"/>
                          <a onClick={action.bind(undefined,"delete",record.id)}>删除</a>
                          <span className="ant-divider"/>
                        </span>
                },
            }
        ]
    }
}

export {model,action};