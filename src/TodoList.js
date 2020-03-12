import React, { Component } from 'react';
import {connect} from 'react-redux'
class TodoList extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <input 
                        value={this.props.inputValue} 
                        onChange={this.props.inputChange}
                    />
                    <button onClick={this.props.clickBtn}>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                        return (<li key={index+item} onClick={this.props.delete.bind(this,index)}>{item}</li>)
                        })
                    }
                </ul>
            </div>
         );
    }


}

 
const stateToProps = (state) =>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}
const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            let action = {
                type:'inputChange',
                value:e.target.value
            }   
            dispatch(action)
        },
        clickBtn(){
           let action = {type:'addItem'}
           dispatch(action)
        },
        delete (index){
            let action = {
                type:'delete',
                index
            }
            dispatch(action)
         }
    }
}

export default connect(stateToProps,dispatchToProps)(TodoList);