/* 
moveStart()
目前支持元素的自身宽度， 高度的变化，opacity的变化
element 操作的元素 
attr 元素属性  width/height/opacity string类型
target 目标值  opacity支持 0 - 100 width/height 支持 0 - 很大  Number类型
moveMent 运动方式  默认line 可选 ease
 */

// 获取元素属性
let getStyle = function (element, attr) {
    if (element.currentStyle) {
        return element.currentStyle[attr];
    } else {
        return getComputedStyle(element, false)[attr];
    }
}

let moveStart = function (element, attr, target, moveMent = 'line') {
    // 默认匀速
    clearInterval(element.timer);
    element.timer = setInterval(() => {
        let skip = 7;
        // 变速运动
        if (moveMent == 'ease') {
            skip = (target - parseInt(getStyle(element, attr))) / 7;
            if (target > parseInt(getStyle(element, attr))) {
                skip = Math.ceil(skip)
            } else {
                skip = Math.floor(skip);
            }
            if (target === parseInt(getStyle(element, attr))) {
                clearInterval(element.timer);
            } else {
                element.style[attr] = parseInt(getStyle(element, attr)) + skip + 'px';
            }
        }    
        // 匀速运动
        skip = target - parseInt(getStyle(element, attr)) > 0 ? skip : -skip;
        if (Math.abs(target - parseInt(getStyle(element, attr))) > Math.abs(skip)) {
            element.style[attr] = parseInt(getStyle(element, attr)) + skip + 'px';
        } else {
            element.style[attr] = target + 'px';
        }
        
        // 处理 opacity
        let opacity = null;
        if (attr === 'opacity') {
            if (target > parseFloat(getStyle(element, 'opacity')) * 100) {
                opacity = parseInt(parseFloat(getStyle(element, 'opacity')) * 100);
            } else {
                opacity = parseInt(parseFloat(getStyle(element, 'opacity')) * 100);
            }
            if (target > opacity) {
                skip = Math.ceil((target - opacity) / 7);
            } else {
                skip = Math.floor((target - opacity) / 7);
            }
            // 目标值等于当前的opacity
            if (target === opacity) {
                clearInterval(element.timer);
            } else {
                opacity += skip;
                element.style.opacity = opacity / 100;
            }   
        } 
    }, 30)
}