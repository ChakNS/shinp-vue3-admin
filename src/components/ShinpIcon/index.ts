import { createVNode } from 'vue'
import * as $Icon from './icons'

const ShinpIcon = (props: { icon: string }) => {
  const { icon } = props
  const component = ($Icon as Record<string, any>)[icon]
  return createVNode(component)
}

export default ShinpIcon
