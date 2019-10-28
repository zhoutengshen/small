import Vue from "vue";
import Vuex from "vuex";
import {
    MUTATION_SET_AUTHORIZE
    , MUTATION_SET_IS_LOGIN
} from "./constant";
//导入相关模块
import user from "./user";
import home from "@/views/home/store";
import cart from "@/views/cart/store";
import order from "@/views/orders/store";
import style from "./style";
Vue.use(Vuex);

const store = new Vuex.Store({
    //全局state
    state: {
        authorize: false, // 是否授权
        isLogin: false,  // 是否登录,
    },
    mutations: {
        [MUTATION_SET_AUTHORIZE](state, auth) {
            state.authorize = auth
        },
        [MUTATION_SET_IS_LOGIN](state, isLogin) {
            state.isLogin = isLogin
        }
    },
    actions: {
    },
    //以模块的方式组织store
    modules: {
        user, home, cart, order, style
    }
});

export default store;

