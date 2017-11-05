/**
 * Created by luwenwei on 17/9/3.
 */
import React from 'react';
import { renderAvatar,renderEnabled,renderTooltip } from '../../untils/renderData';
//import { BrowserRouter as StaticRouter,Link } from 'react-router-dom';
import { Link, Route } from 'react-keeper'
var model = {
    getFields:function (context) {
        var self = context;
        return [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
                show:true,
                sorter:true,/*服务端排序*/
                render: (text) => <a href="#">{text}</a>,
            },
            {
                title: '名字',
                dataIndex: 'username',
                key: 'username',
                edit:true,
                show:true,
                type:'text',
                placeholder:'必填',
                required:true,
                validate: function (record) {
                    if(!record[this.key]) return "required";
                },
                render: (text) => <a href="#">{text}</a>,
            }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                edit:true,
                show:true,
                type:'number',
                placeholder:'必填',
                required:true,
                validate: function (record) {
                    if(!record[this.key]) return "required";
                    if(record[this.key] < 0 || record[this.key] > 10) {
                        return "年龄必须在0和10之间";
                    }
                },
                sorter:true/*服务端排序*/
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
                show:true,
                edit:true,
                type:'text'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                show:true,
                edit:true,
                placeholder:"必选",
                type:'select',
                validate: function (record) {
                    if(!record[this.key]) return "required";
                },
                source:'Sex'
            },
            {
                title: '身高',
                dataIndex: 'height',
                key: 'height',
                show:true,
            },
            {
                title: '体重',
                dataIndex: 'weight',
                key: 'weight',
                show:true,
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                key: 'birthday',
                edit:true,
                type:"date",
                show:true,
                config:{
                    //showTime:true,
                    format:"YYYY-MM-DD",/*默认*/
                }
            },
            {
                title: '启用',
                dataIndex: 'enabled',
                key: 'enabled',
                edit:true,
                show:true,
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
                show:true,
                type:"textarea",
                render:(text,record) =>{
                    return renderTooltip(text,10);
                }
            },
            {
                title: '头像',
                dataIndex: 'head',
                key: 'head',
                show:true,
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
                show:true,
                width: 100,
                eyeWatch:false,
                style:{width:"20px"},
                render: (text, record, dataTableRef) => {
                    return <span>
                            <button className="btn btn-primary btn-xs" onClick={()=>{self.tableAction.edit(record)}}>编辑</button>
                            <span className="seperate-line"></span>
                            <Link to="/page_b/?id=1" target="_blank">跳转</Link>
                        </span>
                },
            }
        ]
    }
}

export {model};