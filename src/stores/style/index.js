
const SHOW_NAV_BAR = "SHOW_NAV_BAR";
const HIDDEN_NAV_BAR = "HIDDEN_NAV_BAR";

export const mutationsCreator = {
    showNavBarMutation: () => ({ type: SHOW_NAV_BAR }),
    hiddenNavBarMutation: () => ({ type: HIDDEN_NAV_BAR }),
}
/**
 * @type {import("vuex/types/index").Store}
 */
const styleStore = {
    state: {
        visibleNavBar: true,
    },
    getters: {
        visibleNavBar(state) {
            return state.visibleNavBar;
        }
    },
    mutations: {
        [SHOW_NAV_BAR](state) {
            state.visibleNavBar = true;
        },
        [HIDDEN_NAV_BAR](state) {
            state.visibleNavBar = false;
        }
    }
}
export default styleStore;
