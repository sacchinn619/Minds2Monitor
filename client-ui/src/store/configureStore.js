import {createStore,combineReducers,applyMiddleware} from 'redux'
import categoryReducer from  '../reducers/categoryReducer'
import expenseReducer from '../reducers/expenseReducer'
import thunk from 'redux-thunk'
// import reducers here//

const configureStore=()=>{
const store=createStore(combineReducers({
  category:categoryReducer,
  expense:expenseReducer
}),applyMiddleware(thunk))
return store
}
export default configureStore