<template>
  <div class="purchase-wraper">
    <div class="block-5rem" />
    <Address :addresses="addresses" />
    <div class="stripe" />
    <Info v-for="(orders,index) in _nonPaymentOrders" :info="orders" :key="index" />
    <div class="bar-wraper">
      <div class="price">
        应付金额：
        <span>￥{{toltalPrice}}</span>
      </div>
      <div class="btn">立即支付</div>
    </div>
    <div class="block-5rem" />
  </div>
</template>
<script>
import { Address, Info } from "@/components/purchase";
import { mapGetters } from "vuex";

export default {
  components: {
    Address,
    Info
  },
  computed: {
    ...mapGetters(["addresses", "nonPaymentOrders"]),
    _nonPaymentOrders() {
      let orderIds = this.$route.query.orderIds;
      if (!orderIds) {
        return [];
      }
      orderIds = orderIds.split(",");
      //在所有预订单中找出需要支付的订单
      const result = this.nonPaymentOrders.filter(item => {
        this.toltalPrice += item.count * item.salePrice;
        return orderIds.includes(item.orderId);
      });
      return result;
    }
  },
  data() {
    return {
      toltalPrice: 0
    };
  },
  methods: {
    addToCarHandle() {}
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.purchase-wraper {
  .block-5rem {
    height: 4rem;
  }
  .stripe {
    background: linear-gradient(
      45deg,
      greenyellow 25%,
      #58a 0,
      #58a 50%,
      greenyellow 0,
      greenyellow 75%,
      #58a 0
    );
    height: 2px;
    background-size: 42px 42px;
  }
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
}
</style>
