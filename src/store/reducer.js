const defaulfState = {
    inputValue:'前端小菜鸟吖',
    list:[]
}

export default (state = defaulfState,action)=>{

    if(action.type === 'inputChange'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    return state
}