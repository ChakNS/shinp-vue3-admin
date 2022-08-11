<template>
  <div class="layout-wrapper">
    <ALayout has-sider>
      <ALayoutSider :theme="theme">
        <div class="logo-wrapper">
          <div class="logo" />
        </div>
        <AMenu v-model:selectedKeys="selectedKeys" :theme="theme" mode="inline">
          <AMenuItem v-for="item in 4" :key="item">
            <UserOutlined />
            <span>nav {{ item }}</span>
          </AMenuItem>
        </AMenu>
      </ALayoutSider>
      <ALayout>
        <ALayoutHeader><ASwitch v-model:checked="isDark" /></ALayoutHeader>
        <div class="fixed-bar" />
        <ALayoutContent>
          <div class="content">
            <slot />
          </div>
        </ALayoutContent>
        <ALayoutFooter>Ant Design ©2018 Created by Ant UED</ALayoutFooter>
      </ALayout>
    </ALayout>
  </div>
</template>

<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue'
import { computed, ref } from 'vue'

const selectedKeys = ref<number[]>([4])
const isDark = ref(true)
const theme = computed(() => (isDark.value ? 'dark' : 'light'))
</script>

<style scoped lang="less">
@menu-bg-dark: #001529;
@menu-bg-light: #fff;
@menu-text-color-dark: rgba(255, 255, 255, 0.65);
@menu-text-color-light: rgba(0, 0, 0, 0.85);
@header-height: 64px;
@footer-height: 64px;
@sider-width: 200px;
.layout-wrapper {
  :deep(.ant-layout-has-sider) {
    min-height: 100vh;
    .ant-layout {
      margin-left: @sider-width;
    }
  }
  :deep(.ant-layout-sider) {
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    flex: 0 0 @sider-width !important;
    max-width: @sider-width !important;
    min-width: @sider-width !important;
    width: @sider-width !important;
    margin-top: @header-height;
    &::-webkit-scrollbar {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      width: 10px;
      height: 10px;
    }
  }
  :deep(.ant-layout-sider-dark) {
    .logo-wrapper {
      background-color: @menu-bg-dark;
    }
  }
  :deep(.ant-layout-sider-light) {
    .logo-wrapper {
      background-color: @menu-bg-light;
    }
  }
  :deep(.ant-menu) {
    padding-bottom: 70px;
  }
  :deep(.ant-menu-dark) {
    background-color: @menu-bg-dark;
    .ant-menu-item {
      color: @menu-text-color-dark;
    }
  }
  :deep(.ant-menu-light) {
    background-color: @menu-bg-light;
    .ant-menu-item {
      color: @menu-text-color-light;
    }
  }
  :deep(.ant-layout-header) {
    background: #fff;
    padding: 0 16px;
    position: fixed;
    width: calc(100% - @sider-width);
  }
  :deep(.ant-layout-content) {
    margin: @header-height + 24px 16px 0px;
    overflow: initial;
  }
  :deep(.ant-layout-footer) {
    height: @footer-height;
    line-height: @footer-height;
    text-align: center;
    position: fixed;
    width: calc(100% - @sider-width);
    bottom: 0;
    padding: 0;
  }
  .fixed-bar {
    background: #f0f2f5;
    padding: 0;
    position: fixed;
    width: calc(100% - @sider-width);
    height: 24px;
    top: @header-height;
  }
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
  .content {
    padding: 24px;
    padding-bottom: @footer-height + 24px;
    background: #fff;
    text-align: center;
    height: 100%;
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #555;
      border-radius: 2em;
      background-clip: padding-box;
    }
  }
}
</style>
