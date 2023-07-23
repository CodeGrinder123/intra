import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// const navigationStack = []
const app = createApp(App).use(router)
// app.config.globalProperties.navigationStack = navigationStack;
app.mount('#app')