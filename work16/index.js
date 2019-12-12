//需求：鼠标经过盒子 显示遮罩和大图 鼠标移动的时候 让遮罩跟着移动让大图按照比例移动
function $(id) { // 根据id值获取元素对象
    return document.getElementById(id);
}
//鼠标经过盒子 显示遮罩和大图
$('smallBox').onmouseover = function () {
    $('mask').style.display = 'block';
    $('bigBox').style.display = 'block';
};
//鼠标离开盒子 隐藏遮罩和大图
$('smallBox').onmouseout = function () {
    //隐藏遮罩和大图
    $('mask').style.display = 'none'
    $('bigBox').style.display = 'none';
};
// 鼠标在盒子上移动的时候
// 让遮罩跟着鼠标移动
$('smallBox').onmousemove = function (event) {
    
}