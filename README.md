![](https://www.emperinter.info/wp-content/uploads/2021/09/wp_editor_md_a31737666d9c964a9e59f595c2f09ead.jpg)

> 整个教程不涉及过于深入的知识，通过一系列c操作能够运行一个简单的MarkDown编辑器。在整个过程中体会Electron的作用，对于我来说就是把整个网页和浏览器打包成一个程序了，简单说可能就是我们常说的`大前端`。

# 安装

- 安装**npm**,详情请参考官网[https://nodejs.org/en/](https://nodejs.org/en/)

- 创建项目文件夹

```shell
mkdir Markdown
```

- 初始化

```shell
npm init
```

初始化后会生成一个项目描述文件`package.json`，内容(特别注意main何scripts选项)如下：
```json
{
  "name": "markdownediter",
  "version": "1.0.0",
  "description": "markdownediter",
  "main": "index.js",
  "scripts": {
    "start": "electron ."
  },
  "keywords": [
    "markdown"
  ],
  "author": "emperinter",
  "license": "MIT",
  "devDependencies": {
    "electron": "^14.0.0"
  }
}
```

- 安装electron依赖

```shell
npm install --save-dev electron
```
![](https://www.emperinter.info/wp-content/uploads/2021/09/wp_editor_md_782ae4dc278fc686ce39a04493c9f227.jpg)

如果安装失败切换到淘宝镜像
```shell
npm config set electron_mirror "https://npm.taobao.org/mirrors/electron/"
```


- 下载Markdown依赖(用的是Editor.md,我这里用的是自己一个项目旧版本，新版本自己去琢磨)。下载后把JS目录整个移到该项目文件夹下；我整个项目也导报到上面了，不用整个也行，文章末尾有说明。

```shell
git clone https://github.com/emperinter/SimpleElectronGuide
```

# Markdown配置步骤

- 创建index.html文件,内容如下：

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Markdown</title>

		<link href="index.css" rel="stylesheet">

		<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.3.1/jquery.slim.min.js"></script>

		<!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

		<!-- 可选的 Bootstrap 主题文件（一般不用引入） -->
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

		<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>


		<!--markdwwn需要-->
		<script src="https://cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
		<script src="js/editor.md-master/editormd.min.js"></script>

		<!--markdwwn需要-->
		<link rel="stylesheet" href="js/editor.md-master/css/editormd.css" />

	</head>

	<body>


		<br/>
			
		<div align="center">
			<form action="" method="POST">
				<table border="1" width="95%">
					<tr>
						<div id="test-editor">
							<textarea style="display:none;" name="mark">### 关于 Editor.md**Editor.md
** 是一款开源的、可嵌入的 Markdown 在线编辑器（组件），基于 CodeMirror、jQuery 和 Marked 构建。**
> print("hello world !")
</textarea>
		<!-- 第二个隐藏文本域，用来构造生成的HTML代码，方便表单POST提交，这里的name可以任意取，后台接受时以这个name键为准 -->
							<textarea class="editormd-html-textarea" name="post"></textarea>
						</div>
					</tr>

				</table>
			</form>
		</div>

		<hr/>


        <br/>
        <br/>
        <br/>

		<footer class="footer mt-auto py-3">
			<div class="container" align="center" style="text-decoration:none;font-size:22px;">
				<span class="text-muted">Produced By <a style="text-decoration:none;" href="https://www.emperinter.info">emperinter</a>| <a style="text-decoration:none;" href="https://github.com/emperinter/MessageBoard">Github</a> | <a style="text-decoration:none;" href="mailto:blog@emperinter.info">Email</a></a></span>
			</div>
		</footer>

		<script type="text/javascript">
			$(function() {
				var editor = editormd("test-editor", {
					width  : "95%",
						height : 350,
				path   : "js/editor.md-master/lib/",
				saveHTMLToTextarea : true
				});
			});
		</script>
	</body>
</html>
```

- index.js配置

```js
//引入模块
const { app, BrowserWindow } = require('electron')

// 创建一个窗口

function createWindow () {

	const win = new BrowserWindow({
		width:800,
		height:600

	})
	win.loadFile('index.html')

}

// 侦听 app 的ready事件

app.whenReady().then(() => {

	createWindow()

})

```


- 运行（可看到项目运行时什么样子的）

```shell
npm start
```

# 打包

> 打包成可执行文件！

- 打包前的配置

```shell
npm install --save-dev @electron-forge/cli
npx electron-forge import
```

- 打包

```shell
npm run make
```

# 代码

- 我把整个教程的文件都打包到GITHUB上了（electron 等等基础包还是要自己安装，整个文件太大，Github的GFS不够用），有需要的请访问：[https://github.com/emperinter/SimpleElectronGuide](https://github.com/emperinter/SimpleElectronGuide)

- 主要要获取的npm依赖，其它缺啥自己去看报错日志：

```shell
npm install --save-dev electron
npm install --save-dev @electron-forge/cli
npx electron-forge import
```