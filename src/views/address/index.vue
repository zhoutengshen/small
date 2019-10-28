<template>
  <div class="wraper">
    <div class="block-5rem"></div>
    <div class="main">
      <RadioGroup v-model="check" @change.native="checkChangeHandle">
        <div
          v-if="addresses.length"
          v-for="address in addresses"
          :key="address.id"
          class="addresses"
        >
          <p>{{`${address.receiver}-${address.phone}`}}</p>
          <p>{{`${address.province}-${address.city}-${address.address}`}}</p>
          <div class="edited">
            <Radio class="radio" :val="address.id" v-show="!address.isDefault">设置位默认地址</Radio>
            <span class="default-address" v-show="address.isDefault">默认地址</span>
            <div>
              <i class="iconfont icon-shanchu" @click="deleteHandle(address)"></i>
              <i class="iconfont icon-bianji" @click="editedHandle(address)"></i>
            </div>
          </div>
        </div>
      </RadioGroup>
      <div v-if="!addresses.length" class="empty-msg">
        <i class="iconfont icon-dingwei"></i>
        <p class="desc">您还没有添加收货地址</p>
      </div>
      <div class="btn-wraper">
        <button class="btn" @click="addHandle">添加</button>
      </div>
    </div>
    <Popup v-model="showEdited">
      <Edited :address="editedAddress" @save="saveHandle" mode="edited" />
    </Popup>
    <Popup v-model="showAdd">
      <Edited @save="saveHandle" mode="add" />
    </Popup>
  </div>
</template>
<script>
import {
  fetchUserAddressAction,
  updateAddressAction,
  removeAddressAction,
  addAddressAction,
  setDefaultAddress
} from "@/stores/user";
import { mapGetters } from "vuex";
import { Radio, RadioGroup } from "vue-ydui/dist/lib.rem/radio";
import { Popup } from "vue-ydui/dist/lib.rem/popup";
import Edited from "./Edited";
export default {
  components: {
    Radio,
    RadioGroup,
    Popup,
    Edited
  },
  data() {
    return {
      check: "",
      showEdited: false,
      showAdd: false,
      editedAddress: {}
    };
  },
  computed: {
    ...mapGetters(["addresses"])
  },
  watch: {
    addresses(addresses) {
      const address = addresses.find(item => item.isDefault);
      if (address) {
        this.check = address.id;
      }
    }
  },
  methods: {
    saveHandle(adress) {
      this.showEdited = false;
      // console.log(adress);
      // this.$store.dispatch(updateAddressAction(adress));
    },
    checkChangeHandle() {
      //设置默认地址
      this.$store.dispatch(setDefaultAddress(this.check)).then(() => {
        //重新获取地址信息
        this.$store.dispatch(fetchUserAddressAction());
      });
    },
    deleteHandle({ id }) {
      this.$store.dispatch(removeAddressAction(id)).catch(e => {
        console.log(e);
      });
    },
    editedHandle(adress) {
      this.showEdited = true;
      this.editedAddress = { ...adress };
    },
    addHandle() {
      this.showEdited = true;
    },
    async init() {
      this.$store.dispatch(fetchUserAddressAction()).catch(e => {
        console.log(e);
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="less" scoped>
.block-5rem {
  height: 4rem;
}
.main {
  margin-top: 1.6rem;

  box-sizing: border-box;
  min-height: calc(100vh - 5rem - 1.6rem);
  .addresses {
    display: flex;
    flex-direction: column;
    padding: 1.6rem 1.6rem 0 1.6rem;
    background: @defaultBgColor;
    margin-top: 0.8rem;
    p {
      line-height: 1.5;
      font-size: 1.4rem;
    }
    .edited {
      display: flex;
      align-items: center;
      height: 3rem;
      justify-content: space-between;
      border-top: 1px solid #eee;
      margin-top: 0.5rem;
      .radio {
        line-height: 1.5;
      }
      .default-address {
        font-size: 1.4rem;
        color: red;
      }
      .iconfont {
        padding: 0 1rem;
        font-size: 1.5rem;
      }
    }
  }
  .empty-msg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30vh;
    color: #666;
    .icon-dingwei {
      font-size: 5rem;
    }
    .desc {
      font-size: 1.6rem;
      line-height: 1.5;
      color: red;
      font-weight: 600;
    }
  }
  .btn-wraper {
    position: sticky;
    margin-top: 1.6rem;
    padding: 0 1.6rem;
    bottom: 0rem;
    width: 100%;
    z-index: 10;
    .btn {
      width: 100%;
      height: 4rem;
      box-sizing: border-box;
      line-height: 4rem;
      background: red;
      outline: none;
      border: none;
      border-radius: 0.5rem;
      color: @defaultBgColor;
      font-size: 1.6rem;
    }
  }
}
</style>
<style scoped>
.yd-radio-text,
.yd-radio-icon {
  vertical-align: middle;
}
</style>
