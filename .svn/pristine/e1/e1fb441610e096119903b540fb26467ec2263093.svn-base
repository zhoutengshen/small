<template>
  <div class="car-bar-wraper">
    <span class="iconfont icon-car" @click="navTocartPage"></span>
    <span class="add-to-car" @click="addToCart">加入购物车</span>
    <span class="buy-at-once" @click="navToPurchasePage">立即购买</span>
  </div>
</template>
<script>
export default {
  methods: {
    navTocartPage() {
      this.$router.push({
        name: `cart`
      });
    },
    addToCart() {
      this.$emit("add-to-cart");
    },
    navToPurchasePage() {
      this.$emit("buy");
    }
  }
};
</script>
<style lang="less" scoped>
.car-bar-wraper {
  position: fixed;
  display: flex;
  bottom: 0;
  height: 5rem;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background: @bgColor;
  span {
    flex: 3;
    text-align: center;
    font-size: 1.8rem;
    height: 5rem;
    line-height: 5rem;
  }
  .icon-car {
    flex: 2;
    font-size: 3.5rem;
    color: red;
    font-weight: 500;
    border-right: 1px solid #ddd;
  }
  .buy-at-once {
    color: #fff;
    background: red;
  }
}
</style>
