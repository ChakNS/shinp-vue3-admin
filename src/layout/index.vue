<template>
  <div class="layout-wrapper">
    <ALayout has-sider>
      <Sider />
      <ALayout>
        <Header />
        <div class="fixed-bar" />
        <Content>
          <RouterView />
        </Content>
        <Footer />
      </ALayout>
    </ALayout>
  </div>
</template>

<script setup lang="ts">
import Sider from './Sider.vue'
import Header from './Header.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'
</script>

<style scoped lang="less">
@import './style.less';
.fixed-bar {
  background: #f0f2f5;
  padding: 0;
  position: fixed;
  width: calc(100% - @sider-width);
  height: 24px;
  top: @header-height;
}
</style>
