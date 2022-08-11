<template>
  <ALayoutHeader>
    <ASwitch v-model:checked="isDark" />
  </ALayoutHeader>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/store'
import { watch, ref } from 'vue'

const store = useLayoutStore()

const isDark = ref(true)
watch(isDark, val => store.setTheme(val ? 'dark' : 'light'))
</script>
