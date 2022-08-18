<template>
  <ALayoutSider :theme="layoutStore.theme">
    <div class="logo-wrapper">
      <div class="logo" />
    </div>
    <AMenu v-model:selectedKeys="selectedKeys" :theme="layoutStore.theme" mode="inline">
      <AMenuItem v-for="item in systemStore.menuList" :key="item._id">
        <ShinpIcon :icon="item.icon" />
        <span>{{ item.title }}</span>
      </AMenuItem>
    </AMenu>
  </ALayoutSider>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useLayoutStore, useSystemStore } from '@/store'
import ShinpIcon from '@/components/ShinpIcon'
import { useRouter, useRoute } from 'vue-router'

const layoutStore = useLayoutStore()
const systemStore = useSystemStore()
const router = useRouter()
const route = useRoute()

const selectedKeys = ref<string[]>([])

watch(
  () => systemStore.activeMenu,
  val => val && setActive(val)
)

watch(selectedKeys, val => {
  const currentMenu = systemStore.menuList?.find(item => item._id === val[0])
  currentMenu?.path && router.push(currentMenu.path)
})

watch(
  () => route.path,
  val => {
    const currentMenu = getMenu('path', val)
    currentMenu && setActive(currentMenu._id)
  }
)

function getMenu(key: string, value) {
  return systemStore.menuList?.find(item => item[key] === value)
}

function setActive(val) {
  selectedKeys.value = [val]
}
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
