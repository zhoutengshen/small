// 简单复选框实现
//TODO: 简单实现
<template>
  <div class="wraper">
    <input ref="checkBox" class="input" type="checkbox" :id="'check_box'+ _uid" @change="onChange" />
    <label :for="'check_box'+ _uid" class="label" :style="_style"></label>
    <span class="msg" v-if="showLabel">{{label}}</span>
  </div>
</template>
<script>
export default {
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    label: {
      required: true
    },
    value: {
      type: Array,
      default: true
    },
    size: {
      type: String,
      required: false,
      default: "16px"
    },
    color: {
      type: String,
      required: false,
      default: "red"
    },
    showLabel: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onChange(event) {
      const isCkeck = event.target.checked;
      let newArr = [...this.value];
      if (isCkeck) {
        newArr.push(this.label);
        newArr = Array.from(new Set(newArr));
      } else {
        const index = newArr.findIndex(item => item === this.label);
        newArr.splice(index, 1);
      }
      this.$emit("change", newArr);
    }
  },
  computed: {
    _style() {
      return {
        width: this.size,
        height: this.size
      };
    }
  },
  watch: {
    value(value) {
      const ic = value.includes(this.label);
      this.$refs.checkBox.checked = ic;
    }
  }
};
</script>
<style lang="less" scoped>
.input {
  display: none;
}
.input:checked + .label::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: #999;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0.8);
}
.label {
  position: relative;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid red;
}
.wraper {
  display: flex;
  align-items: center;
}
.msg {
  margin-left: 0.5rem;
  font-size: 1.4rem;
  color: #666;
}
</style>
