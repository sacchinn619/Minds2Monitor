import React from 'react'
import moment from 'moment'
import {connect} from 'react-redux'
import {startRemoveExpense} from '../actions/expenseAction'

class Home extends React.Component {
  constructor(props){
   super(props)
    this.state={

    }
  }
  handleExpense=()=>{
    this.props.history.push('/expense')
  }
  handleSetting=()=>{
    this.props.history.push('/setting')
  }
  handleUpdate=(id)=>{
     this.props.history.push(`/expense/edit/${id}`)
  }
  handleDelete=(id)=>{
    const confirm= window.confirm('are you sure?')
    if (confirm){
      this.props.dispatch(startRemoveExpense(id))
    }
     
  }
  render(){
    return(
      <div class="container" style={{border:"1px solid black"}}>
        <div style={{border:"1px solid black"}}>
          <h4 style={{textAlign:"center"}}> Expenses</h4>
        </div>
       <div class="row"  >
            <div class="col-md-2" style={{border:"1px solid black"}} >
            <h4 class="card" style={{backgroundColor:"lightgoldenrodyellow"}}>Home</h4>
            <h4 class="card" style={{backgroundColor:'lightgoldenrodyellow'}} onClick={()=>{this.handleSetting()}}>Setings</h4>
            <h4 class="card" style={{backgroundColor:'lightgoldenrodyellow'}}>Profile</h4>
            </div>
            <div class="col-md-10">
              
              <div class="row">
                <div class="col-md-6">
            <div class="card" style={{width: "18rem"}}>
            <div class="card-header">
               Budget Overview
            </div>
            <div class="row">
              <div class="col-md-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/English_dialects1997.svg/220px-English_dialects1997.svg.png"/>
              </div>
              <div class="col-md-6">
              <p>Total Budget </p>
              <p>Rs 200000</p>
              <p>Total Expenses </p>
              <p>Rs 5000</p>
              </div>
            </div>
            </div></div>
            <div class="col-md-6">
            <div class="card" style={{width: "18rem"}}>
            <div class="card-header">
               Budget Overview
            </div>
            <div class="row">
              <div class="col-md-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/English_dialects1997.svg/220px-English_dialects1997.svg.png"/>
              </div>
              <div class="col-md-6">
              <p>Total Budget </p>
              <p>Rs 200000</p>
              <p>Total Expenses </p>
              <p>Rs 5000</p>
              </div>
            </div>
            
            </div>
            </div>
            </div>
        <button class="btn btn-danger"onClick={()=>{this.handleExpense()}}>Add Expense</button><br/>
        <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col" class="text-warning">Category</th>
      <th scope="col"class="text-warning">Item</th>
      <th scope="col"class="text-warning">Amount</th>
      <th scope="col"class="text-warning">Expense Date</th>
      <th scope="col"class="text-warning">Actions</th>

  </tr>
  </thead>
  <tbody>
    
    {this.props.expense.map((ele)=>{
    return(<tr key={ele._id}>
        <td>{ele.category}</td>
        <td>{ele.item}</td>
        <td>{ele.amount}</td>
        <td>{moment(ele.createdAt).format('DD-MM-YYYY')}</td>
        <td><button class="btn btn-success" onClick={()=>{this.handleUpdate(ele._id)}}>Update</button><button class="btn btn-danger"onClick={()=>{this.handleDelete(ele._id)}}>Delete</button></td>
      </tr>)
    })}
    
   
  </tbody>
</table>
            </div>
            
          </div>
        
        
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
return {
  expense:state.expense
}
}
export default connect(mapStateToProps)(Home)