<template>
  <div class="cart-wraper">
    <TopBar />
    <List :prods="carts" />
    <div class="block-9rem"></div>
  </div>
</template>
<script>
import { BottomBar, List, TopBar } from "@/components/cart";
import { mapGetters } from "vuex";
export default {
  components: {
    BottomBar,
    List,
    TopBar
  },
  computed: {
    ...mapGetters(["carts"])
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.cart-wraper {
  padding: 1.6rem;
  min-height: calc(100vh - 5rem);
  .block-9rem {
    height: 9rem;
    display: block;
  }
}
</style>
