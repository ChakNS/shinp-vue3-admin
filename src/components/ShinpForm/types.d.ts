import { RowProps, ColProps, FormProps, FormItemProps, SelectOption } from 'ant-design-vue'
import { VNode } from 'vue'

declare global {
  namespace ShinpForm {
    // 表单配置
    type FormConfig = Array<{
      title: string
      fold?: boolean
      children: Array<{
        id?: string
        span?: number
        row: number
        defaultValue?: unknown
        key: string
        type: string
        colProps?: ColProps
        typeProps?: Record<string, unknown>
        formItemProps?: FormItemProps
        slots?: Record<string, () => VNode>
        render?: (col: ColProp, values: Record<string, any>) => VNode
        option?: Array<SelectOption>
      }>
      formProps?: FormProps
      rowProps?: RowProps
    }>
    // 组件
    interface ColProp {
      id?: string
      key: string
      type: string
      span?: number
      typeProps?: Record<string, unknown>
      colProps?: ColProps
      formItemProps?: FormItemProps
      slots?: Record<string, () => VNode>
      render?: (col: ColProp, values: Record<string, any>) => VNode
      option?: Array<SelectOption>
    }
  }
}
