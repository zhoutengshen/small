//TODO: 计数器
//不要支持输入，键盘弹起在移动端会造成很多不必要的麻烦
<template>
  <div class="wraper">
    <i @click="reduce" :class="['iconfont icon-icon_roundreduce',_reduceDisable&&'disable']" />
    <span class="count">{{value}}</span>
    <i @click="add" :class="['iconfont icon-plus',_addDisable&&'disable']" />
  </div>
</template>
<script>
export default {
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: Number,
      required: true
    },
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: Number.MAX_VALUE
    },
    min: {
      type: Number,
      default: 0
    }
  },
  computed: {
    _addDisable() {
      return this.value == this.max;
    },
    _reduceDisable() {
      return this.value == this.min;
    }
  },
  methods: {
    add() {
      let result = this.value + this.step;
      if (result >= this.max) {
        result = this.max;
      }
      this.$emit("change", result);
    },
    reduce() {
      let result = this.value - this.step;
      if (result <= this.min) {
        result = this.min;
      }
      this.$emit("change", result);
    }
  }
};
</script>
<style lang="less" scoped>
.wraper {
  display: flex;
  align-items: center;
  width: 8rem;
  justify-content: space-between;
  color: #999;
  .iconfont {
    font-size: 1.8rem;
    color: #666;
  }
  .count {
    padding: 0 1rem;
    background: #eee;
    margin: 0 0.5rem;
    border-radius: 1rem;
    line-height: 1.8rem;
    height: 1.8rem;
  }
  .disable {
    color: #bbb;
  }
}
</style>
