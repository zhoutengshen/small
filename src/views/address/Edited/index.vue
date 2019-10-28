<template>
  <form class="wraper">
    <div class="form-item">
      <label>收 货 人 ：</label>
      <input type="text" v-model="pAddress.receiver" placeholder="请输入收货人姓名" />
    </div>
    <div class="form-item">
      <label>联系电话：</label>
      <input type="text" v-model="pAddress.phone" placeholder="请输入联系电话" />
    </div>
    <div class="form-item" @click="showCitySelect = true">
      <label>所在省市：</label>
      <input type="text" readonly placeholder="请选择所在城市" :value="procinceCity" />
      <i class="iconfont icon-zhankai"></i>
    </div>
    <div class="address">
      <label>详细地址：</label>
      <TextArea v-model="pAddress.address" slot="right" placeholder="请输入详细地址"></TextArea>
    </div>
    <div class="btn-wraper">
      <button class="btn" @click.prevent="saveHandle">保存</button>
    </div>
    <CitySelect v-model="showCitySelect" :items="district" :callback="getCityHandle" />
  </form>
</template>
<script>
import { CitySelect } from "vue-ydui/dist/lib.rem/cityselect";
import { TextArea } from "vue-ydui/dist/lib.rem/textarea";
import District from "ydui-district/dist/jd_province_city_area_id";
export default {
  components: {
    CitySelect,
    TextArea
  },
  props: {
    mode: {
      type: String,
      required: true,
      validator(value) {
        return value === "edited" || value === "add";
      }
    },
    address: {
      type: Object,
      required: false
    }
  },
  data() {
    let _address = {};
    let procinceCity = "";
    if (this.mode === "edited") {
      _address = { ...this.address };
    }
    return {
      pAddress: _address,
      showCitySelect: false,
      district: District,
      procinceCity: ""
    };
  },
  methods: {
    reset() {
      this.pAddress = {
        address: ""
      };
      this.procinceCity = "";
    },
    getCityHandle(val) {
      const province = val.itemName1;
      const city = val.itemName1;
      const area = val.itemName3;
      this.pAddress = {
        ...this.pAddress,
        province,
        city,
        area
      };
      this.procinceCity = `${province}-${city}-${area}`;
    },
    saveHandle() {
      this.$emit("save", { ...this.pAddress });
      this.reset();
    }
  },
  watch: {
    address(address) {
      if (this.mode === "edited") {
        this.pAddress = address;
        const { province, city, area } = address;
        this.procinceCity = `${province}-${city}-${area || ""}`;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.wraper {
  height: 100vh;
  .form-item {
    display: flex;
    align-items: center;
    height: 4rem;
    font-size: 1.3rem;
    padding: 0 1.6rem;

    label {
      width: 8rem;
    }
    input {
      border: none;
      flex: 1;
      line-height: 2;
      color: #333;
    }
    input::-webkit-input-placeholder {
      color: #ccc;
      font-size: 1.2rem;
    }
  }
  .address {
    padding: 0.8rem 1.6rem;
    border-top: 1px solid #eee;
    label {
      font-size: 1.3rem;
      width: 6rem;
    }
    textarea::-webkit-input-placeholder {
      color: #ccc;
      font-size: 1.2rem;
    }
    //深度选择器
    /deep/ textarea {
      margin-top: 0.8rem;
      font-size: 1.3rem;
      height: 10rem;
      color: #333;
    }
  }
  .form-item + .form-item {
    border-top: 1px solid #eee;
  }
  .btn-wraper {
    padding: 0 1.6rem;
    .btn {
      width: 100%;
      height: 3rem;
      outline: none;
      border: none;
      background: rgb(235, 64, 64);
      color: #fff;
      font-size: 1.6rem;
      border-radius: 0.5rem;
    }
  }
  //深度选择器
  /deep/ .yd-cityselect-title {
    font-size: 1.6rem;
  }
}
</style>
