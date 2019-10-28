<template>
  <div class="info-wraper">
    <div class="info">
      <img :src="info.img" class="img" />
      <div class="desc">
        <p class="productName">{{info.productName}}</p>
        <span class="specification">已选：{{info.specification}}</span>
        <p class="price">
          <span>
            <i class="iconfont icon-xiaoshou"></i>
            <em class="salePrice">售价：￥{{info.salePrice}}</em>
          </span>
          <span>
            <i class="iconfont icon-youhui-zhekou"></i>
            <em class="settlementPrice">折扣价：￥{{info.settlementPrice}}</em>
          </span>
        </p>
      </div>
      <span class="count">{{info.count}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      taoltalPrice: 0
    };
  },
  watch: {}
};
</script>
<style lang="less" scoped>
.info {
  display: flex;
  flex-direction: row;
  padding: 0.8rem;
  background: @defaultBgColor;
  border-bottom: 1px solid #999;
  .img {
    width: 10rem;
    height: 10rem;
  }
  .desc {
    flex: 1;
    display: flex;
    margin-left: 0.8rem;
    justify-content: space-between;
    flex-direction: column;
    .productName {
      font-size: 1.3rem;
      color: #333;
      line-height: 1.3;
    }
    .specification {
      color: #999;
      font-size: 1.4rem;
      line-height: 1.5;
    }
    .price {
      display: flex;
      flex-direction: row;
      align-items: center;
      line-height: 1.5;
      color: red;
      span + span {
        margin-left: 0.8rem;
      }
      .icon-xiaoshou,
      .icon-youhui-zhekou {
        color: #999;
        margin-right: 0.4rem;
      }
      .settlementPrice,
      .salePrice {
        font-size: 1.2rem;
      }
    }
  }
  .count {
    text-align: center;
    width: 2rem;
    font-size: 1.4rem;
    color: green;
  }
}
</style>
