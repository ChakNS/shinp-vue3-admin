import type { App } from 'vue'
import { createPinia } from 'pinia'
import { markRaw } from 'vue'
import router from '@/router'

export function setupPinia(app: App) {
  const pinia = createPinia()
  pinia.use(({ store }) => {
    store.$router = markRaw(router)
    store.$route = store.$router.currentRoute.value
  })
  app.use(pinia)
}

export * from './stores/layout'
export * from './stores/system'
