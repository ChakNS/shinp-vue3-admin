import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layoutStore', {
  state: () => ({
    theme: 'dark',
  }),
  actions: {
    setTheme(val: string) {
      this.theme = val
    },
  },
})
