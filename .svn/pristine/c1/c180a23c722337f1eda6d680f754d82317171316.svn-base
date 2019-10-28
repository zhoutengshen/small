<template>
  <div class="detail-wraper">
    <div class="pro-item">
      <img class="img" :src="prod.showPic" />
      <span class="tags"></span>
      <p class="disc">{{prod.productName}}</p>
      <p class="price">
        <i class="symble">￥</i>
        <em class="sale-price">{{prod.salePrice}}</em>
        <span class="market-price">{{prod.marketPrice}}</span>
      </p>
    </div>
    <div class="fav">
      <span class="title">优惠</span>
      <span class="tag">满减</span>
      <span class="disc">满300减50</span>
    </div>
    <div class="select" @click="onSelect">
      <span>已选</span>
      <span></span>
      <i class="iconfont icon-zhankai"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    prod: {
      type: Object,
      required: true
    }
  },
  methods: {
    onSelect() {
      this.$emit("select");
    }
  }
};
</script>
<style lang="less" scoped>
.detail-wraper {
  .pro-item {
    width: 100%;
    box-sizing: border-box;
    padding: 0.8rem;
    overflow: hidden;
    background: @defaultBgColor;
    border-radius: 0.5rem;
    .img {
      width: 35rem;
    }
    .disc {
      font-size: 1.8rem;
      line-height: 1.5;
      color: #333;
      margin-bottom: 0.4rem;
    }
    .price {
      line-height: 1.5;
      .symble,
      .sale-price {
        font-size: 1.8rem;
        color: red;
      }
      .market-price {
        font-size: 1.5rem;
        color: #999;
        text-decoration: line-through;
        margin-left: 0.8rem;
      }
    }
  }
  .fav {
    height: 4rem;
    display: flex;
    margin-top: 0.8rem;
    background: @defaultBgColor;
    flex-direction: row;
    padding: 0 1.6rem;
    align-items: center;
    line-height: 1.5;
    font-size: 1.4rem;
    .title {
      margin-right: 1.6rem;
    }
    .tag {
      margin-right: 1.6rem;
      border: 1px solid #999;
      padding: 0 0.4rem;
      color: red;
      border-radius: 0.4rem;
    }
  }
  .select {
    margin-top: 0.8rem;
    height: 4rem;
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.4rem;
    padding: 0 1.6rem;
    background: @defaultBgColor;

    .icon-zhankai {
      color: #333;
    }
  }
}
</style>
