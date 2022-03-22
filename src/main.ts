import { createApp } from 'vue'
import { LockPlugin } from '@snapshot-labs/lock/plugins/vue3'
import options from '@/helpers/auth'
import App from './App.vue'
import router from './router'
import './assets/styles/tailwind.css'
import './assets/styles/fonts.css'

const app = createApp(App)

app.use(LockPlugin, options)
app.use(router)

app.mount('#app')
