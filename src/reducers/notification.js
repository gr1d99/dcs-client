import * as types from './../constants/ActionTypes'

const initialState = {
    type: '',
    message: ''
};

export default (state = initialState, action) => {
    switch (action.type){
        case types.WARNING_NOTIFICATION:
            return {
                ...state,
                type: action.notification_type,
                message: action.notification_message
            };
        default:
            return state
    }
}
