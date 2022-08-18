<template>
  <RouterView />
</template>

<script setup lang="ts">
import { useSystemStore } from '@/store'

const systemStore = useSystemStore()
systemStore.initMenuList()
</script>
