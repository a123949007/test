import {handleActions} from 'redux-actions'
const getDefaultArr = ()=>{
    let storage = window.localStorage
    if(!storage.getItem('arr')){
        return [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    }else{
        return (storage.getItem('arr').split(',').map((item)=>{
            return Number(item)
        }))
    }
}

export const search = handleActions({
    REQUEST_LIST: (state, action) => ({
        ...state,
        isFetching: true
    }),
    RECEIVE_LIST: (state, action) => ({
        ...state,
        isFetching: false,
        data: action.payload
    }),
    CHANGE_COLUMNS:(state,action)=>({
        ...state,
        arr:action.payload
    })
}, {
    isFetching: false,
    data: [],
    arr:getDefaultArr()
});