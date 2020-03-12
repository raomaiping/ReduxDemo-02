import React, { Component } from 'react';
import {connect} from 'react-redux'
class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div>
                <div>
                    <input value={this.props.inputValue}/>
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

export default connect(stateToProps,null)(TodoList);