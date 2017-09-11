/**
 * Created by luwenwei on 17/9/3.
 */
import React from "react";
import { Icon } from 'antd';
var model = {
    fields:[
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
            render: text => <a href="#">{text}</a>,
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            edit:true,
            type:'number',
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
            title: '操作',
            key: 'action',
            fixed: 'right',
            width: 100,
            render: (text, record) => (
                <span>
                  <a href="#">编辑</a>
                  <span className="ant-divider" />
                  <a href="#">删除</a>
                  <span className="ant-divider" />
                </span>
            ),
        }
    ]
}

export {model};