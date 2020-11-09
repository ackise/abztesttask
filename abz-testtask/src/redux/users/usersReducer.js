import * as actions from "./usersActionTypes";

const initialStore = {
    loading:false,
    // usersList:[],
    data:[]
}

const usersReducer = (store = initialStore,action) =>{
    switch (action.type){
        case actions.GET_USERS:
            return {...store, loading:action.payload}
        // case actions.SAVE_USERS:
        //     return { ...store, usersList: action.payload.users };
        case actions.SAVE_DATA:
            return { ...store, data: action.payload};
        default:
            return store;
    }
}

export default usersReducer;
