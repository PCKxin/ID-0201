/**
 * (
 *     function(doc, win){ }
 * )(doucment, window);
 * 这是一个立即执行函数表达式，也叫匿名函数
 * 作用：防止变量污染，封装代码
 * 仅接受document(文档对象)和window(窗口对象)两个参数
 * 
 * **/ 

// 可以看模版页面的最宽单位和font-size值然后填入下面的公式中

(
    function(doc, win){
        // 这个逗号相当于一个var, 同时声明了三个变量 
        var docEl = doc.documentElement, // 获取文档根元素html标签
            resize_event = 'orientationchange' in window ? 'orientationchange' : 'resize',  // 判断window对象是否具有 屏幕旋转事件(orientationchange) 属性，如果支持则为orientationchange，否则为resize(屏幕大小改变事件)
            re_rem = function(){  // 重新计算rem的值
                var clientWidth = docEl.clientWidth; 
                if(!clientWidth) return; 
                if(clientWidth >= 1024){ 
                    docEl.style.fontSize = '102.4px'; 
                }else{
                    docEl.style.fontSize = 102.4 * (clientWidth / 1024) + 'px'; 
                }
            };
        if(!doc.addEventListener) return; // 如果文档对象没有添加事件监听的方法，则直接返回
        win.addEventListener(resize_event, re_rem, false); // 添加事件监听，当屏幕旋转或屏幕大小改变时，重新计算rem的值
        doc.addEventListener('DOMContentLoaded', re_rem, false); // 添加事件监听，当文档加载完成时，重新计算rem的值
    }
)(document, window);