/**
 * Created by luwenwei on 17/11/5.
 */
import React from "react";
import axios from 'axios';
import baseConfig from '../config/baseConfig';
const apiPrefix = baseConfig.apiPrefix;

export default class Http{
    constructor(url) {
        this.httpUrl = url;
    }

    async getSource(params,loading) {
        try {
            var res = await axios({
                "url":apiPrefix+this.httpUrl,
                "method":"GET",
                "params":params,
                "loading":loading
            });
            if(res.status >=200 && res.status<=300){
                return this.parseGetResponse(res);
            }else{
                this.getResponseError(res)
                React.$alert("error","请求失败!");
            }
        }catch (e) {
            console.error(e);
        }

    }

    async postData(data,loading) {
        try {
            var res = await axios({
                "url":apiPrefix+this.httpUrl,
                "method":"POST",
                "data":data,
                "loading":loading
            });
            if(res.status >=200 && res.status<=300){
                return this.parsePostResponse(res);
            }else{
                this.postResponseError(res)
                React.$alert("error","操作失败!");
            }
        }catch (e) {
            console.error(e);
        }
    }

    getResponseError(res) {

    }

    parseGetResponse(res) {
        this.setData(res.data);
    }

    parsePostResponse(res) {
        this.setData(res.data);
    }

    postResponseError(res) {

    }


    setData(data) {
        this.responseData = data;
    }

    getData() {
        return this.responseData;
    }
}