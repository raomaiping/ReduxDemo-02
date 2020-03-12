import React from 'react';
import {connect} from 'react-redux'
const TodoList = (props)=>{
    let{inputValue,inputChange,clickBtn,list,deleteBtn} = props
    return (
            <div>
                <div>
                    <input 
                        value={inputValue} 
                        onChange={inputChange}
                    />
                    <button onClick={clickBtn}>提交</button>
                </div>
                <ul>
                    {
                        list.map((item,index)=>{
                        return (<li key={index+item} onClick={(()=>deleteBtn(index))}>{item}</li>)
                        })
                    }
                </ul>
            </div>
    )
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
        deleteBtn(index){
            let action = {
                type:'delete',
                index
            }
            dispatch(action)
         }
    }
}
export default connect(stateToProps,dispatchToProps)(TodoList);