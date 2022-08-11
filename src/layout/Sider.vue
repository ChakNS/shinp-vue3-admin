<template>
  <ALayoutSider :theme="store.theme">
    <div class="logo-wrapper">
      <div class="logo" />
    </div>
    <AMenu v-model:selectedKeys="selectedKeys" :theme="store.theme" mode="inline">
      <AMenuItem v-for="item in 4" :key="item">
        <UserOutlined />
        <span>nav {{ item }}</span>
      </AMenuItem>
    </AMenu>
  </ALayoutSider>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/store'
import { UserOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'

const store = useLayoutStore()

const selectedKeys = ref<number[]>([4])
</script>

<style lang="less" scoped>
@import './style.less';
.logo-wrapper {
  position: fixed;
  width: @sider-width;
  top: 0;
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>
