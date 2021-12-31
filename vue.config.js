module.exports = {
	pluginOptions: {
		electronBuilder: {
			builderOptions: {
				appId: 'com.f3.linkanizer.app',
				win: {
					icon: 'public/appIcon.png'
				},
			},
			mainProcessFile: 'src/background/main.js',
			rendererProcessFile: 'src/renderer/main.js',
		},
	},
	css: {
		loaderOptions: {
			sass: {
				additionalData: '@import "~@/renderer/assets/styles/root.scss";'
			},
		}
	},
}