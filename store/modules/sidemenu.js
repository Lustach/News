export default{
    namespace:true,
    state:{
        flag:'false',
    },
    getters:{
        showpager(state){
            console.log("I am here")
            return state.flag
            
        }
    },
    mutations:{
        ShowPage(state,payload){
            state.flag = true
            console.log(state.flag);
        }
    },
    actions:{
        
    }
}