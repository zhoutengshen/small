<template>
  <div>
    <OrderItem v-for="order in orders" :key="order.id" :order="order"></OrderItem>
  </div>
</template>

<script>
import OrderItem from "./orderItem";
export default {
  props: {
    orders: {
      type: Array,
      required: true
    }
  },
  components: {
    OrderItem
  }
};
</script>
<style>
</style>
