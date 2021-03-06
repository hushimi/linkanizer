import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/renderer/assets/styles/root.css'

// Fontawesome
import { FontAwesomeIcon } from './plugins/FontAwesome'

const app = createApp(App)
app.component('fa', FontAwesomeIcon)
app.use(router)
app.use(store)
app.mount('#app')
