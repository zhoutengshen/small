<template>
  <div class="wraper">
    <div v-show="list.length>0">
      <p class="total">
        兑换：
        <SPAN>{{total}}</SPAN>条
      </p>
      <OrderSearchBar @search="search" :isSearching="false" v-model="searchData"></OrderSearchBar>
      <InfiniteScroll :callback="loadNewData" ref="infinitescrollDemo">
        <OrderList slot="list" :orders="list"></OrderList>
      </InfiniteScroll>
    </div>
    <div v-show="list.length<=0" class="empty-list-msg">
      <img :src="require('@/assets/img/wind.png')" alt />
      <p>暂无数据</p>
    </div>
  </div>
</template>

<script>
import { Search } from "vue-ydui/dist/lib.rem/search";
import { InfiniteScroll } from "vue-ydui/dist/lib.rem/infinitescroll";
import { ListTheme, ListItem, ListOther } from "vue-ydui/dist/lib.rem/list";
import OrderList from "./orderList";
import OrderSearchBar from "./orderSerarchBar";

export default {
  components: {
    Search,
    InfiniteScroll,
    ListTheme,
    ListItem,
    ListOther,
    OrderList,
    OrderSearchBar
  },
  data() {
    return {
      current: 1,
      size: 10,
      total: 0,
      list: [],
      searchData: {
        orderNum: "",
        keywords: "",
        endTime: "",
        startTime: ""
      }
    };
  },
  created() {
    let form = {
      ...this.searchData,
      size: this.size,
      current: 1
    };
    this.getList(form);
  },
  methods: {
    search() {
      let form = {
        size: this.size,
        current: 1,
        orderNum: this.searchData.orderId,
        startTime: this.searchData.startTime,
        endTime: this.searchData.endTime
      };
      //重置页面计数
      this.current = 1;
      this.list = [];
      this.getList(form);
    },
    getList(form) {
      // orders(form)
      //   .then(res => {
      //     this.loadding = false;
      //     let { status, message, data } = res.data;
      //     const { records, total } = data;
      //     if (status === 200) {
      //       this.total = total;
      //       this.list = [...this.list, ...records];
      //       if (records.length < this.size) {
      //         /* 所有数据加载完毕 */
      //         this.$refs.infinitescrollDemo.$emit(
      //           "ydui.infinitescroll.loadedDone"
      //         );
      //         return;
      //       }
      //       /* 单次请求数据完毕 */
      //       this.$refs.infinitescrollDemo.$emit(
      //         "ydui.infinitescroll.finishLoad"
      //       );
      //       this.current++;
      //     }
      //   })
      //   .catch(err => {
      //     this.$dialog.toast({
      //       mes: "网络错误",
      //       timeout: 1500,
      //       icon: "error"
      //     });
      //   });
    },
    loadNewData() {
      let form = {
        ...this.searchData,
        size: this.size,
        current: this.current
      };
      this.getList(form);
    }
  }
};
</script>
<style scoped>
.wraper {
  height: 100vh;
}
.total {
  padding-left: 0.8rem;
  font-size: 1.6rem;
  line-height: 1.5;
  color: #999;
}
.total > sapn {
  margin: 0 0.5rem 0 -0.3rem;
  color: #337ab7;
}
.empty-list-msg {
  padding-top: 3.2rem;
  text-align: center;
}
.empty-list-msg > p {
  font-size: 1.6rem;
  font-weight: 600;
  color: #666;
}
</style>
