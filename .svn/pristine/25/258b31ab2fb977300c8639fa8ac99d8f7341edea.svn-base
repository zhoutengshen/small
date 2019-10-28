<template>
  <div class="order-search-bar">
    <Icons
      class="h-search-icon"
      color="#409eff"
      size="2.5rem"
      v-if="!showSearchForm"
      name="search"
      @click.native="searchHandle"
    ></Icons>

    <Popup v-model="showSearchForm" position="center">
      <div class="popup-content">
        <div class="header">筛选</div>
        <form class="form">
          <div>
            <span>订单编号：</span>
            <input
              :value="orderIdInput"
              @input="inputChangeHandle"
              slot="right"
              placeholder="请输入订单编号"
            />
          </div>
          <div @click="selectCompleteTimeHandle(false)">
            <span>
              开始日期：
              <input placeholder="请选择" type="text" readonly :value="searchData.startTime" />
            </span>
          </div>
          <div @click="selectCompleteTimeHandle(true)">
            <span>结束日期：</span>
            <input placeholder="请选择" type="text" readonly :value="searchData.endTime" />
          </div>
        </form>
        <div class="footer">
          <Button @click.native="confirmHandle" type="primary">确 认</Button>
          <Button @click.native="closeHandle" type="warning">取 消</Button>
        </div>
      </div>
    </Popup>

    <DatePicker
      v-if="showDatePicker"
      :date="date"
      @confirm="confirmTimeHandle"
      @cancel="cancelHandle"
    />
  </div>
</template>
<script>
import { Popup } from "vue-ydui/dist/lib.rem/popup";
import DatePicker from "@/base-ui/datePicker";
import { CellGroup, CellItem } from "vue-ydui/dist/lib.rem/cell";
import { Button } from "vue-ydui/dist/lib.rem/button";
import { Input } from "vue-ydui/dist/lib.rem/input";
import { Icons } from "vue-ydui/dist/lib.rem/icons";
import { formateDate } from "@/utils";
export default {
  model: {
    prop: "searchData",
    event: "change"
  },
  components: {
    DatePicker,
    Popup,
    Button,
    Input,
    CellGroup,
    CellItem,
    Icons
  },
  props: {
    searchData: {
      type: Object,
      required: true,
      default: () => ({
        orderId: "",
        startTime: "",
        endTime: ""
      })
    }
  },
  data() {
    const nowDate = formateDate("yyyy-mm-dd");
    return {
      date: nowDate,
      showSearchForm: false,
      showDatePicker: false,
      isSelectEndTime: false,
      orderIdInput: this.searchData.orderId
    };
  },
  mounted() {},
  methods: {
    inputChangeHandle(event) {
      event.preventDefault();
      let value = event.target.value;
      let formateValue = "";
      value = value.replace(/[^0-9]/g, "").slice(0, 20);
      formateValue = value.split("").reduce((a, b, index) => {
        if (index !== 0 && index % 4 == 0) {
          return a + " " + b;
        } else return a + b;
      }, "");
      event.target.value = formateValue;
      this.searchData.orderId = value;
      this.orderIdInput = formateValue;
    },
    searchHandle() {
      this.showSearchForm = true;
    },
    confirmTimeHandle(val) {
      if (this.isSelectEndTime) {
        this.$emit("change", {
          ...this.searchData,
          endTime: val.date
        });
      } else {
        this.$emit("change", {
          ...this.searchData,
          startTime: val.date
        });
      }
      this.showDatePicker = false;
    },
    selectCompleteTimeHandle(mark) {
      this.isSelectEndTime = mark;
      this.showDatePicker = true;
    },
    confirmHandle() {
      //如果没有选择结束时间，默认时间为今天
      if (this.searchData.startTime && !this.searchData.endTime) {
        this.searchData.endTime = formateDate("yyyy-mm-dd");
      }
      if (this.searchData.endTime && this.searchData.startTime) {
        this.searchData.startTime =
          this.searchData.startTime + " " + "00:00:00";
        this.searchData.endTime = this.searchData.endTime + " " + "23:59:59";
      }

      this.$emit("search", this.searchData);
      this.$emit("change", this.searchData);
      this.showSearchForm = false;
    },
    cancelHandle() {
      this.showDatePicker = false;
    }
  },
  watch: {
    showSearchForm() {
      this.orderIdInput = "";
      this.$emit("change", {});
    }
  }
};
</script>
<style lang="less" scoped>
.order-search-bar {
  /deep/ .yd-popup-center {
    top: 30vh;
  }
  .search-btn {
    border: 0;
  }
  .h-footer button + button {
    margin-left: 0.8rem;
  }
  .h-search-icon {
    position: fixed;
    top: 2rem;
    right: 2.5rem;
  }
  .popup-content {
    width: 80vw;
    background: #fff;
    border-radius: 1rem;
    padding: 0.8rem 0;

    overflow: hidden;
    .header {
      text-align: center;
      font-size: 1.6rem;
    }
    .footer {
      text-align: end;
      margin-top: 0.8rem;
      margin-right: 1.6rem;
      /deep/ .yd-btn {
        font-size: 1.5rem;
        height: 2rem;
      }
      button + button {
        margin-left: 0.8rem;
      }
    }
    .form {
      div {
        height: 4rem;
        line-height: 4rem;
        box-sizing: border-box;
        padding: 0 1.6rem;
        font-size: 1.4rem;
        input {
          border: none;
          line-height: 1.5;
        }
        span {
        }
      }
      div {
        border-bottom: 1px solid #eee;
      }
    }
  }
}
</style>
