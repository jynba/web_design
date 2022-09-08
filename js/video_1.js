window.addEventListener('load', function () {
    // ��ȡԪ��
    var focus = document.querySelector('.videos_left');
    var arrow_l = document.querySelector('.arrow_vl');
    var arrow_r = document.querySelector('.arrow_vr');
    var fWidth = focus.offsetWidth;
    //��꾭��focus����ʾ�������Ұ�ť
    focus.addEventListener('mouseenter', function () {
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function () {
        timer = setInterval(function () {
            //�ֶ����õ���Ҳ��¼�
            arrow_r.click();
        }, 10000);
    })

    //��̬С��Ȧ ��ӦͼƬ
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.videos_right');
    for (var i = 0; i < ul.children.length; i++) {
        var li = ol.querySelector('li');
        //��¼������
        li.setAttribute('index', i);
        //��li���뵽ol
        ol.appendChild(li);
        //����˼�� �󶨵���¼�
        li.addEventListener('mouseenter', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'big';
            //��꾭�������ƶ�
            var index = this.getAttribute('index');
            //ͬ��������ఴť������ģʽ
            num = circle = index;
            //��¼ͼƬ���
            var fWidth = focus.offsetWidth;
            //���ö�������
            animate(ul, -index * fWidth, 1);
        })
    }
    //Ĭ��ѡ��
    ol.children[0].className = 'big';

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
        circle++;
        // if (circle > ol.children.length) {
        //     circle = 0;
        // }
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
        //�����������Ч��
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        //���µ�ǰ����Ч��
        ol.children[circle].className = 'big';
    }

    //�Զ��ֲ� ��ʱ��
    var timer = setInterval(function () {
        //�ֶ����õ���Ҳ��¼�
        arrow_r.click();
    }, 10000);
})