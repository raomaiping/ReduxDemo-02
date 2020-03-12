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

    if(action.type === 'addItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if(action.type === 'delete'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }

    return state
}