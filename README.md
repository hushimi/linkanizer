# linkanizer

## version

- node: 16.13.1
- vue-cli: 4.5.13
- vue: 3.0.0
- electron: 13.0.0

## Libraries

- os-utils

# setup memo

```
vue create linkanizer
vue add electron-builder
```

# start electron

```
yarn run electron:serve
yarn run electron:build
```

# style Rule

- views style within \*.scss file
- components style within it's own vue file

# Memo

- BackEnd Process: background/main.js
- Renderer Process: renderer/main.js(display vuejs content)
- Use ContextBridge to communicate with BackGroundProcess(preload.js)
- set up IPC func
  1. add channel on preload.js
  2. add IPC handler at background/main.js
  3. when receive data use 'ipcMain.on' or window.ipc.on
  4. when send data use 'ipcMain.send' or window.ipc.send
  5. public/preload.js will judge valid channel and execute function

# Reference

- [Electron Document](https://www.electronjs.org/ja/docs/latest/api/app)
- [Setup Electron and vue](https://medium.com/swlh/how-to-safely-set-up-an-electron-app-with-vue-and-webpack-556fb491b83)
- [fontawesome](https://byceclorets.com/vue/font-awesome/)
