<template>
  <div class="prod-list-wraper">
    <div class="pro-item" v-for="item in prods" @click="clickItemHandle(item)">
      <img class="img" :src="item.showPic" />
      <span class="tags"></span>
      <p class="disc">{{item.productName}}</p>
      <p class="price">
        <span>
          <i class="symble">￥</i>
          <em class="sale-price">{{item.salePrice}}</em>
          <span class="market-price">{{item.marketPrice}}</span>
        </span>
        <i class="iconfont icon-car" @click.prevent.stop="addCartHandle(item)"></i>
      </p>
    </div>
  </div>
</template>
<script>
import lodash from "lodash";
export default {
  props: {
    prods: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      list: [...this.prods]
    };
  },
  methods: {
    addCartHandle(item) {
      this.$emit("add-to-cart", item);
    },
    clickItemHandle(item) {
      this.$emit("click-item", item);
    },
    scrolling(event) {
      const clientHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      //滚动方向判断
      //触底判断
      if (Math.abs(scrollHeight - clientHeight - scrollTop) <= 50) {
        console.log("触底了");
        this.$emit("load");
      }
    }
  },
  mounted() {
    this.func = lodash.debounce(this.scrolling, 300);
    window.addEventListener("scroll", this.func);
  },
  destroyed() {
    window.removeEventListener("scroll", this.func);
  }
};
</script>
<style lang="less" scoped>
.prod-list-wraper {
  display: flex;
  flex-wrap: wrap;
  .pro-item {
    width: 48%;
    box-sizing: border-box;
    padding: 0.8rem;
    height: 24rem;
    margin: 1%;
    overflow: hidden;
    background: #fff;
    border-radius: 0.5rem;
    .img {
      width: 100%;
      height: 44vw;
    }
    .disc {
      font-size: 1.2rem;
      line-height: 1.5;
      color: #333;
      height: 3.6rem;
      overflow: hidden;
      margin-bottom: 0.4rem;
    }
    .price {
      line-height: 1.5;
      display: flex;
      justify-content: space-between;
      .symble,
      .sale-price {
        font-size: 1.4rem;
        color: red;
      }
      .market-price {
        font-size: 1.3rem;
        color: #999;
        text-decoration: line-through;
        margin-left: 0.8rem;
      }
      .icon-car {
        display: inline-block;
        box-sizing: border-box;
        font-size: 2rem;
        color: red;
        margin: 0 1.6rem;
      }
    }
  }
}
</style>
