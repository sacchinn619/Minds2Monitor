import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import Expense from './components/Expense'
import Setting from './components/Setting'
import EditExpense from './components/EditExpense'


function App() {
  return (<BrowserRouter>
          <div className="container-fluid">
            <Switch>
               <Route path='/' component={Home} exact={true}/>
               <Route path= '/expense' component={Expense} exact={true}/>
               <Route path='/setting' component={Setting}/>
               <Route path='/expense/edit/:id' component={EditExpense}/>
            </Switch>
          </div>
    </BrowserRouter>)
}

export default App
