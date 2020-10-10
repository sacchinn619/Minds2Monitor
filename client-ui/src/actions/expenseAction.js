import axios from '../config/axios'

export const setExpense=(expense)=>{
return{type:'SET_EXPENSE',payload:expense}
}

export const startExpense=(data)=>{
return (dispatch)=>{
    axios.post('/api/expense',data)
    .then((response)=>{
       dispatch(setExpense(response.data))
    })
    .catch((err)=>{
        console.log(err)
    })
}
} 
export const startGetExpense=()=>{
    return(dispatch)=>{
     axios.get('api/expense')
     .then((response)=>{
         const expense=response.data
         dispatch(setExpense(expense))
     })
     .catch((err)=>{
         alert(err)
     })
    }
}
export const editExpense=(id,data)=>{
    return{type:'EDIT_EXPENSE',payload:{id,data}}
}

export const startEditExpense=(data,id)=>{
 return (dispatch)=>{
   axios.put(`/api/expense/${id}`,data)
   .then((response)=>{
       const data=response.data
       dispatch(editExpense(id,data))
   })
   .catch((err)=>{
       console.log(err)
   })
 }
}
export const removeExpense=(data)=>{
    return {type:'REMOVE_EXPENSE', payload:data}
    }
    export const startRemoveExpense=(id)=>{
        return function(dispatch){
            axios.delete(`/api/expense/${id}`)
            .then((response)=>{
                const data=response.data
                dispatch(removeExpense(data))
            })
        }
    
    }