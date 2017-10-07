/**
 * Created by luwenwei on 17/9/3.
 */
import React from 'react';
import { renderAvatar,renderEnabled,renderTooltip } from '../../untils/renderData';

var model = {
    getFields:function (context) {
        var self = context;
        return [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
                sorter:true,/*服务端排序*/
                render: (text) => <a href="#">{text}</a>,
            },
            {
                title: '名字',
                dataIndex: 'username',
                key: 'username',
                edit:true,
                type:'text',
                placeholder:'必填',
                validate: function (record) {
                    if(!record[this.key]) return "required";
                },
                render: (text) => <a href="#">{text}</a>,
            }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                edit:true,
                type:'number',
                placeholder:'必填',
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
                edit:true,
                type:'text'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                edit:true,
                placeholder:"性别",
                type:'multiSelect',
                options:{rules:[
                    {required: true, message: '请填写性别'}
                ]},
                source:'Sex'
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
                style:{width:"20px"},
                render: (text, record, dataTableRef) => {
                    return <span>
                            <button className="btn btn-primary btn-xs" onClick={()=>{self.edit(record)}}>编辑</button>
                            <span className="seperate-line"></span>
                            <button className="btn btn-success btn-xs" onClick={()=>{dataTableRef.expandedRow(record)}}>详情</button>
                        </span>
                },
            }
        ]
    }
}

export {model};