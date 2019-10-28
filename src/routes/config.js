/**
 * 为vscode提供智能提示
 * @type {import("vue-router/types/router").RouteConfig[]}
 */
const routes = [
    {
        path: "/",
        name: "enter",
        redirect: '/home',
        component: () => import("@/layout/common"),
        children: [
            {
                path: "account",
                name: "account",
                component: () => import("@/views/account"),

                meta: {
                    isNeedTopBar: false,
                    isNeedNavBar: true
                }
            },
            {
                path: "cart",
                name: "cart",
                component: () => import("@/views/cart"),
                meta: {
                    isNeedTopBar: false,
                    isNeedNavBar: true
                }
            },
            {
                path: "home",
                name: "home",
                component: () => import("@/views/home"),
                meta: {
                    isNeedTopBar: false,
                    isNeedNavBar: true
                },
                children: [

                ]
            },
            {
                path: "orders",
                name: "orders",
                component: () => import("@/views/orders"),
                meta: {
                    isNeedTopBar: false,
                    isNeedNavBar: true
                }
            },
            {
                path: "pro-detail/:id",
                name: "proDetail",
                component: () => import("@/views/product-detail"),
                meta: {
                    isNeedTopBar: true,
                    isNeedNavBar: false
                }
            },
            {
                path: "purchase",
                name: "purchase",
                component: () => import("@/views/purchase"),
                meta: {
                    isNeedTopBar: true,
                    isNeedNavBar: false
                }
            },
            {
                path: "address",
                name: "address",
                component: () => import("@/views/address"),
                meta: {
                    isNeedTopBar: true,
                    isNeedNavBar: false
                }
            }
        ]
    },
    //非法路由(设计权限等问题)
    {
        path: "/error",
        name: "error",
        component: () => import("@/layout/error"),
        children: [

        ]
    },
    //前端404重定向到home
    {
        path: "*",
        name: "redirectToHomePage",
        redirect: "/home"
    }
]


export default routes;
