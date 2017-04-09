#项目名：模仿许多音乐播放器
	###Fight for me!

##技术盏：
	react+ webpack+bootstrap
	#安装启动
		安装依赖包 npm i --registry=https://registry.npm.taobao.org
		启动fis3 server服务 fis3 server start
		将代码推到fis3 server www文件中 fis3 release -cwL 修改代码可以自动刷新浏览器

	#项目目录结构
	project
	  ├─ node_modules   (npm模块)  
	  ├─ src    (工程模块)
	  │  ├─ actions  (获取数据并流向stores)
	  │  │  └─ more
	  │  ├─ components (组件)
	  │  │  └─ more
	  │  ├─ reducers  (每个store)
	  │  │  ├─ index
	  │  │  └─ detail
	  │  └─ containers (页面)
	  │     ├─ header
	  │     └─ footer
	  │  └─ router       (路由)
	  │     ├─ cardDetail
	  ├─ source    (声音文件)	 
	
	  ├─ webpack.config.js   (webpack编译配置)
	  ├─ .eslintrc.json   (eslint配置)
	  ├─ index.html   (入口文件)

##需求：
###组成部分有
	1.播放页面
		-可以滑动切换音乐
		-播放列表
		-可分享
	（后续可能可以加歌词显示）

##兼容性：
android 4.4+
ios 8.0+
##追加：
	最好后期可以加播放歌词的功能
	分享功能实现要研究下怎么做，
	有wifi 网路判断
qq音乐做的也不错，可以抄袭下 哈哈哈——！
##以下是案例
https://i.y.qq.com/v8/playsong.html?playindex=0&songid=104769200,105564586,1865641,1770753,7315288,105477358,1883828,102335206,739120,4943082,5037883,101291074,1761010,478068,104384419,105747880,1400865,619518,100782665,7396229,7378431,101125428,1819400,104923464,103489546,2447134,803095,4829538,9059016,7250957,1885769,9059017,1865649&prevent=1

#rem2px 使用

##js注入rem
```
var injectRem = require('./rem');
var rem = injectRem();
window.dp2rem = rem.dp2rem;
window.rem2dp = rem

const styles = {
	width: dp2rem('200') + 'rem',
	height: '200px',
	background: 'red'
}
```

##css引用mixin
```@import 'rem.scss'
.demo {
  padding-left: dp2rem(10px); // function
  @include padding-bottom(20px); // mixin
}
```

https://github.com/shihuacivis/px2rem
优秀的项目介绍：
https://cnodejs.org/topic/58a03cf19b7fe0d96e5a7fa9

3、针对ios视网膜屏幕1px边框的问题（1px hairline），可以采用某宝的方案，在设置字体大小之前，根据屏幕像素比，更改页面的viewport：

var ua = navigator.userAgent.toLowerCase();
if (/iphone|ipad|ipod/.test(ua)) {
var sc = 1 / window.devicePixelRatio;
document.getElementsByName('viewport')[0].content = 'initial-scale='+ sc +', maximum-scale='+ sc +', minimum-scale='+ sc +', user-scalable=no';
}

