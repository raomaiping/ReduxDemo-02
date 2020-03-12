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
                    <button>提交</button>
                </div>
                <ul>
                    <li>前端小菜鸟吖</li>
                </ul>
            </div>
         );
    }


}

 
const stateToProps = (state) =>{
    return {
        inputValue:state.inputValue
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
        }
    }
}

export default connect(stateToProps,dispatchToProps)(TodoList);