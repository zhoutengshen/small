//actions
const ADD_CART_ACTION = "ADD_CART_ACTION";

//mutations
const ADD_CART_MUTATION = "ADD_CART_MUTATION";

//actions 辅助函数

export const addCartAction = (cart) => {
    return {
        type: ADD_CART_ACTION,
        data: cart
    }
}

// 下面的注释为将给vscode 提供智能提示的能提，ts增强
/**
 * @type {import("vuex/types/index").Store}
 */
const cartStore = {
    state: {
        //基本数据结构
        carts: [
            // {
            //     prodId: "245",
            //     img: "http://img.yesm.cn/shopProduct/20180622/20180622183145_530.jpg",
            //     prodName:
            //         "Midea/美的电压力锅电饭锅PCS5011HM一锅双胆 智能12小时预约5升高压锅美的电饭煲",
            //     selected: "默认",
            //     price: 100,
            //     count: 10
            // }
        ],
    },
    getters: {
        carts(state) {
            return state.carts;
        },
        cartsLength(state) {
            return state.carts.length;
        }
    },
    actions: {
        async [ADD_CART_ACTION](ctx, { data }) {
            const { commit, state } = ctx
            const index = state.carts.findIndex(item => item.prodId === data.prodId);
            if (index !== -1) {
                return Promise.reject("商品已在购物车内");
            }
            //TODO: 网络请求
            const mockData = () => {
                return new Promise((resolve, reject) => {
                    const timerId = setTimeout(() => {
                        clearTimeout(timerId);
                        resolve({
                            data: {

                            },
                            message: "添加成功",
                            status: Math.random(0, 1) * 10 < 2 ? 400 : 200
                        });
                    }, 800)
                })
            }
            const { message } = await mockData();
            commit(ADD_CART_MUTATION, data);
            return Promise.resolve(message);
        }
    },
    mutations: {
        [ADD_CART_MUTATION](state, cart) {
            cart.count = 1;
            state.carts.push(cart);
        }
    }
}
export default cartStore;

