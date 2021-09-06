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
