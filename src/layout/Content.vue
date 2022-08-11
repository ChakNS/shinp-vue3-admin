<template>
  <ALayoutContent>
    <div class="content">
      <slot />
    </div>
  </ALayoutContent>
</template>

<style lang="less" scoped>
@import './style.less';
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
</style>
