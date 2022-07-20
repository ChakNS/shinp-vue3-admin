import { defineComponent, PropType } from 'vue'
import components from './components'

function generateComp(col: ShinpForm.ColProp, values: Record<string, any>) {
  return components[col.type](col, values)
}

export default defineComponent({
  props: {
    col: {
      type: Object as PropType<ShinpForm.ColProp>,
      default: () => null,
    },
    values: {
      type: Object,
      default: () => null,
    },
  },
  setup(props) {
    if (!props.col) return () => <span>invalid col attrs</span>
    if (props.col.render) return props.col.render(props.col, props.values)
    return () => generateComp(props.col, props.values)
  },
})
