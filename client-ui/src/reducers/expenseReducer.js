const expenseInitialState=[]

 const expenseReducer=(state=expenseInitialState,action)=>{
    switch(action.type){
        case 'SET_EXPENSE':{
            return state.concat(action.payload)
        }
        case 'EDIT_EXPENSE':{
            return state.map(ele=>{
                if(ele._id==action.payload.id){
                    return Object.assign({},ele,action.payload.data)
                    
                }
                else{
                    return Object.assign({},ele)
                }
            })
            
        }
        case 'REMOVE_EXPENSE':{
            return state.filter((ele)=>{
                return ele._id !=(action.payload._id)
            })
        }
        default:{
            return state
        }
    }
}
export default expenseReducer