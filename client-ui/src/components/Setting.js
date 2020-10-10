import React from 'react'
import {connect} from 'react-redux'
import {startCategory} from '../actions/categoryAction'

class Setting extends React.Component{
    constructor(props){
        super(props)
        this.state={
         update:'',
         category:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=()=>{
        const data={
        category:this.state.category
        }
        this.props.dispatch(startCategory(data))
    }
    render(){
        return(
            <div class="container">
                
                    <lable>Total Budget</lable>
                    <input class="form-control" type="text" name="budget" onChange={this.handleChange}placeholder="20000"/><button class="btn btn-info">Update</button><br/>
                    <lable>Categoriesss</lable>
                    <input class="form-control" type="text" name="category" onChange={this.handleChange}placeholder="Add Category name here"/><button onClick={()=>{this.handleSubmit()}} class="btn btn-info">Add category</button>
                    <h4 style={{textDecoration:"underline"}}>listing all categories</h4>
       {this.props.category.map((ele)=>{
          return <div class="table table-bordered"><td>{ele.category} <button class="btn btn-danger">Delete</button></td></div>
        })}
        
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
  return{
    category:state.category
  }
}
export default connect(mapStateToProps) (Setting)