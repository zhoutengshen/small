<template>
  <ul class="nav-list">
    <li class="nav-item" v-for="navConfig in navConfigs" :key="navConfig.name">
      <router-link :to="navConfig.path" active-class="active-nav" class="nav-link">
        <i :class="[navConfig.icon,'nav-icon']">
          <i class="badge" v-if="navConfig.hasBadge">{{cartsLength}}</i>
        </i>
        <span class="title">{{navConfig.title}}</span>
      </router-link>
    </li>
  </ul>
</template>
<script>
import { mapGetters } from "vuex";
const navConfigs = [
  {
    title: "首页",
    path: "/home",
    name: "home",
    icon: "iconfont icon-pocket"
  },
  {
    title: "购物车",
    path: "/cart",
    name: "cart",
    icon: "iconfont icon-car",
    hasBadge: true
  },
  {
    title: "订单",
    path: "/orders",
    name: "orders",
    icon: "iconfont icon-order"
  },
  {
    title: "我的",
    path: "/account",
    name: "account",
    icon: "iconfont icon-account"
  }
];
export default {
  data() {
    return {
      navConfigs: [...navConfigs]
    };
  },
  computed: {
    ...mapGetters(["cartsLength"])
  }
};
</script>
<style lang="less" scoped>
.nav-list {
  box-sizing: border-box;
  display: flex;
  height: 5rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: @defaultBgColor;

  li {
    flex: 1;
  }

  .nav-link {
    display: flex;

    flex-direction: column;
    text-decoration: none;
    align-items: center;
    color: #666;

    .nav-icon {
      position: relative;
      font-size: 1.8rem;
      margin-bottom: 0.2rem;
      padding: 0.4rem;
      .badge {
        position: absolute;
        top: -0.5rem;
        right: -1.5rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 50%;
        padding: 0.2rem;
        display: inline-block;
        width: 1.7rem;
        height: 1.7rem;
        background: #e65353;
        font-size: 1.1rem;
        text-align: center;
        color: #fff;
      }
    }

    .title {
      font-size: 1.3rem;
    }
  }
}
</style>
<style>
.active-nav > .nav-icon {
  background: tomato;
  border-radius: 50%;
  color: #fff;
}
.active-nav > .title {
  color: red;
}
</style>
