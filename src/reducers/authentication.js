import * as TYPES from './../constants/ActionTypes'

const initialState = {
    logged_in: false,
    jwt_token : ''
};

export default (state = initialState, action) => {
    switch(action.type){
        case TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                logged_in: true,
                jwt_token: action.jwt_token
            };
        default:
            return state
    }
}
