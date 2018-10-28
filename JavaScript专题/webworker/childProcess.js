// 3 接听主进程的消息
onmessage = function (e) {
    // 4 处理主进程传递的数据
    let sum = parseInt(e.data.num1) + parseInt(e.data.num2);
    // console.log(sum);
    // 5 将处理结果返回给主线程
    this.postMessage(sum);
}