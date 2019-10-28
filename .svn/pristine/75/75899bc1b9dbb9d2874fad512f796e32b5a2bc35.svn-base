import App from '@/App';
import Vue from 'vue';
import { setBasicFontSize, reComputedFontSize } from "@/utils";
import router from "@/routes"
import store from "@/stores";
import 'vue-ydui/dist/ydui.base.css';
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
Vue.prototype.$dialog = {
  confirm: Confirm,
  alert: Alert,
  toast: Toast,
  notify: Notify,
  loading: Loading,
};
//全局css资源
import "@/assets/css/global";
//CODE
setBasicFontSize();//设置浏览器基础文字字体大小,字体大小由系统动态计算（基于iphone 6   10px === 1rem）
reComputedFontSize();//设备宽度发生变化将重置字体大小
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');

