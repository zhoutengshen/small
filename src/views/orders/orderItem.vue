<template>
  <div class="h-order-item">
    <h3 class="h-title">{{order.productName||"未知订单类型"}}</h3>
    <ul class="h-info">
      <li>
        <span>卡券编号：</span>
        <span>{{order.couponsNum}}</span>
      </li>
      <li>
        <span>订单时间：</span>
        <span>{{order.orderCreateTime}}</span>
      </li>
      <li>
        <span>完成时间：</span>
        <span>{{order.orderModifyTime}}</span>
      </li>
      <li>
        <span>订单编号：</span>
        <span>{{order.orderNo}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.h-order-item {
  margin-top: 8px;
  border-radius: 5px;
  padding: 8px 16px;
  background-color: #fff;
  overflow: hidden;
  transition: 0.3s;
}
.h-title {
  font-size: 14px;
  font-weight: 600;
  color: #666;
}
.h-info::before {
  content: "";
  display: block;
  margin-bottom: 8px;
  border-bottom: 1px dotted #eee;
}
.h-info {
  font-size: 14px;
  color: #999;
  margin-top: 8px;
}
.h-info > li {
  overflow: hidden;
  font-size: 13px;
  line-height: 1.7;
}
.h-info > li > span:nth-child(2) {
  float: right;
  color: #666;
}
</style>
