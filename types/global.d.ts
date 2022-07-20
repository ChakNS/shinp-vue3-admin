declare module 'vue' {
  interface ComponentCustomProps {
    title?: string
    scopedSlots?: unknown
    on?: Record<string, Function>
  }
}

declare module 'vue' {
  interface HTMLAttributes {
    slot?: string
  }
}

export {}
