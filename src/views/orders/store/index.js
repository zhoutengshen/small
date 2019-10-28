//actions
const ADD_NON_PAYMENT_ORDERS_ACTION = "ADD_NON_PAYMENT_ORDERS_ACTION";

//mutations

const ADD_NON_PAYMENT_ORDERS_MUTATION = "ADD_NON_PAYMENT_ORDERS_MUTATION";


//辅助函数
export const addNonPaymentOrderAction = (order) => {
    return {
        type: ADD_NON_PAYMENT_ORDERS_ACTION,
        data: order
    }
}

// 下面的注释为将给vscode 提供智能提示的能提，ts增强
/**
 * @type {import("vuex/types/index").Store}
 */
const ordersStore = {
    state: {
        //待支付订单
        nonPaymentOrders: [
            //基本结构
            // {
            // {
            //     prodId: "245",
            //     img: "http://img.yesm.cn/shopProduct/20180622/20180622183145_530.jpg",
            //     prodName:
            //         "Midea/美的电压力锅电饭锅PCS5011HM一锅双胆 智能12小时预约5升高压锅美的电饭煲",
            //     selected: "默认",
            //     price: 100,
            //     count: 10
            // }
            // }
        ]
    },
    getters: {
        nonPaymentOrders(state) {
            return state.nonPaymentOrders;
        }
    },
    actions: {
        [ADD_NON_PAYMENT_ORDERS_ACTION]({ commit }, { data }) {
            //TODO: 网络请求生成预订单
            const orderInfo = {
                orderId: Date.now() + ""//mock 一个订单id
            }
            //多个商品为同一订单
            if (Array.isArray(data)) {
                data = data.map(item => {
                    return {
                        ...item,
                        ...orderInfo
                    }
                });
                commit(ADD_NON_PAYMENT_ORDERS_MUTATION, data);
            } else {
                //单个商品
                data = {
                    ...data,
                    ...orderInfo
                };
                commit(ADD_NON_PAYMENT_ORDERS_MUTATION, data);
            }
            return Promise.resolve({ ...orderInfo })
        }
    },
    mutations: {
        [ADD_NON_PAYMENT_ORDERS_MUTATION](state, order) {
            if (Array.isArray(order)) {
                state.nonPaymentOrders.push(...order);
            } else {
                state.nonPaymentOrders.push(order);
            }

        }
    }
}

export default ordersStore;
