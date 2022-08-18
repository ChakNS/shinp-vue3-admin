export declare namespace SYSTEM {
  interface MenuPrivilege {
    GET: string[]
    PUT: string[]
    POST: string[]
    DELETE: string[]
  }

  interface Menu {
    _id: string
    title: string
    desc: string
    icon: string
    path: string
    position: 'top' | 'side'
    hidden: 0 | 1
    order: number
    initial: 0 | 1
    pId: string
    privilege: MenuPrivilege
  }
}
