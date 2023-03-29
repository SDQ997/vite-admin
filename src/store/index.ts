import { createStore } from "vuex"

export default createStore({
    state:{
        lang:"",
        slideIsRetract:false
    },
    getters:{
        lang:(state)=>{
            let sysLang = navigator.language.split("-")[0]
            state.lang = localStorage.getItem("lang") || (sysLang || 'zh').toLocaleLowerCase()
            return state.lang
        }
    },
    mutations:{
        changeState(state,options){
            state[options.key] = options.value
        }
    },
    actions:{

    },
    modules:{

    }
})