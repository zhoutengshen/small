<template>
  <ul class="top-bar-wraper">
    <li v-for="item in tips">
      <i class="icon">
        {{item.icon}}
        <em class="ban" v-if="item.ban" />
      </i>
      <span class="desc">{{item.desc}}</span>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    tips: {
      type: Array,
      default() {
        return [
          {
            icon: "48",
            desc: "48小时发货"
          },
          {
            icon: "免",
            desc: "所有物品免邮"
          },
          {
            icon: "假",
            desc: "节假日不发货",
            ban: true
          }
        ];
      }
    }
  }
};
</script>
<style lang="less" scoped>
.top-bar-wraper {
  display: flex;
  align-items: center;
  height: 4rem;
  border-radius: 2rem;
  justify-content: space-between;
  padding: 0 2rem;
  background: @defaultBgColor;
  color: #888;
  font-size: 1.3rem;
  .icon {
    position: relative;
    display: inline-block;
    border-radius: 50%;
    border: 1px solid red;
    font-size: 1rem;
    padding: 0.2rem;
  }
  .desc {
    margin-left: 0.4rem;
    vertical-align: middle;
  }
  .ban {
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    height: 1px;
    width: 100%;
    background: red;
    transform: translate(-50%, -50%) rotate(45deg);
  }
}
</style>
