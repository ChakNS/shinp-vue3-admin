<template>
  <div v-for="column in formConfig" :key="column.id" class="form-group">
    <div class="title">
      <div class="text">{{ column.title }}</div>
      <div v-if="typeof column.fold !== 'undefined'" class="unfold" @click="column.fold = !column.fold">
        <span class="fold-text">{{ foldText(column.fold) }}</span>
        <component :is="column.fold ? FolderOutlined : FolderOpenOutlined" />
      </div>
    </div>
    <div class="content" :style="contentStyle(column.fold)">
      <AForm v-bind="column.formProps">
        <ARow v-for="row in column.rows" :key="row.id" v-bind="buildRowProps(column.rowProps)">
          <ACol v-for="col in row.cols" :key="col.id" v-bind="buildColProps(col.colProps)">
            <AFormItem v-bind="col.formItemProps">
              <FormComponent :col="col" :values="formValues" />
            </AFormItem>
          </ACol>
        </ARow>
      </AForm>
    </div>
  </div>
</template>

<script setup>
import FormComponent from './component'
import { reactive } from 'vue'
import { FolderOutlined, FolderOpenOutlined } from '@ant-design/icons-vue'
import { buildConfig, buildValues, buildRowProps, buildColProps } from './tools'

defineOptions({ name: 'ShinpForm' })
const props = defineProps({
  config: {
    type: Array,
    default: () => [],
  },
  values: {
    type: Object,
    default: () => null,
  },
})

const formValues = props.values || buildValues(props.config)
const formConfig = reactive(buildConfig(props.config))

const FoldEnum = {
  FOLD: '收起',
  UNFOLD: '展开',
}
function contentStyle(val) {
  return val ? { height: 0, overflow: 'hidden', padding: '0 16px', marginBottom: '16px' } : {}
}
function foldText(val) {
  return val ? FoldEnum.UNFOLD : FoldEnum.FOLD
}
</script>

<style lang="less" scoped>
.title {
  height: 30px;
  padding: 0 16px 0 8px;
  line-height: 32px;
  font-size: 14px;
  font-weight: bold;
  color: #102058;
  background-color: #f1f8fe;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::before {
    position: absolute;
    content: '';
    top: 7px;
    display: inline-block;
    width: 3px;
    height: 16px;
    margin-right: 8px;
    background: #3d5bc4;
  }

  .text {
    padding: 0 8px;
  }

  .unfold {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    color: #333;
    &:hover {
      color: rgba(51, 51, 51, 0.598);
    }
    .fold-text {
      font-size: 12px;
      margin-right: 5px;
      user-select: none;
    }
  }
}
.content {
  padding: 16px;
  transition: all 0.1s;
}
</style>
