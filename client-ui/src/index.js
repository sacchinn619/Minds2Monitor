import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {startGetCategory} from './actions/categoryAction'
import {startGetExpense} from './actions/expenseAction'

const store =configureStore()
console.log(store.getState())
store.subscribe(()=>{
    console.log(store.getState())
})
//handle page reload// 
store.dispatch(startGetCategory())
store.dispatch(startGetExpense ())
const jsx= (
      <Provider store={store}>
      <App/>
      </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'))


