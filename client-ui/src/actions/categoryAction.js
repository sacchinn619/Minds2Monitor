import axios from '../config/axios'
export const setCategory=(category)=>{
    return{ type:'SET_CATEGORY', payload: category }
}
export const startCategory=(data)=>{
    return (dispatch)=>{
     axios.post('api/category',data)
     .then((response)=>{
        if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }     else{
                alert('Category sucessfully Added')
                dispatch(setCategory(response.data))
                
            }
     })
     .catch((err)=>{
         console.log(err)
     })
    }
 }
 export const startGetCategory=()=>{
    return(dispatch)=>{
     axios.get('api/category')
     .then((response)=>{
         const category=response.data
         dispatch(setCategory(category))
     })
     .catch((err)=>{
         alert(err)
     })
    }
}