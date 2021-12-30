# linkanizer

## version

- node: 16.13.1
- vue-cli: 4.5.13
- vue: 3.0.0
- electron: 13.0.0

## Libraries

- os-utils: 0.0.14
- tailwind

```bash
yarn add tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

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
- Icon size => 512x512
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
- [Open External File](https://stackoverflow.com/questions/30381450/open-external-file-with-electron)
- [set app icon](https://blog.katsubemakito.net/nodejs/electron/app-icon)
