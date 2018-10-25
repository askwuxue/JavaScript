// 随机颜色生成器
let randomColorGenerator = () => {
    let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';
    for (let i = 0; i < 6; i++) {
         let random = arr[Math.floor(Math.random() * 16)];
         color += random;
     }
    return color;
}