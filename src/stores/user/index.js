//用户模块
//职责：负责用户相关的数据
import { fetchUserAddressApi } from "@/api";
//NOTE: aciotn 常量
const ADD_ADDRESS_ACTION = "ADD_ADDRESS_ACTION";
const REMOVE_ADDRESS_ACTION = "REMOVE_ADDRESS_ACTION";
const UPDATE_ADDRESS_ACTION = "UPDATE_ADDRESS_ACTION";
const FETCH_USER_ADDRESS_ACTION = "FETCH_USER_ADDRESS_ACTION";
const SET_DEFAULT_ADDRESS_ACTION = "SET_DEFAULT_ADDRESS_ACTION";

//mutations 常量
const ADD_ADDRESS_MUTATION = "ADD_ADDRESS_MUTATION";
const REMOVE_ADDRESS_MUTION = "REMOVE_ADDRESS_MUTION";
const UPDATE_ADDRESS_MUTATION = "UPDATE_ADDRESS_MUTATION";
const FETCH_USER_ADDRESS_MUTATION = "FETCH_USER_ADDRESS_MUTATION";

//NOTE: action creator 辅助函数
export const setDefaultAddress = (addressId) => {
    return {
        type: SET_DEFAULT_ADDRESS_ACTION,
        data: addressId
    }
}

//添加一个收货地址
export const addAddressAction = (newAddress) => {
    return {
        type: ADD_ADDRESS_ACTION,
        data: newAddress
    }
}

//根据id 移除一个收货地址
export const removeAddressAction = (addressId) => {
    return {
        type: REMOVE_ADDRESS_ACTION,
        data: addressId
    }
}

// 更新一个收货地址，必须由id
export const updateAddressAction = (newAddress) => {
    return {
        type: UPDATE_ADDRESS_ACTION,
        data: newAddress
    }
}

//获取用户地址信息
export const fetchUserAddressAction = () => {
    return {
        type: FETCH_USER_ADDRESS_ACTION
    }
}

// 下面的注释为将给vscode 提供智能提示的能提，ts增强
/**
 * @type {import("vuex/types/index").Store}
 */
const accountStore = {
    state: {
        userInfos: {
        },
        //基本结构
        addresses: [
            // {
            //     id: "123",
            //     isDefault: false,
            //     receiver: "陈华",
            //     phone: "13165425486",
            //     province: "广东",
            //     city: "广州",
            //     address: "陈华的家"
            // }
        ]
    },
    getters: {
        addresses(state) {
            return state.addresses;
        }
    },
    actions: {
        async [SET_DEFAULT_ADDRESS_ACTION]({ commit }, { data }) {
            //设置默认地址
            //网络请求
            //TODO:
            return Promise.resolve();
        },
        async [ADD_ADDRESS_ACTION]({ commit }, { data }) {
            //网络请求
            //TODO:
            commit(ADD_ADDRESS_MUTATION, data);
        },
        async [REMOVE_ADDRESS_ACTION]({ commit }, { data }) {
            //网络请求
            //TODO:
            commit(REMOVE_ADDRESS_MUTION, data);
        },
        async [UPDATE_ADDRESS_ACTION]({ commit }, { data }) {
            //网络请求
            //TODO:
            commit(UPDATE_ADDRESS_MUTATION, data);
        },
        async [FETCH_USER_ADDRESS_ACTION]({ commit }) {
            try {
                const resp = await fetchUserAddressApi();
                let { status, message, data } = resp;
                if (status === 200) {
                    //修正mock数据,只允许一个isDefault为true
                    let hasDefault = false;
                    data = data.map(item => {
                        if (hasDefault) {
                            item.isDefault = false;
                        }
                        if (item.isDefault) {
                            hasDefault = true;
                        }
                        return item;
                    });
                    if (!hasDefault && data.length > 0) {
                        data[0].isDefault = true;
                    }
                    commit(FETCH_USER_ADDRESS_MUTATION, data);
                    return Promise.resolve(message);
                } else {
                    return Promise.reject(message);
                }
            } catch (error) {
                console.log(error);
                return Promise.reject("网络错误");
            }
        }
    },
    mutations: {
        [ADD_ADDRESS_MUTATION](state, address) {
            state.addresses.push(address);
        },
        [REMOVE_ADDRESS_MUTION](state, addressId) {
            const index = state.addresses.findIndex(address => address.id == addressId);
            if (index !== -1) {
                state.addresses.splice(index, 1);
            }

        },
        [UPDATE_ADDRESS_MUTATION](state, addressWithId) {
            const index = state.addresses.findIndex(address => address.id === addressWithId.id);
            state.addresses.splice(index, 1, addressWithId);
        },
        [FETCH_USER_ADDRESS_MUTATION](state, addresses) {
            state.addresses = [...addresses];
        }
    }
}

export default accountStore;
