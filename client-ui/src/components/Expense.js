import React from 'react'
import {connect} from 'react-redux'
import {startExpense} from '../actions/expenseAction'
class Expense extends React.Component{
    constructor(props){
        super(props)
        this.state={
                category:'',
                item:'',
                amount:'',
                createdAt:''
        }
    }
    handleChange=(e)=>{
      this.setState({
          [e.target.name]:e.target.value
      })
    }
    handleSubmit=(e)=>{
    e.preventDefault()
    const formData={
        category:this.state.category,
        item:this.state.item,
        amount:this.state.amount,
        createdAt:this.state.createdAt
    }
    this.props.dispatch(startExpense(formData))
    this.setState({
                category:'',
                item:'',
                amount:'',
                createdAt:''
    })
    }
    render(){
        return(
            <div>
            <h4 style={{textDecoration:"underline",color:"green"}}>Add Expense</h4>
                <form onSubmit={this.handleSubmit}>
                <label>Category</label>
                    <div><select value={this.state.category} name="category" onChange={this.handleChange}class="form-control" style={{width:"40%"}}> 
                    <option value="">--Select category--</option>
                    {this.props.category.map((ele)=>{
                        return <option value={ele.category}>{ele.category}</option>
                    })}
                </select><br/></div>  
                <label>Item</label><br/>
                <input class="form-control" type="text" name="item"onChange={this.handleChange} placeholder="item" style={{width:"40%"}}/><br/>
                <label>Amount</label><br/>
                <input class="form-control"  type="text" name="amount"onChange={this.handleChange} placeholder="Rs.." style={{width:"40%"}}/><br/>
                <label>Date</label><br/>
                <input class="form-control"  type="text" name="createdAt" onChange={this.handleChange} placeholder="Date" style={{width:"40%"}}/><br/>
                <input class="btn btn-danger"  type="submit" value="submit" style={{width:"40%"}}/>
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        category:state.category
    }
}
export default connect(mapStateToProps) (Expense)