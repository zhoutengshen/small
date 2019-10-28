<template>
  <div class="list-wraper">
    <div class="item-wraper" v-for="item in prods" :key="item.id">
      <CheckBox class="check-box" v-model="checkList" :label="item" @change="changeHandle" />
      <img class="img" :src="item.img" />
      <div class="info">
        <p class="prodName">{{item.productName}}</p>
        <span class="selected">已选：{{item.selected}}</span>
        <div class="price">
          <span>￥{{item.price}}</span>
          <Counter v-model="item.count" :min="1" />
        </div>
      </div>
    </div>
    <div class="bar">
      <CheckBox v-model="checkAll" label="全选" :showLabel="true" />
      <p class="heji">
        合计:
        <span>￥{{_totalPrice}}</span>
      </p>
      <button @click="goToPurchase">结算</button>
    </div>
  </div>
</template>
<script>
import CheckBox from "@/base-ui/CheckBox";
import Counter from "@/base-ui/Counter";
import { addNonPaymentOrderAction } from "@/views/orders/store";
export default {
  components: {
    CheckBox,
    Counter
  },
  props: {
    prods: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      checkList: [],
      checkAll: [],
      totalPrice: 0
    };
  },
  methods: {
    goToPurchase() {
      const prods = this.checkList.map(item => {
        return {
          img: item.img,
          productName: item.productName,
          specification: item.selected,
          settlementPrice: item.salePrice,
          salePrice: item.price,
          count: item.count
        };
      });
      this.$store
        .dispatch(addNonPaymentOrderAction(prods))
        .then(({ orderId }) => {
          //这里说明已经产生了预订单
          //移除购物车里面的东西
          this.$router.push({
            name: `purchase`,
            query: {
              orderIds: orderId
            }
          });
        });
    },
    changeHandle(value) {
      if (this.checkList.length === this.prods.length) {
        this.checkAll = ["全选"];
      } else {
        this.checkAll = [];
      }
    }
  },
  computed: {
    _totalPrice() {
      let totalPrice = 0;
      this.checkList.forEach(item => {
        totalPrice += item.price * item.count;
      });
      return totalPrice;
    }
  },
  watch: {
    checkAll(val) {
      if (val[0] === "全选") {
        console.log(this.checkList);
        this.checkList = [...this.prods];
      }
    }
  }
};
</script>
<style lang="less" scoped>
.list-wraper {
  .item-wraper {
    display: flex;
    flex-direction: row;
    background: @defaultBgColor;
    border-radius: 0.5rem;
    margin-top: 0.8rem;
    padding: 0.8rem;
    .check-box {
      display: flex;
      align-items: center;
      margin-right: 0.4rem;
    }
    .img {
      width: 8rem;
      height: 8rem;
      border-radius: 0.5rem;
    }
    .info {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 0.8rem;
      .prodName {
        line-height: 1.5;
        font-size: 1.3rem;
        max-height: 4rem;
        overflow: hidden;
        word-break: break-all;
      }
      .selected {
        line-height: 1.5;
        font-size: 1.2rem;
        color: #999;
      }
      .price {
        display: flex;
        justify-content: space-between;
        font-size: 1.4rem;
        line-height: 1.5;
        color: #666;
      }
    }
  }
  .bar {
    position: fixed;
    bottom: 5rem;
    padding: 0 1.6rem;
    left: 0;
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
    background: @defaultBgColor;
    border-bottom: 1px solid #eee;
    .heji {
      color: #333;
      font-size: 1.8rem;
      font-weight: 600;
      span {
        color: red;
      }
    }
    button {
      border: none;
      outline: none;
      height: 3.5rem;
      color: #fff;
      border-radius: 2rem;
      line-height: 3.5rem;
      background: rgb(240, 60, 60);
      padding: 0 2.4rem;
      font-size: 1.4rem;
    }
  }
}
</style>
