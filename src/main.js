import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import vFadeIn from './directives/v-fade-in'

const app = createApp(App)

app.directive('fade-in', vFadeIn)

app.use(router)

app.mount('#app')
