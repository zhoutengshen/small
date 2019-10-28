<template>
  <div class="layout">
    <div class="top-bar" v-if="isNeedTopBar">
      <TopBar></TopBar>
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="nav-bar" v-if="isNeedNavBar">
      <transition name="nav">
        <NavBar v-show="visibleNavBar" />
      </transition>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
import TopBar from "@/components/TopBar";
import { mapGetters } from "vuex";
export default {
  components: {
    NavBar,
    TopBar
  },
  beforeRouteEnter(to, from, next) {
    const { meta } = to;
    next(vm => {
      vm.isNeedNavBar = meta.isNeedNavBar;
      vm.isNeedTopBar = meta.isNeedTopBar;
    });
  },
  data() {
    return {
      isNeedTopBar: false,
      isNeedNavBar: false
    };
  },
  computed: {
    ...mapGetters(["visibleNavBar"])
  },
  watch: {
    $route(route) {
      const { meta } = route;
      this.isNeedNavBar = meta.isNeedNavBar;
      this.isNeedTopBar = meta.isNeedTopBar;
    }
  }
};
</script>
<style lang="less" scoped>
@import "style.less";
</style>
<style>
.nav-enter-active {
  transition: transform 0.8s;
}
.nav-leave-active {
  transition: transform 0.2s;
}
.nav-enter,
.nav-leave-to {
  transform: translateY(5rem);
}
</style>
