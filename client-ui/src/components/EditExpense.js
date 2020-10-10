import React from 'react'
import {connect} from 'react-redux'
import {startEditExpense} from '../actions/expenseAction'
class EditExpense extends React.Component{
    constructor(props){
        super(props)
        this.state={
                category:this.props.expense?.category,
                item:this.props.expense?.item,
                amount:this.props.expense?.amount,
                date:this.props.expense?.createdAt
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
        createdAt:this.state.date
    }
    // console.log(formData)
    this.props.dispatch(startEditExpense(formData,this.props.match.params.id))
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
                <input class="form-control" type="text" name="item"onChange={this.handleChange}  style={{width:"40%"}}/><br/>
                <label>Amount</label><br/>
                <input class="form-control"  type="text" name="amount"onChange={this.handleChange} style={{width:"40%"}}/><br/>
                <label>Date</label><br/>
                <input class="form-control"  type="text" name="date" onChange={this.handleChange} style={{width:"40%"}}/><br/>
                <input class="btn btn-danger"  type="submit" value="submit" style={{width:"40%"}}/>
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state, props)=>{
    console.log(props)
return{
    expense:state.expense.find((ele)=>{// customer:[ {},{},{},{},{} ] //
        return ele._id==props.match.params.id  
//*Will return the customer object witin the customers array that matches the ID from the find function//*
        
    }),
    category:state.category
    
    }
    
}

export default connect(mapStateToProps)(EditExpense)