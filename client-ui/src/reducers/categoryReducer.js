const categoryInitialState=[]
 const categoryReducer=(state=categoryInitialState,action)=>{
 switch(action.type){
     case 'SET_CATEGORY' :{
         return state.concat(action.payload)
     }
     default:{
         return state
     }
 }
 }
 export default categoryReducer
