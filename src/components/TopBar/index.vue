<template>
  <div class="top-bar-wraper">
    <div class="left" @click="$router.go(-1)">
      <slot name="left">
        <i class="iconfont icon-back"></i>
      </slot>
    </div>
    <slot name="mid">
      <div></div>
    </slot>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.top-bar-wraper {
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: @defaultBgColor;
  padding: 0 0.8rem;
  .icon-back {
    font-size: 2.2rem;
  }
}
</style>
