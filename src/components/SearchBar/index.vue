<template>
  <div class="search-bar-wraper">
    <div class="input-wraper">
      <slot name="preIcon">
        <i class="iconfont icon-search pre-icon"></i>
      </slot>
      <input
        type="text"
        :placeholder="placeHolder"
        @blur="inputBlueHandle"
        @focus="inputFocusHandle"
      />
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { mutationsCreator } from "@/stores/style";
export default {
  props: {
    placeHolder: {
      default: "请输入"
    }
  },
  methods: {
    inputBlueHandle() {
      this.$store.commit(mutationsCreator.showNavBarMutation());
    },
    inputFocusHandle() {
      this.$store.commit(mutationsCreator.hiddenNavBarMutation());
    }
  }
};
</script>
<style lang="less" scoped>
.search-bar-wraper {
  display: flex;
  height: 4rem;
  align-items: center;
  background: @defaultBgColor;
  .input-wraper {
    position: relative;
    flex: 1;
    margin: 0 1.6rem;
    border-radius: 2rem;
    padding: 0.4rem 0;
    background: @bgColor;
    .pre-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 0.8rem;
      color: #666;
    }
    input {
      background: transparent;
      border: none;
      outline: none;
      line-height: 1.5;
      padding: 0 3rem;
      width: calc(100vw - 10rem);
    }
  }
}
</style>
