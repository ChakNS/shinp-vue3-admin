import { createApp } from 'vue'
import App from './App.vue'
import { setupPinia } from './store'
import { setupRouter } from './router'
import '@/styles/index.less'

const app = createApp(App)

async function setupApp() {
  setupPinia(app)

  await setupRouter(app)

  app.mount('#app')
}

setupApp()
