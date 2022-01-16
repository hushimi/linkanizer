# linkanizer

## version

- node: 16.13.1
- vue-cli: 4.5.13
- vue: 3.0.0
- electron: 13.0.0

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
- mainWindow.once('ready-to-show') never work when using preload
- tailwind

```bash
yarn add tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

# Reference

- [Electron Document](https://www.electronjs.org/ja/docs/latest/api/app)
- [Setup Electron and vue](https://medium.com/swlh/how-to-safely-set-up-an-electron-app-with-vue-and-webpack-556fb491b83)
- [fontawesome](https://byceclorets.com/vue/font-awesome/)
- [Open External File](https://stackoverflow.com/questions/30381450/open-external-file-with-electron)
- [set app icon](https://blog.katsubemakito.net/nodejs/electron/app-icon)
- [Tree Structure in RDB](https://www.wantedly.com/companies/tutorial/post_articles/299434)
- [Tree Structure in RDB](https://katsusand.dev/posts/rdb-folder/)
- [Create Own Menu Bar](https://dev.to/saisandeepvaddi/creating-a-custom-menu-bar-in-electron-1pi3)
- [Ready to show sample](https://gist.github.com/ckerr/1c515352ed0831e91d9df7e19520655e)
- [Using google fonts](https://qiita.com/key4_0121/items/0d716818fd3fb1958be6)
