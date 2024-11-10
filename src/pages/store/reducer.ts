let lastId = 0;
const reducer = (state = [], action: any) => {
    if (action.type == 'bugAdded') {
        return [
            ...state,
            {
                id: ++lastId,
                description: 'some details',
                resolved: false
            }
        ]
    }
    else if(action.type == 'bugRemoved') {
        return state.filter((bug: any) => bug.id !== action.payload.id)
    }

    return state;
}

export default reducer;