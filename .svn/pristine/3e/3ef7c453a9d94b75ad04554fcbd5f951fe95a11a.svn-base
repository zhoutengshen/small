<template>
  <div class="wraper">
    <section class="header">
      <img
        class="img"
        src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1427798128,3947989397&fm=26&gp=0.jpg"
        alt
      />
      <div class="info">
        <p>ChenHua</p>
        <p>
          余额
          <em>0</em>
        </p>
      </div>
      <button class="btn">充值</button>
    </section>
    <section class="mid">
      <div class="item" v-for="(item,index) in items" :key="index">
        <i :class="[item.icon]" :style="{color:item.color}"></i>
        <span>{{item.title}}</span>
        <i class="iconfont icon-zhankai"></i>
      </div>
    </section>
    <section class="footer"></section>
  </div>
</template>
<script>
const items = [
  {
    icon: "iconfont icon-weibiaoti5",
    title: "我的账户",
    color: "red"
  },
  {
    icon: "iconfont icon-dingdan",
    title: "我的订单",
    color: "#67C23A"
  },
  {
    icon: "iconfont icon-youhuiquan",
    title: "我的优惠券",
    color: "#E6A23C"
  },
  {
    icon: "iconfont icon-dingwei",
    title: "收货地址",
    color: "#F56C6C"
  },
  {
    icon: "iconfont icon-choujiang",
    title: "抽奖活动",
    color: "#909399"
  },
  {
    icon: "iconfont icon-shouji",
    title: "解绑手机号",
    color: "#409EFF"
  },
  {
    icon: "iconfont icon-xiaoxi",
    title: "质询帮助",
    color: "red"
  }
];
export default {
  data() {
    return {
      items
    };
  }
};
</script>
<style lang="less" scoped>
.wraper {
  .header {
    display: flex;
    align-items: center;
    padding: 0.8rem 1.6rem;
    background: @defaultBgColor;
    .img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      border: 1px solid #ccc;
    }
    .info {
      display: flex;
      flex: 1;
      height: 3rem;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 1.6rem;
    }
    .btn {
      width: 8rem;
      border: none;
      height: 3rem;
      background: red;
      color: #fff;
      border-radius: 0.5rem;
      font-size: 1.4rem;
    }
  }
  .mid {
    margin-top: 1.6rem;
    background: @defaultBgColor;
    padding: 0 1.6rem;
    .item {
      display: flex;
      align-items: center;
      height: 5rem;
      color: #999;
      i {
        font-size: 2rem;
      }
      .icon-zhankai {
        font-size: 1.6rem;
      }
      span {
        flex: 1;
        margin-left: 1rem;
        font-size: 1.4rem;
        color: #333;
      }
    }
  }
}
</style>
