## 介绍&&废除标签&&重新定义标签

### 介绍

 - html5是发展到现在第5个版本, 5是版本号
 - 增强了可读性, 语义化更强
 - 广义的html5包括: html, css, js, svg, canvas, webgl, webstorage, websocket, webworker, audio, video, geolocation, drag&drop, webapp, ...
 - 目的减少插件, 使网页更丰富, 使网页应用更强大, 使开发更简单

#### 新特性

 - 新的语义化标签
 - 表单增强, 新的表单控件
 - 新的API, 用于离线和本地存储, 以及更好的文件访问和用户交互
 - 2D/3D图形&特效, 用于更加丰富的视觉和用户体验
 - 多媒体标签, 用于音频和视频的播放
 - 性能和集成, 通过XHR2, web worker, web socket, server-sent events, CORS, 使得web应用更加高效和实用
 - 设备访问, 用于各种输入输出设备的访问, 如摄像头, 麦克风, 位置等
 - CSS3, 用于更加丰富的样式和特效

### 废除标签

 - basefont 设置默认字体 用css代替
 - big 设置大号字体 用css代替
 - center 居中显示 用css代替
 - font 设置字体 用css代替
 - s 删除线 用css代替
 - strike 删除线 用css代替
 - tt 等宽字体 用css代替
 - u 下划线 用css代替
 - frame 框架 用iframe代替
 - frameset 框架集 用iframe代替
 - noframes 不支持框架时的内容 用iframe代替
 - acronym 首字母缩写 用abbr代替
 - applet java小程序 用object代替
 - isindex 输入域 用form代替
 - dir 目录列表 用ul代替
 - menu 菜单列表 用ul代替
 - 等等，很多, 一般在vscode中会显示红色

### 重新定义标签

 - b 粗体
 - i 斜体
 - u 下划线
 - s 删除线
 - dd 定义列表中定义的项目
 - dl 定义列表
 - dt 定义列表中的项目
 - small 小号字体 例如打印注释或者法律声明
 - strong 粗体 设置强调文本

## 布局案例

### 传统布局

 - 传统布局: 传统布局是指在html4中使用的布局方式, 一般使用table标签来实现布局
 - 传统布局的缺点: 代码冗余, 不利于seo, 不利于维护, 不利于扩展, 不利于移动端

### 新布局

 - 语义化标签布局
 - 案例:
     - ```html
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                *{
                    margin: 0;
                    padding: 0;
                }
                .main{
                    width: 80%;
                    height: 710px;
                    border-radius: 10px;
                    margin: 0 auto;
                    background: rgba(156, 156, 156, 0.318);
                    color: white;
                }
                header{
                    width: 100%;
                    height: 100px;
                    border-radius: 10px;
                    background: pink;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                .title{
                    width: 30%;
                    height: 100px;
                    text-align: center;
                    line-height: 100px;
                    font-size: 30px;
                }
                nav{
                    font-size: 20px;
                }
                article{
                    width: 100%;
                    height: 500px;
                    display: flex;
                    margin-top: 5px;
                }
                .left{
                    flex: 2;
                    height: 100%;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .left section{
                    height: 120px;
                    text-align: center;
                    line-height: 120px;
                    border-radius: 10px;
                    background: skyblue;
                }
                aside{
                    flex: 1;
                    height: 100%;
                    background: deeppink;
                    border-radius: 10px;
                    margin-left: 5px;
                    text-align: center;
                    line-height: 500px;
                }
                footer{
                    background: rgba(164, 164, 164, 0.612);
                    width: 100%;
                    height: 100px;
                    margin-top: 5px;
                    border-radius: 10px;
                    text-align: center;
                    line-height: 100px;
                }
            </style>
        </head>
        <body>
            <section class="main">
                <header>
                    <p class="title">标题/logo</p>
                    <nav>导航1</nav>
                    <nav>导航2</nav>
                    <nav>导航3</nav>
                    <nav>导航4</nav>
                </header>
                <article>
                    <section class="left">
                        <section>section1</section>
                        <section>section2</section>
                        <section>section3</section>
                        <section>section4</section>
                    </section>
                    <aside>aside侧边框/栏</aside>
                </article>
                <footer>footer</footer>
            </section>
        </body>
     ```

## 新标签

 - 低版本ie识新标签方法
     - 引入html5shiv.js
     - js代码: document.createElement("标签名") 并在css中变为块级元素

### 语义化标签

 - 优点: 代码更加简洁, 便于维护, 便于seo, 便于扩展, 便于移动端
 - 缺点: 兼容性不好, 需要兼容ie8及以下版本, 需要引入html5shiv.js

 - header 头部
 - nav 导航
 - section 区块
 - article 文章
 - aside 侧边栏
 - footer 底部
 - main 主要内容

### progress进度条

 - 用于表示任务的完成进度
 - 用法:
     - ```html
        <progress value="50" max="100"></progress>
        ```
 - 属性:
     - value: 当前进度值
     - max: 最大进度值

### datalist列表

 - 用于给input输入框提供一个列表
 - 用法:
     - ```html
        <input type="text" list="list">
        <datalist id="list">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </datalist>
        ```
 - 属性:
     - id: 用于关联input和datalist
 - 注意: datalist中的option标签必须有value属性, 且value属性的值和option标签中间的内容一致

### dialog对话框

 - 用于显示对话框
 - 用法:
     - ```html
        <dialog open>对话框</dialog>
        ```
 - 属性:
     - open: 打开对话框

### ruby标签

 - 用于显示注音
 - 用法:
     - ```html
        <ruby>
            漢<rt>han</rt>
            字<rt>zi</rt>
        </ruby>
        ```
 - 注意: rt标签中的内容会显示在ruby标签中的内容的下方

### mark标签

 - 用于标记文本
 - 用法:
     - ```html
        <mark>标记文本</mark>
        ```

### time标签

 - 用于显示时间
 - 用法例:
     - ```html
        <div class="demobox">
            今天是<time>2023-9-15</time>
            <p> 我在 <time datetime="2008-02-14">datatime这个日期</time> 有点事情</p>
        </div>
        ```
 - 属性:
     - datetime: 用于指定时间

### output标签

 - 用于显示计算结果
 - 用法例:
     - ```html
        <div class="demobox">
            <form oninput="x.value = parseInt(a.value) + parseInt(b.value)">
            input1(默认50): <input type="range" id="a" value="50" >
            input2: <input type="number" id="b" value="50" >
            =<output name="x" for="a b"></output>
            </form>
        </div>
        ```
 - 属性:
     - for: 规定output绑定的元素
     - form: 规定output所属的表单
     - name: 规定output的名称

### meter标签

 - 用于显示度量衡
 - 用法例:
     - ```html
        <div class="demobox">
            <meter value="2" min="0" max="10">2/10</meter>
        </div>
        ```
 - 属性:
     - value: 当前值
     - min: 最小值
     - max: 最大值
     - low: 低值
     - high: 高值
     - optimum: 最优值

### summary标签

 - 用于显示摘要
 - 用法例:
     - ```html
        <div class="demobox">
            <details>
                <summary>摘要</summary>
                <p>这是一个摘要</p>
            </details>
        </div>
        ```
 - 注意: summary标签必须放在details标签中

### figure标签

 - 用于显示独立的流内容(图像, 图表, 照片, 代码等)
 - 用法例:
     - ```html
        <div class="demobox">
            <figure>
                <img src="path" alt="">
                <figcaption>这是一个图片</figcaption>
            </figure>
        </div>
        ```
 - 属性:
     - figurecaption: 用于指定figure标签的标题
 - 注意: figure标签中的内容会独立于主要内容, 一般用于图像, 图表, 照片, 代码等

## 表单

### 新增表单属性

 - required: 判断输入长度是否大于0或输入的内容是不是null或者undefined 必填属性
 - autofocus: 自动获取焦点, 浏览器刷新页面有失效几率, 可以通过js中提供的focus()事件解决
 - autocomplete: 自动补全, 和name结合使用, input标签必需写上name名称才生效, 如果表单中需要填写比较敏感或有安全隐患的信息, 建议设置为off
 - maxlength: 最大输入长度
 - minlength: 最小输入长度
 - pattern: 正则表达式, 用于验证输入内容是否符合规则
 - placeholder > 占位符, 在输入内容之前显示的内容
 - readonly: 只读, 不能修改
 - disabled: 禁用, 不能修改, 不能提交
 - value: 默认值
 - name: 表单名称, 用于和后台交互
 - form: 用于关联表单, 相当于一个袋子收集信息, 使其在不同的表单中进行数据传输
 - action: 用于指定表单提交的地址
 - method: 用于指定表单提交的方式, 默认为get
 - target: 用于指定表单提交后的打开方式, 默认为_self
 - enctype: 用于指定表单提交的编码方式, 默认为application/x-www-form-urlencoded
 - novalidate: 用于取消表单的验证

### 新增表单类型

#### email 邮箱

 - 移动端键盘会自动切换为邮箱键盘出现@符号
 - 输入内容会默认验证是否有@符号
 - 用法:
     - ```html
        <input type="email">
        ```

#### url 网址

 - 输入内容会默认验证是否有http://或者https://
 - 移动端键盘会出现.com等网址后缀
 - 用法:
     - ```html
        <input type="url">
        ```

#### number 数字

 - 只能输入数字或者无限不循环的小数
 - 不加min和max属性时, 默认最小值为0, 最大值为无限大
 - 不加step属性时, 默认步长为1, 即整数
 - 用法:
     - ```html
        <input type="number" maxlength="5" min="0" max="100" value="20" step="0.1">
        <!-- 最大长度为5, 最小值为0, 最大值为100, 默认值为20, 步长为0.1 -->
        ```

#### tel 手机号码格式

 - 移动端键盘会自动切换为数字键盘
 - 用法:
     - ```html
        <input type="tel">
        ```

#### range 范围

 - 用于显示范围
 - 自由拖动
 - 用法:
     - ```html
        <input type="range" min="0" max="100" value="50" step="1">
        <!-- 最小值为0, 最大值为100, 默认值为50, 步长为1 -->
        ```

#### search 搜索框

 - 默认有一个清除按钮, 搜索框后面的一个x号 用于清除搜索框中的内容
 - 用法:
     - ```html
        <input type="search">
        ```

#### color 颜色选择器

 - 用于选择颜色, 返回的是一个十六进制的颜色值
 - 用法:
     - ```html
        <input type="color">
        ```

#### date 日期

 - 用于选择日期
 - 年月日
 - 用法:
     - ```html
        <input type="date">
        ```

#### mouth 月份

 - 用于选择月份
 - 年 月
 - 用法:
     - ```html
        <input type="mouth">
        ```

#### week 星期

 - 用于选择星期
 - 年 星期
 - 用法:
     - ```html
        <input type="week">
        ```

#### time 时间

 - 用于选择时间
 - 小时 分钟
 - 用法:
     - ```html
        <input type="time">
        ```

#### datetime-local 日期时间

 - 用于选择完整日期和时间
 - 年 月 日 - 小时 分钟
 - 用法:
     - ```html
        <input type="datetime-local">
        ```

#### multiple 多选

 - 用于多选
 - 设置当前表单允许同时多选使用 
 - 用法:
     - ```html
        <input type="file" multiple>
        ```

#### accept 文件类型

 - 用于限制文件类型
 - 用法:
     - ```html
        <input type="file" accept="image/*">
        <!-- 只能选择图片 -->
        ```

#### reset 重置

 - 用于重置表单
 - 用法:
     - ```html
        <input type="reset">
        ```
 - 注意: 重置按钮会重置表单中所有的内容, 包括表单中的默认值


### 表单验证

#### valueMissing 输入值为空时

 - 判断值是否为空
 - [案例文件](../study-codefile/new/Code/HTML5/code/6.1表单验证-valueMissing.html)

#### typeMismatch 输入值类型不匹配

 - 判断值的类型是否匹配
 - [案例文件](../study-codefile/new/Code/HTML5/code/6.2表单验证-typeMismatch.html)

#### patternMismatch 输入值与正则不匹配

 - 判断值是否符合正则表达式
 - [案例文件](../study-codefile/new/Code/HTML5/code/6.3表单验证-patternMismatch.html)

#### rangeUnderflow 输入值小于最小值

 - 判断值是否小于最小值
 - [案例文件](../study-codefile/new/Code/HTML5/code/6.4表单验证-rangeUnderflow.html)

#### stepMismatch 输入值不符合步长

 - 判断值是否符合步长
 - 判断是否符合min、max及step的规则
 - [案例文件](../study-codefile/new/Code/HTML5/code/6.5表单验证-stepMismatch.html)

#### customError 自定义错误

 - 自定义错误
 - 判断是否符合自定义的验证规则, 如果符合返回false, 不符合返回true
 - [案例文件](../study-codefile/new/Code/HTML5/code/6.6表单验证-customError.html)

#### preventDefault() 阻止默认事件

 - 阻止默认事件
 - [案例文件](../study-codefile/new/Code/HTML5/code/6.7表单验证-preventDefault.html)

#### formnovalidate 取消验证

 - 取消验证
 - [案例文件](../study-codefile/new/Code/HTML5/code/6.8表单验证-formnovalidate.html)


## 媒体标签

### 引入

 - 直接引入
 - 使用source标签引入

### 标签属性解释

 - controls: 显示控制条
 - autoplay: 自动播放
 - loop: 循环播放
 - muted: 静音
 - poster: 视频封面, 预览图片, 加入autoplay属性时, 会在视频加载完成前显示
 - preload: 预加载

### 对象属性

 - duration: 视频总时长
 - currentTime: 当前播放时间
 - paused: 是否暂停
 - ended: 是否播放结束
 - volume: 音量
 - muted: 是否静音
 - play(): 播放
 - pause(): 暂停
 - load(): 加载
 - canPlayType(): 检测浏览器是否支持某种视频格式
 - readyState: 视频当前状态
 - error: 视频错误信息
 - networkState: 网络状态
 - buffered: 已缓冲的视频时间
 - seekable: 可以跳转的视频时间
 - seeking: 是否正在跳转
 - currentSrc: 当前视频路径
 - videoWidth: 视频宽度
 - videoHeight: 视频高度
 - playbackRate: 播放速度
 - preload: 预加载
 - durationchange: 视频总时长改变时触发

 - [案例文件](../study-codefile/new/Code/HTML5/code/7.2媒体标签-video对象属性.html)

### video标签

 - 用于播放视频
 - 用法:
     - ```html
        <video src="path" controls autoplay loop muted poster="path"></video>
        ```
 - 属性:
     - src: 视频路径
     - controls: 显示控制条
     - autoplay: 自动播放
     - loop: 循环播放
     - muted: 静音
     - poster: 视频封面

### audio标签

 - 用于播放音频
 - 用法:
     - ```html
        <audio src="path" controls autoplay loop muted></audio>
        ```
 - 属性:
     - src: 音频路径
     - controls: 显示控制条
     - autoplay: 自动播放
     - loop: 循环播放
     - muted: 静音

### source标签

 - 用于引入媒体文件
 - 用法:
     - ```html
        <video controls autoplay loop muted poster="path">
            <source src="path" type="video/mp4">
            <source src="path" type="video/ogg">
            <source src="path" type="video/webm">
        </video>
        ```
 - 属性:
     - src: 媒体路径
     - type: 媒体类型


## 本地存储

 - [案例文件](../study-codefile/new/Code/HTML5/code/9.H5本地存储.html)

### localStorage

 - 本地存储
 - 关闭浏览器数据不会消失
 - 容量5M - 10M
 - 永久生效, 代码或手动清除
 - 只能存储字符串
 - 同一浏览器, 同一域名下的所有页面共享
 - 用法:
     - ```js
        localStorage.setItem("key", "value"); // key为键, value为值
        localStorage.getItem("key"); // 获取key对应的值
        localStorage.removeItem("key"); // 删除key对应的值
        localStorage.clear(); // 清空所有的值
        ```
 - 注意: localStorage存储的数据会永久保存在本地, 除非手动删除

### sessionStorage

 - 本地存储
 - 关闭浏览器数据会消失
 - 容量5M - 10M
 - 临时生效, 关闭浏览器自动清除
 - 只能存储字符串
 - 同一浏览器, 同一域名下的所有页面共享
 - 用法:
     - ```js
        sessionStorage.setItem("key", "value"); // key为键, value为值
        sessionStorage.getItem("key"); // 获取key对应的值
        sessionStorage.removeItem("key"); // 删除key对应的值
        sessionStorage.clear(); // 清空所有的值
        ```
 - 注意: sessionStorage存储的数据会在浏览器关闭时自动删除
