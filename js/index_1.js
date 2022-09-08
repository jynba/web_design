window.addEventListener('load', function () {
    // 获取元素
    var focus = document.querySelector('.focus');
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var fWidth = focus.offsetWidth;


    focus.addEventListener('mouseenter', function () {
        //清除计时器
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function () {
        timer = setInterval(function () {
            //手动调用点击右侧事件
            arrow_r.click();
        }, 6000);
    })

    //动态小方圈 对应图片
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.box_bottom');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        //记录索引号
        li.setAttribute('index', i);
        //把li插入到ol
        ol.appendChild(li);
        //排他思想 绑定点击事件
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'background_grd';
            //点击方圈移动
            var index = this.getAttribute('index');
            //同步点击两侧按钮的圆圈模式
            num = circle = index;
            //记录图片宽度
            var fWidth = focus.offsetWidth;
            //调用动画函数
            animate(ul, -index * fWidth, 1);
        })
    }
    //第一个小方圈默认选中
    ol.children[0].className = 'background_grd';

    //克隆第一张图片到最后
    var last = ul.children[0].cloneNode(true);
    ul.appendChild(last);

    var num = 0;
    var circle = 0;
    //右侧小按钮点击轮播
    arrow_r.addEventListener('click', function () {
        //判断是否最后一张
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * fWidth, 1);
        //小方圈跟着动
        circle++;
        circle = circle > ol.children.length - 1 ? 0 : circle;
        //调用函数
        circleChange();
    }
    )

    //左侧小按钮点击轮播
    arrow_l.addEventListener('click', function () {
        //判断是否第一张
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * fWidth + 'px';
        }
        num--;
        animate(ul, -num * fWidth, 1);
        //小圆圈跟着动
        circle--;
        // if (circle < 0) {
        //     circle = ol.children.length - 1;
        // }
        circle = circle < 0 ? ol.children.length - 1 : circle;
        //调用函数
        circleChange();
    }
    )

    //小方圈变换
    function circleChange() {
        //清除其他小方圈背景
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        //留下当前小方圈背景
        ol.children[circle].className = 'background_grd';

    }

    //自动轮播 定时器
    var timer = setInterval(function () {
        //手动调用点击右侧事件
        arrow_r.click();
    }, 6000);
	
	
	
// 获取浏览器可见区域高度
var window_height= document.documentElement.clientHeight;
// 用户手动修改浏览器可见区域高度时修改变量
window.onresize=function () {
    window_height=document.documentElement.clientHeight;
};
// 获取所需效果元素
var My_dream=document.getElementsByClassName('dream');
// 鼠标滚轮滚动执行方法
window.onscroll = function(){
    // 获取鼠标滚轮滚动距离
    var _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
 
    // 循环类dream
    for (var k=0;k<My_dream.length;k++){
        if (_scrollTop>= getOffsetTop(My_dream[k]) - window_height && _scrollTop<= getOffsetTop(My_dream[k]) ){
            My_dream[k].style.animationName=My_dream[k].dataset.animate.split(',')[0];
            My_dream[k].style.animationDuration=My_dream[k].dataset.animate.split(',')[1];
            My_dream[k].style.animationTimingFunction=My_dream[k].dataset.animate.split(',')[2];
        }
    }
};
 
// 判断元素父集是否有已定位元素
function getOffsetTop(ele) {
    var rtn = ele.offsetTop;
    var o = ele.offsetParent;
    while(o!=null)
    {
        rtn += o.offsetTop;
        o = o.offsetParent;
    }
    return rtn;
}
 
// 滚动条等于0时执行第一屏效果
function my_animation() {
    var _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // 效果方法
    for (var k=0;k<My_dream.length;k++){
        if (_scrollTop>= getOffsetTop(My_dream[k]) - window_height && _scrollTop<= getOffsetTop(My_dream[k]) ){
            My_dream[k].style.animationName=My_dream[k].dataset.animate.split(',')[0];
            My_dream[k].style.animationDuration=My_dream[k].dataset.animate.split(',')[1];
            My_dream[k].style.animationTimingFunction=My_dream[k].dataset.animate.split(',')[2];
        }
    }
}
my_animation();


    //1. 获取元素
    var shortcut = document.querySelector('.shortcut');
    var people = document.querySelector('.people');
    var black_1 = document.querySelector('.black_1');
    var black_2 = document.querySelector('.black_2');
    var black_3 = document.querySelector('.black_3');
    var black_4 = document.querySelector('.black_4');
    var black_5 = document.querySelector('.black_5');
    var black_6 = document.querySelector('.black_6');
    var black_7 = document.querySelector('.black_7');
    var black_8 = document.querySelector('.black_8');
    var times_2 = document.querySelector('.times_2');
    var peopleTop = people.offsetTop;
    var times_2Top = times_2.offsetTop;
    var goBack = document.querySelector('.goback');
    document.addEventListener('scroll', function () {
        //     // window.pageYOffset 页面被卷去的头部
        if (window.pageYOffset >= peopleTop - 100) {
            shortcut.style.position = 'fixed';
            shortcut.style.background = '#fff';
            black_1.style.color = "#000";
            black_2.style.color = "#000";
            black_3.style.color = "#000";
            black_4.style.color = "#000";
            black_5.style.color = "#000";
            black_6.style.color = "#000";
            black_7.style.color = "#000";
            black_8.style.color = "#000";
            shortcut.classList.add("bowshadow");
        } else {
            shortcut.style.position = 'absolute';
            shortcut.style.background = 'rgba(0, 0, 0, 0)';
            black_1.style.color = "#fff";
            black_2.style.color = "#fff";
            black_3.style.color = "#fff";
            black_4.style.color = "#fff";
            black_5.style.color = "#fff";
            black_6.style.color = "#fff";
            black_7.style.color = "#fff";
            black_8.style.color = "#fff";
            shortcut.className = "shortcut";
            shortcut.classList.remove("bowshadow");
        }
        //当我们页面滚动到#two盒子，就显示 goback模块
        if (window.pageYOffset >= peopleTop) {
            goBack.style.display = 'block';
        }
		else {
            goBack.style.display = 'none';
        }
    });
    goBack.addEventListener('click', function () {
        // 里面的x和y 不跟单位的 直接写数字即可
        // window.scroll(0, 0);
        // 窗口滚动 对象是window
        // window.scroll(0, 0);
        back(window, 0);
    });

    // // 当我点击了返回顶部模块，就让窗口滚动的页面的最上方
    // goBack.addEventListener('click', function () {
    //     // 里面的x和y 不跟单位的 直接写数字即可
    //     // window.scroll(0, 0);
    //     // 因为是窗口滚动 所以对象是window
    //     animate(window, 0);
    // });
    // // 动画函数
    // function animate(obj, target, callback) {
    //     // console.log(callback);  callback = function() {}  调用的时候 callback()

    //     // 先清除以前的定时器，只保留当前的一个定时器执行
    //     clearInterval(obj.timer);
    //     obj.timer = setInterval(function () {
    //         // 步长值写到定时器的里面
    //         // 把我们步长值改为整数 不要出现小数的问题
    //         // var step = Math.ceil((target - obj.offsetLeft) / 10);
    //         var step = (target - window.pageYOffset) / 10;
    //         step = step > 0 ? Math.ceil(step) : Math.floor(step);
    //         if (window.pageYOffset == target) {
    //             // 停止动画 本质是停止定时器
    //             clearInterval(obj.timer);
    //             // 回调函数写到定时器结束里面
    //             // if (callback) {
    //             //     // 调用函数
    //             //     callback();
    //             // }
    //             callback && callback();
    //         }
    //         // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
    //         // obj.style.left = window.pageYOffset + step + 'px';
    //         window.scroll(0, window.pageYOffset + step);
    //     }, 15);
    // }
})


