import { uuid4 } from '@/utils/tools'
import { RowProps, ColProps } from 'ant-design-vue'

// 重组配置
export function buildConfig(c: ShinpForm.FormConfig) {
  try {
    return c.map(column => {
      const rows: Array<{ cols: Array<ShinpForm.ColProp> }> = []
      column.children.forEach(item => {
        item.id = uuid4()
        if (rows[item.row]) {
          rows[item.row].cols.push(item)
        } else {
          rows[item.row] = { cols: [item] }
        }
      })
      return {
        ...column,
        rows: rows.filter(item => item).map(item => ({ ...item, id: uuid4() })),
        id: uuid4(),
      }
    })
  } catch (error) {
    console.log(error)
    return []
  }
}

// 提取表单值
export function buildValues(c: ShinpForm.FormConfig) {
  try {
    const values: Record<string, any> = {}
    const singleKey = ['formInput', 'formDate', 'formRadio', 'formSelect', 'formInputClick', 'formCascader', 'formAutograph']

    c.forEach(column => {
      column.children.forEach(item => {
        const { type, key, defaultValue } = item
        if (singleKey.includes(type)) {
          values[key] = typeof defaultValue !== 'undefined' ? defaultValue : ''
        }
      })
    })
    return values
  } catch (error) {
    console.log(error)
    return {}
  }
}

// 合并参数
const defaultRowProps = {
  gutter: 20,
}
const defaultColProps = {
  span: 4,
}
export const buildRowProps = (p: RowProps) => Object.assign(defaultRowProps, p)
export const buildColProps = (p: ColProps) => Object.assign(defaultColProps, p)
