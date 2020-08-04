import Vue from "vue";
import VueX from "vuex";

// 安装Vuex
Vue.use(VueX);

export default new VueX.Store({
    state:{
        // status:"完结",
        showStatus:true
    },
    // mutations：是跟踪状态。这里面只能有同步代码，这是必须的。
    mutations:{
        isEnd(state,payload){
            // console.log(payload)
            if(payload.status==="连载"){
                state.showStatus = true;
            }else{
                state.showStatus = false;
            }
       }
    },
    // 如果出现异步操作，就需要使用action，action不是必须的。
    actions:{
        isEnd(context,payload){
            context.commit(payload);
        }
    }
});
