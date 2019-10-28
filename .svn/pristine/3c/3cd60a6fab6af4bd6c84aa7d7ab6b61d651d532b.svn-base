<template>
  <div class="select-wraper">
    <div class="main">
      <section class="top">
        <img class="img" :src="prodInfo.img" :alt="prodInfo.prodName" />
        <div class="desc">
          <span class="price">￥{{prodInfo.price}}</span>
          <span class="count">库存{{prodInfo.storeCount}}</span>
          <span class="selected">已选 {{_selected}}</span>
        </div>
      </section>
      <section class="mid">
        <h3 class="title">{{prodInfo.title}}</h3>
        <div class="selections">
          <span
            v-for="(item,index) in prodInfo.selections"
            :class="selectedIndex ===index?'selected':'' "
          >{{item}}</span>
        </div>
      </section>
      <section class="will-buy-count">
        <h3>购买数量</h3>
        <span class="total-price"></span>
        <Counter v-model="count" :min="1"></Counter>
      </section>
      <section class="comfirm">
        <button class="btn" @click.prevent.stop="onSelect">确定</button>
      </section>
    </div>
  </div>
</template>

<script>
import Counter from "@/base-ui/Counter";
export default {
  components: {
    Counter
  },
  props: {
    prodInfo: {
      default() {
        return {
          img: "http://img.yesm.cn/shopProduct/20190418/20190418171451_979.jpg",
          price: 100,
          storeCount: 10,
          title: "颜色",
          prodName: "",
          selections: ["蓝色", "白色", "红色"]
        };
      }
    }
  },
  data() {
    return {
      selectedIndex: 0,
      count: 1
    };
  },
  methods: {
    onClose() {
      this.$emit("close");
    },
    onSelect() {
      this.$emit("select", { count: this.count });
    }
  },
  computed: {
    _selected() {
      const { selections = [] } = this.prodInfo;
      return selections[this.selectedIndex];
    }
  }
};
</script>
<style lang="less" scoped>
.select-wraper {
  border-radius: 1rem 1rem 0 0;
  overflow: hidden;
  .main {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: @defaultBgColor;
    .top {
      display: flex;
      flex-direction: row;
      padding: 0.8rem;
      .img {
        width: 8rem;
        height: 8rem;
      }
      .desc {
        flex: 1;
        display: flex;
        flex-direction: column;
        span {
          flex: 1;
          line-height: 1.5;
        }
        .price {
          font-size: 1.4rem;
          color: red;
        }
        .count {
          font-size: 1.2rem;
          color: #666;
        }
        .selected {
          font-size: 1.3rem;
          color: #333;
        }
      }
    }
  }
  .mid {
    padding: 0.8rem 1.6rem;
    .title {
      font-size: 1.5rem;
      line-height: 1.5;
    }
    .selections {
      padding: 0.4rem 0;
      line-height: 1.5;
      span {
        display: inline-block;
        font-size: 1.4rem;
        border: 1px solid #999;
        padding: 0.3rem 1rem;
        line-height: 1.5;
        border-radius: 0.5rem;
        color: #666;
      }
      span + span {
        margin-left: 0.8rem;
      }
      .selected {
        border-color: red;
        color: red;
      }
    }
  }
  .will-buy-count {
    padding: 0.8rem 1.6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h3 {
      font-size: 1.5rem;
    }
    .count {
      font-size: 1.6rem;
    }
  }
  .comfirm {
    padding: 0.8rem 1.6rem;
    .btn {
      width: 100%;
      height: 3.5rem;
      line-height: 3.5rem;
      font-size: 1.8rem;
      color: #fff;
      border: none;
      background: red;
      border-radius: 0.5rem;
    }
  }
}
.show {
  display: "";
}
.hidden {
  display: none;
}
</style>
