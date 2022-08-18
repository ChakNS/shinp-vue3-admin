import { defineStore } from 'pinia'
import { SYSTEM } from 'types/system'
import { FetchAllMenus } from '@/service/api/system'
import to from 'await-to-js'
import { ShinpError } from '@/utils/message'

interface SYSTEM_STATE {
  menuList: Array<SYSTEM.Menu>
  activeMenu?: string
}

export const useSystemStore = defineStore('systemStore', {
  state: (): SYSTEM_STATE => ({
    menuList: [],
    activeMenu: undefined,
  }),
  actions: {
    async initMenuList() {
      const [err, result] = await to(FetchAllMenus())
      if (err) {
        ShinpError(err.message)
        return
      }
      this.menuList = this.formatMenu(result)
      this.activeMenu = this.menuList.find(item => item.path === this.$route.path)?._id
    },
    formatMenu(list: Array<SYSTEM.Menu>) {
      return list.map(item => {
        item.icon = this.formatIcon(item.icon)
        return item
      })
    },
    formatIcon(icon: string) {
      return icon.split('/')[1]
    },
  },
})
