import { Input as AInput } from 'ant-design-vue'
import 'ant-design-vue/es/input/style/css'

const defaultProps = (col: ShinpForm.ColProp) => ({
  placeholder: `请输入${col.formItemProps?.label}`,
})

export default (col: ShinpForm.ColProp, values: Record<string, any>) => {
  const { key, typeProps = {}, slots } = col

  return <AInput v-model={values[key]} title={values[key]} v-slots={slots} {...Object.assign(defaultProps, typeProps)} />
}
