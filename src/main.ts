import { createApp } from 'vue'
import { LockPlugin } from '@snapshot-labs/lock/plugins/vue3'
import options from '@/helpers/auth'
import App from './App.vue'
import './assets/styles/tailwind.css'
import './assets/styles/fonts.css'
import './assets/styles/main.css'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(LockPlugin, options)
app.use(createPinia())

app.mount('#app')
