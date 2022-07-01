import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)


export default new Vuex.Store({
    modules:{

    },
    state:{
        tabConfig:[],//页面书签
        activeKey:'',//当前选中书签
    },
    mutations:{
        DEL_TAB(state, activeKey){
            // 删除某个书签,activeKey会变更
            const len = state.tabConfig.length;
            const index = state.tabConfig.findIndex(int => int.path === activeKey);
            // 去除
            state.tabConfig.splice(index,1);
            const letLast = state.tabConfig.length;
            //去除一个标签后
            if(state.tabConfig.length){
                if(index === 0){
                    // 切换到当前的第一个tab
                    state.activeKey = state .tabConfig[0].path;
                } else if (index === len -1 ){
                    // 末尾 -1 
                    state.activeKey = state.tabConfig[letLast-1].path;
                }else {
                    // 中间位置
                    state.activeKey = state.tabConfig[index].path;
                }
            }else {
                state.activeKey = '';
            }
        },

        ADD_TAB(state, item){
            const index = state.tabConfig.findIndex(int => int.path === item.path)
            // 使用当前时间戳生成唯一key值
            item.id= `${item.path}-${new Date().getTime()}`;
            
            if(index !== -1){
                //新增已存在的书签 ,替换
                state.tabConfig[index] = item;
                // state.tabConfig.splice(state.tabConfig.length)
            }else {
                state.tabConfig.push(item);
            }
        },

        // 刷新tab
        REFRESH_TAB(state, item) {
            const index = state.tabConfig.findIndex(int => int.path === item.path);
            item.id= `${item.path}-${new Date().getTime()}`;
            if(index !== -1){
                //新增已存在的书签 ,替换
                state.tabConfig[index] = item;
            }else {
                state.tabConfig.push(item);
            }
        },

        CHANGE_TABKEY(state, activeKey){
            state.activeKey = activeKey;
        },

        CLOSE_OTHER(state,activeKey){
            //过滤
            state.tabConfig = state.tabConfig.filter(item => item.path === activeKey);
            state.activeKey = activeKey
        },

        CLOSE_TAB(state){
            state.activeKey = '';
            state.tabConfig = []
        }
    },
    actions:{},
    getters:{}
})