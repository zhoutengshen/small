<template>
  <div class="bar-wraper">
    <div class="price">
      应付金额：
      <span>￥{{price}}</span>
    </div>
    <div class="btn">立即支付</div>
  </div>
</template>
<script>
export default {
  props: {
    price: {
      required: true,
      type: Number
    }
  }
};
</script>
<style lang="less" scoped>
.bar-wraper {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  height: 5rem;
  padding: 0 1.6rem;
  box-sizing: border-box;
  background: @bgColor;
  width: 100%;
  font-size: 1.5rem;
  .price {
    color: #666;
    height: 5rem;
    line-height: 5rem;
    span {
      color: red;
      font-size: 1.6rem;
    }
  }
  .btn {
    height: 3.5rem;
    line-height: 3.5rem;
    background: rgb(243, 72, 72);
    padding: 0 1.6rem;
    border-radius: 3rem;
    color: #eee;
    font-weight: 600;
    font-size: 1.6rem;
  }
}
</style>
