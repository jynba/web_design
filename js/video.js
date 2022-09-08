window.addEventListener('load', function () {
    // 获取元素
    var focus = document.querySelector('.videos_left');
    var arrow_l = document.querySelector('.arrow_vl');
    var arrow_r = document.querySelector('.arrow_vr');
    var fWidth = focus.offsetWidth;
    //鼠标经过focus就显示隐藏左右按钮
    focus.addEventListener('mouseenter', function () {
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function () {
        timer = setInterval(function () {
            //手动调用点击右侧事件
            arrow_r.click();
        }, 10000);
    })

    //动态小方圈 对应图片
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.videos_right');
    for (var i = 0; i < ul.children.length; i++) {
        var li = ol.querySelector('li');
        //记录索引号
        li.setAttribute('index', i);
        //把li插入到ol
        ol.appendChild(li);
        //排他思想 绑定点击事件
        li.addEventListener('mouseenter', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'big';
            //鼠标经过文字移动
            var index = this.getAttribute('index');
            //同步点击两侧按钮的文字模式
            num = circle = index;
            //记录图片宽度
            var fWidth = focus.offsetWidth;
            //调用动画函数
            animate(ul, -index * fWidth, 1);
        })
    }
    //默认选中
    ol.children[0].className = 'big';

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
        circle++;
        // if (circle > ol.children.length) {
        //     circle = 0;
        // }
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
        //清除其他文字效果
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        //留下当前文字效果
        ol.children[circle].className = 'big';
    }

    //自动轮播 定时器
    var timer = setInterval(function () {
        //手动调用点击右侧事件
        arrow_r.click();
    }, 10000);
})