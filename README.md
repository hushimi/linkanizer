# linkanizer

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

# TODO

- [x] prepare composition api
- [ ] IPC set up(show memory usage on cpuUsage.vue)
- [ ] SCSS set up
- [ ] Fontawesome install
- [ ] upload to my github
- [ ] Side Menu Style(like REECH DB)

# Memo

- FrontEndProcess: VueJS(ipcRenderer)
- BackEndProcess: background.js(ipcMain)
- Use ContextBridge to communicate with BackGroundProcess
