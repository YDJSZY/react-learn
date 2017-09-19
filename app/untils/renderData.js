/**
 * Created by luwenwei on 17/9/19.
 */
import React from 'react';
import { Popover, Icon, Avatar,Tooltip } from 'antd';
var renderAvatar = function (src,title) {
    var content = <Avatar style={{"width":"100px","height":"100px"}} src={src} />;
    var _content = <Avatar src={src} />;
    return <Popover content={content} title={title || ""}>
            {_content}
        </Popover>
}

var renderEnabled = function (flag) {
    if(flag === true){
        return <Icon type="check-circle" style={{"fontSize":"20px"}} />
    }
    if(flag === false){
        return <Icon type="close-circle" style={{"fontSize":"20px"}} />
    }
}

var renderTooltip = function (title,cutTextCount) {
    if(!title) return "";
    var cutTextCount = cutTextCount || 20;
    var _title = title.length > cutTextCount ? title.substr(0,cutTextCount)+"..." : title;
    return <Tooltip title={title}>
                <span>{_title}</span>
            </Tooltip>
}

export { renderAvatar,renderEnabled,renderTooltip }