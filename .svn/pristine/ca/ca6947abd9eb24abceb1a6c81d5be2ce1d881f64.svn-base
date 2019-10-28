<template>
  <div class="product-detail-wraper">
    <div class="block-5rem" />
    <ProductInfo :prod="prod" class="prod-info" @select="selectHandle" />
    <ProductDesc />
    <CartBar @add-to-cart="addToCartHandle" @buy="buyHandle" />
    <Popup v-model="showProdSelect" class="popup">
      <ProductSelect @select="prodSelecthandle" />
    </Popup>
    <div class="block-5rem" />
  </div>
</template>
<script>
import prods from "./mock/prods.json";
import {
  ProductInfo,
  ProductDesc,
  ProductSelect,
  CartBar
} from "@/components/ProductDetail";
import { addCartAction } from "@/views/cart/store";
import { addNonPaymentOrderAction } from "@/views/orders/store";
import { Popup } from "vue-ydui/dist/lib.rem/popup";
export default {
  components: {
    ProductInfo,
    ProductDesc,
    ProductSelect,
    CartBar,
    Popup
  },
  data() {
    return {
      prod: {},
      showProdSelect: false,
      count: 0
    };
  },

  methods: {
    buyHandle() {
      const { params } = this.$route;
      let prod = {
        img: this.prod.showPic,
        productName: this.prod.productName,
        specification: "默认",
        settlementPrice: this.prod.marketPrice,
        salePrice: this.prod.salePrice,
        count: this.prod.count
      };
      //
      //生成预订单成功后跳转到支付页面
      this.$store
        .dispatch(addNonPaymentOrderAction(prod))
        .then(({ orderId }) => {
          this.$router.push({
            name: `purchase`,
            query: {
              orderIds: orderId
            }
          });
        });
    },
    addToCartHandle() {
      const cart = {
        prodId: this.prod.productId,
        img: this.prod.showPic,
        selected: "默认",
        price: this.prod.salePrice
      };
      this.$store
        .dispatch(addCartAction(cart))
        .then(msg => {
          this.$dialog.toast({
            mes: msg,
            timeout: 800
          });
        })
        .catch(msg => {
          this.$dialog.toast({
            mes: msg,
            timeout: 800
          });
        });
    },
    closeHandle() {
      this.showProdSelect = false;
    },
    selectHandle() {
      this.showProdSelect = true;
    },
    prodSelecthandle({ count }) {
      this.showProdSelect = false;
      this.count = count;
    }
  },
  mounted() {
    const { id } = this.$route.params;
    const prod = prods.find(item => item.productId == id);
    this.prod = prod;
  }
};
</script>
<style lang="less" scoped>
.product-detail-wraper {
  .popup {
    /deep/ .yd-popup {
      border-radius: 2rem 2rem 0 0;
      overflow: hidden;
    }
  }
  .block-5rem {
    height: 4rem;
  }
  .prod-info {
    margin: 0.8rem 0;
  }
}
</style>
