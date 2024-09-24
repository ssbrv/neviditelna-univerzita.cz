import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

import 'vuetify/styles'
import './style.scss'

import { vuetify } from './vuetify.config'

createApp(App).use(router).use(vuetify).mount('#app')
