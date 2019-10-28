<template>
  <div class="address-wraper" @click="onAddAddress">
    <i class="iconfont icon-dingwei"></i>
    <span class="disc" v-if="!defaultAddress">添加收货地址</span>
    <div class="disc" v-if="defaultAddress">
      <p class="receiver">{{defaultAddress.receiver}}-{{defaultAddress.phone}}</p>
      <p
        class="address"
      >{{`${defaultAddress.province}-${defaultAddress.city}-${defaultAddress.address}`}}</p>
    </div>
    <i class="iconfont icon-zhankai"></i>
  </div>
</template>
<script>
export default {
  props: {
    addresses: {
      type: Array,
      required: true
    }
  },
  data() {
    const defaultAddress = this.addresses.find(item => item.isDefault);
    return {
      defaultAddress: defaultAddress
    };
  },
  methods: {
    onAddAddress() {
      this.$router.push({
        path: "/address"
      });
    }
  }
};
</script>
<style lang="less" scoped>
.address-wraper {
  padding: 0 1.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: @defaultBgColor;
  margin-top: 0.8rem;
  height: 5rem;
  box-sizing: border-box;
  .icon-dingwei,
  .icon-zhankai {
    width: 3.2rem;
    text-align: center;
    font-size: 1.6rem;
    color: #999;
  }
  .icon-dingwei {
    font-size: 3rem;
  }
  .disc {
    flex: 1;
    font-size: 1.4rem;
    color: #666;
    padding-left: 1.6rem;
    min-width: 0;
    .receiver {
      line-height: 1.5;
    }
    .address {
      font-size: 1.1rem;
      line-height: 1.5;
      color: #999;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>
