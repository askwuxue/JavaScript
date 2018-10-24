/* 
moveStart()
目前支持元素的自身宽度， 高度的变化，opacity的变化
element 操作的元素 
attr 元素属性  width/height/opacity string类型
target 目标值  opacity支持 0 - 100 width/height 支持 0 - 很大  Number类型
moveMent 运动方式  默认line 可选 ease
callback 回调函数
 */

// 获取元素属性
let getStyle = function (element, attr) {
    if (element.currentStyle) {
        return element.currentStyle[attr];
    } else {
        return getComputedStyle(element, false)[attr];
    }
}

let moveStart = function (element, attr, target, moveMent = 'line', callback) {
    // 默认匀速
    clearInterval(element.timer);
    element.timer = setInterval(() => {
        let skip = 7;
        let elementAttr = getStyle(element, attr);
        // 变速运动
        if (moveMent === 'ease') {
            skip = (target - parseInt(elementAttr)) / 7;
            if (target > parseInt(elementAttr)) {
                skip = Math.ceil(skip);
            } else {
                skip = Math.floor(skip);
            }
            if (target === parseInt(elementAttr)) {
                clearInterval(element.timer);
            } else {
                element.style[attr] = parseInt(elementAttr) + skip + 'px';
            }
        }    
        // 匀速运动
        skip = target - parseInt(elementAttr) > 0 ? skip : -skip;
        if (Math.abs(target - parseInt(elementAttr)) > Math.abs(skip)) {
            element.style[attr] = parseInt(elementAttr) + skip + 'px';
        } else {
            element.style[attr] = target + 'px';
            clearInterval(element.timer);
            // callback
            if(callback) {
                callback();
            }
        }
        
        // 处理 opacity
        let opacity = null;
        if (attr === 'opacity') {
            // getStyle 获取的是字符串
            if (target > parseFloat(elementAttr) * 100) {
                // 小数相加损失精度 用整数代替
                opacity = parseInt(parseFloat(elementAttr) * 100);
            } else {
                opacity = parseInt(parseFloat(elementAttr) * 100);
            }
            if (target > opacity) {
                skip = Math.ceil((target - opacity) / 7);
            } else {
                skip = Math.floor((target - opacity) / 7);
            }
            // 目标值等于当前的opacity
            if (target === opacity) {
                clearInterval(element.timer);
                if (callback) {
                    callback();
                }
            } else {
                opacity += skip;
                element.style.opacity = opacity / 100;
            }   
        } 
    }, 15)
}