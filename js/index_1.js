window.addEventListener('load', function () {
    // ��ȡԪ��
    var focus = document.querySelector('.focus');
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var fWidth = focus.offsetWidth;


    focus.addEventListener('mouseenter', function () {
        //�����ʱ��
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function () {
        timer = setInterval(function () {
            //�ֶ����õ���Ҳ��¼�
            arrow_r.click();
        }, 6000);
    })

    //��̬С��Ȧ ��ӦͼƬ
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.box_bottom');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        //��¼������
        li.setAttribute('index', i);
        //��li���뵽ol
        ol.appendChild(li);
        //����˼�� �󶨵���¼�
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'background_grd';
            //�����Ȧ�ƶ�
            var index = this.getAttribute('index');
            //ͬ��������ఴť��ԲȦģʽ
            num = circle = index;
            //��¼ͼƬ���
            var fWidth = focus.offsetWidth;
            //���ö�������
            animate(ul, -index * fWidth, 1);
        })
    }
    //��һ��С��ȦĬ��ѡ��
    ol.children[0].className = 'background_grd';

    //��¡��һ��ͼƬ�����
    var last = ul.children[0].cloneNode(true);
    ul.appendChild(last);

    var num = 0;
    var circle = 0;
    //�Ҳ�С��ť����ֲ�
    arrow_r.addEventListener('click', function () {
        //�ж��Ƿ����һ��
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * fWidth, 1);
        //С��Ȧ���Ŷ�
        circle++;
        circle = circle > ol.children.length - 1 ? 0 : circle;
        //���ú���
        circleChange();
    }
    )

    //���С��ť����ֲ�
    arrow_l.addEventListener('click', function () {
        //�ж��Ƿ��һ��
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * fWidth + 'px';
        }
        num--;
        animate(ul, -num * fWidth, 1);
        //СԲȦ���Ŷ�
        circle--;
        // if (circle < 0) {
        //     circle = ol.children.length - 1;
        // }
        circle = circle < 0 ? ol.children.length - 1 : circle;
        //���ú���
        circleChange();
    }
    )

    //С��Ȧ�任
    function circleChange() {
        //�������С��Ȧ����
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        //���µ�ǰС��Ȧ����
        ol.children[circle].className = 'background_grd';

    }

    //�Զ��ֲ� ��ʱ��
    var timer = setInterval(function () {
        //�ֶ����õ���Ҳ��¼�
        arrow_r.click();
    }, 6000);
	
	
	
// ��ȡ������ɼ�����߶�
var window_height= document.documentElement.clientHeight;
// �û��ֶ��޸�������ɼ�����߶�ʱ�޸ı���
window.onresize=function () {
    window_height=document.documentElement.clientHeight;
};
// ��ȡ����Ч��Ԫ��
var My_dream=document.getElementsByClassName('dream');
// �����ֹ���ִ�з���
window.onscroll = function(){
    // ��ȡ�����ֹ�������
    var _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
 
    // ѭ����dream
    for (var k=0;k<My_dream.length;k++){
        if (_scrollTop>= getOffsetTop(My_dream[k]) - window_height && _scrollTop<= getOffsetTop(My_dream[k]) ){
            My_dream[k].style.animationName=My_dream[k].dataset.animate.split(',')[0];
            My_dream[k].style.animationDuration=My_dream[k].dataset.animate.split(',')[1];
            My_dream[k].style.animationTimingFunction=My_dream[k].dataset.animate.split(',')[2];
        }
    }
};
 
// �ж�Ԫ�ظ����Ƿ����Ѷ�λԪ��
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
 
// ����������0ʱִ�е�һ��Ч��
function my_animation() {
    var _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // Ч������
    for (var k=0;k<My_dream.length;k++){
        if (_scrollTop>= getOffsetTop(My_dream[k]) - window_height && _scrollTop<= getOffsetTop(My_dream[k]) ){
            My_dream[k].style.animationName=My_dream[k].dataset.animate.split(',')[0];
            My_dream[k].style.animationDuration=My_dream[k].dataset.animate.split(',')[1];
            My_dream[k].style.animationTimingFunction=My_dream[k].dataset.animate.split(',')[2];
        }
    }
}
my_animation();


    //1. ��ȡԪ��
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
        //     // window.pageYOffset ҳ�汻��ȥ��ͷ��
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
        //������ҳ�������#two���ӣ�����ʾ gobackģ��
        if (window.pageYOffset >= peopleTop) {
            goBack.style.display = 'block';
        }
		else {
            goBack.style.display = 'none';
        }
    });
    goBack.addEventListener('click', function () {
        // �����x��y ������λ�� ֱ��д���ּ���
        // window.scroll(0, 0);
        // ���ڹ��� ������window
        // window.scroll(0, 0);
        back(window, 0);
    });

    // // ���ҵ���˷��ض���ģ�飬���ô��ڹ�����ҳ������Ϸ�
    // goBack.addEventListener('click', function () {
    //     // �����x��y ������λ�� ֱ��д���ּ���
    //     // window.scroll(0, 0);
    //     // ��Ϊ�Ǵ��ڹ��� ���Զ�����window
    //     animate(window, 0);
    // });
    // // ��������
    // function animate(obj, target, callback) {
    //     // console.log(callback);  callback = function() {}  ���õ�ʱ�� callback()

    //     // �������ǰ�Ķ�ʱ����ֻ������ǰ��һ����ʱ��ִ��
    //     clearInterval(obj.timer);
    //     obj.timer = setInterval(function () {
    //         // ����ֵд����ʱ��������
    //         // �����ǲ���ֵ��Ϊ���� ��Ҫ����С��������
    //         // var step = Math.ceil((target - obj.offsetLeft) / 10);
    //         var step = (target - window.pageYOffset) / 10;
    //         step = step > 0 ? Math.ceil(step) : Math.floor(step);
    //         if (window.pageYOffset == target) {
    //             // ֹͣ���� ������ֹͣ��ʱ��
    //             clearInterval(obj.timer);
    //             // �ص�����д����ʱ����������
    //             // if (callback) {
    //             //     // ���ú���
    //             //     callback();
    //             // }
    //             callback && callback();
    //         }
    //         // ��ÿ�μ�1 �������ֵ��Ϊһ��������С��ֵ  ������ʽ��(Ŀ��ֵ - ���ڵ�λ��) / 10
    //         // obj.style.left = window.pageYOffset + step + 'px';
    //         window.scroll(0, window.pageYOffset + step);
    //     }, 15);
    // }
})


