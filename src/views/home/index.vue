<template>
  <div class="home-wraper">
    <SearchBar class="searchBar" />
    <!-- v-if 控制 swiper的构建时机-->
    <SmallSwiper :imgUrls="imgUrls" v-if="imgUrls.length" />
    <ToolBar class="tool-bar" />
    <ProductList :prods="prods" @click-item="clickItemHandle" @add-to-cart="addToCartHandle" />
  </div>
</template>
<script>
const bananers = [
  {
    url: require("./mock/imgs/bananers1.jpg"),
    alt: "图片1"
  },
  {
    url: require("./mock/imgs/bananers2.jpg"),
    alt: "图片2"
  },
  {
    url: require("./mock/imgs/bananers3.png"),
    alt: "图片3"
  },
  {
    url: require("./mock/imgs/bananers4.png"),
    alt: "图片4"
  }
];
import SmallSwiper from "@/components/Swiper";
import SearchBar from "@/components/SearchBar";
import ToolBar from "@/components/home/ToolBar";
import ProductList from "@/components/home/Product";
import { fetchUserAddressAction } from "@/stores/user";
import { addCartAction } from "@/views/cart/store";
import prods from "./mock/prods.json";
export default {
  components: {
    SmallSwiper,
    SearchBar,
    ToolBar,
    ProductList
  },
  data() {
    return {
      imgUrls: [],
      prods: [...prods]
    };
  },
  methods: {
    addToCartHandle(item) {
      const cart = {
        prodId: item.productId,
        img: item.showPic,
        selected: "默认",
        price: item.salePrice,
        productName: item.productName
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
    clickItemHandle(prod) {
      const { productId } = prod;
      this.$router.push({
        path: `pro-detail/${productId}`
      });
    }
  },
  mounted() {
    //获取用户地址信息
    this.$store.dispatch(fetchUserAddressAction());
    //模拟异步数据
    setTimeout(() => {
      this.imgUrls = [...bananers];
    }, 1000);
  }
};
</script>
<style lang="less" scoped>
// 搜索条吸顶
.searchBar {
  position: sticky;
  top: 0;
  z-index: 2;
}
.tool-bar {
  position: relative;
  top: -1.5rem;
  margin: 0 2.4rem;
  border-radius: 1rem;
  box-shadow: @boxShadows1;
  overflow: hidden;
  z-index: 1;
}
.home-wraper {
  -webkit-overflow-scrolling: touch;
}
</style>


