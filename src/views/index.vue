<template>
  <h5>{{ nameStore.name }}</h5>
  <AButton>测试</AButton>
</template>

<script setup>
import { ref } from 'vue'
import { useNameStore } from '@/store'
// import 'ant-design-vue/es/button/style/css'

const nameStore = useNameStore()

const name = ref('chak')
</script>