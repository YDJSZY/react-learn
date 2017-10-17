/**
 * Created by luwenwei on 2017/9/13.
 */
import baseConfig from '../config/baseConfig';
var myInfo,constants,$localStorage,localStorageName = baseConfig.localStorageName;

var setMyInfo = function (data) {
    return myInfo = data;
}

var setConstants = function (data) {
    return constants = data;
}

var getLocalStorage = function () {
    if(!window.localStorage.hasOwnProperty(localStorageName)){
        var storage = {};
        setLocalStorage(storage);
    }
    if(!window.localStorage.getItem(localStorageName)) return {};
    return JSON.parse(window.localStorage.getItem(localStorageName));
}

var setLocalStorage = function (storage) {
    try {
        window.localStorage.setItem(localStorageName,JSON.stringify(storage));
    }catch (e){
        console.debug(e)
    }
}

export {myInfo,constants,setMyInfo,setConstants,getLocalStorage,setLocalStorage}