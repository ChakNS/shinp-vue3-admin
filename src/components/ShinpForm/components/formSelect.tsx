import { Select as ASelect, SelectOption as AOption } from 'ant-design-vue'
import 'ant-design-vue/es/select/style/css'

const defaultProps = (col: ShinpForm.ColProp) => ({
  placeholder: `请选择${col.formItemProps?.label}`,
})

export default (col: ShinpForm.ColProp, values: Record<string, any>) => {
  const { key, typeProps = {}, slots, option = [] } = col

  return (
    <ASelect v-model={values[key]} title={values[key]} v-slots={slots} {...Object.assign(defaultProps, typeProps)}>
      {option?.map(item => (
        <AOption {...item}>{item.title}</AOption>
      ))}
    </ASelect>
  )
}
