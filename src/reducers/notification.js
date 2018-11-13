import * as types from './../constants/ActionTypes'

const initialState = {
    kind: '',
    message: ''
};

export default (state = initialState, action) => {
    switch (action.type){
        case types.WARNING_NOTIFICATION:
            return {
                ...state,
                kind: action.kind,
                message: action.message
            };
        default:
            return state
    }
}
