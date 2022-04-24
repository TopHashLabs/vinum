import { createApp } from 'vue'
import { LockPlugin } from '@snapshot-labs/lock/plugins/vue3'
import options from '@/helpers/auth'
import App from './App.vue'
import VueGtag from 'vue-gtag'
import './assets/styles/tailwind.css'
import './assets/styles/fonts.css'
import './assets/styles/main.css'
import 'vue3-carousel/dist/carousel.css'
import './assets/styles/fix-vueslider.css'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(VueGtag, {
  config: { id: process.env.GTAG_ID ?? '' }
})
app.use(LockPlugin, options)
app.use(createPinia())

app.mount('#app')
