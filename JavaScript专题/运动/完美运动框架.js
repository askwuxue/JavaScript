let getStyle = (element, attr) => {
    if (element.currentStyle) {
        return element.currentStyle[attr];
    } else {
        return getComputedStyle(element, false)[attr]
    }
};

let moveStart = (element, json, callback) => {
    clearInterval(element.timer);
    element.timer = setInterval(() => {
        let stopFlag = true;
        // 循环
        for(const key in json) {
            // 获取到元素的属性的值
            let elementStyle = getStyle(element, key)
            if (key === 'opacity') {
                current = parseInt(parseFloat(elementStyle) * 100);
            } else {
                current = parseInt(elementStyle)
            }
            // 步长
            let skip = (json[key] - current) / 7;
            skip = skip > 0 ? Math.ceil(skip) : Math.floor(skip);
            
            if (key === 'opacity') {
                element.style.opacity = (current + skip) / 100;
            } else {
                element.style[key] = current + skip + 'px';
                console.log(current, json[key]);
            }

            // 检测停止
            if (current !== json[key]) {
                stopFlag = false;
            }
        }
        if (stopFlag) {
            clearInterval(element.timer);
            if (callback) {
            callback();
            }
        }
    }, 30)
    
}