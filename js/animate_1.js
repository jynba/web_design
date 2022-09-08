function animate(obj, target, x, callback) {
    // console.log(callback);  callback = function() {}  ���õ�ʱ�� callback()

    // �������ǰ�Ķ�ʱ����ֻ������ǰ��һ����ʱ��ִ��
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // ����ֵд����ʱ��������
        // �����ǲ���ֵ��Ϊ���� ��Ҫ����С��������
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / x;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // ֹͣ���� ������ֹͣ��ʱ��
            clearInterval(obj.timer);
            // �ص�����д����ʱ����������

            callback && callback();
        }
        // ����ֵ��Ϊһ��������С��ֵ  ������ʽ��(Ŀ��ֵ - ���ڵ�λ��) / 10
        obj.style.left = obj.offsetLeft + step + 'px';

    }, 15);
}
// function animate_1(obj, target) {
//     // console.log(callback);  callback = function() {}  ���õ�ʱ�� callback()

//     // �������ǰ�Ķ�ʱ����ֻ������ǰ��һ����ʱ��ִ��
//     clearInterval(obj.timer);
//     obj.timer = setInterval(function () {
//         // ����ֵд����ʱ��������
//         // �����ǲ���ֵ��Ϊ���� ��Ҫ����С��������
//         // var step = Math.ceil((target - obj.offsetLeft) / 10);
//         var step = (target - obj.offsetTop) / 1;
//         step = step > 0 ? Math.ceil(step) : Math.floor(step);
//         if (obj.offsetTop == target) {
//             // ֹͣ���� ������ֹͣ��ʱ��
//             clearInterval(obj.timer);
//             // �ص�����д����ʱ����������

//             callback && callback();
//         }
//         // ����ֵ��Ϊһ��������С��ֵ  ������ʽ��(Ŀ��ֵ - ���ڵ�λ��) / 10
//         obj.style.top = obj.offsetTop + step + 'px';
//     }, 15);
// }


function back(obj, target) {

        // �������ǰ�Ķ�ʱ����ֻ������ǰ��һ����ʱ��ִ��
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            // ����ֵд����ʱ��������
            // �����ǲ���ֵ��Ϊ���� ��Ҫ����С��������
            // var step = Math.ceil((target - obj.offsetLeft) / 10);
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == target) {
                // ֹͣ���� ������ֹͣ��ʱ��
                clearInterval(obj.timer);
                // �ص�����д����ʱ����������
            }
            // ��ÿ�μ�1 �������ֵ��Ϊһ��������С��ֵ  ������ʽ��(Ŀ��ֵ - ���ڵ�λ��) / 10
            // obj.style.left = window.pageYOffset + step + 'px';
            window.scroll(0, window.pageYOffset + step);
        }, 15);
    }