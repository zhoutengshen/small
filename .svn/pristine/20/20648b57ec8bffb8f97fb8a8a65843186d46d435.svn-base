import Vue from "vue";
import VueRouter from "vue-router";
import routeConfig from "./config";


Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [...routeConfig]
});

//全局路由守卫配置
router.beforeEach((from, to, next) => {
    next();
})

export default router;
