import * as types from './type'
const initialState = {
    users: [],
    loading: false,
    error: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.Loading:
        case types.CreateUserStart:
        case types.DeleteUserStart:
        case types.UpdateUserStart:
            return {
                ...state,
                loading: true,
            }
        case types.Success:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case types.CreateUserSuccess:
        case types.UpdateUserSuccess:
            return {
                ...state,
                loading: false,
            }
        case types.DeleteUserSuccess:

            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload),
            }
        case types.Error:
        case types.CreateUserError:
        case types.DeleteUserError:
        case types.UpdateUserError:
            return {
                ...state,
                loading: false,
                error: action.payload,

            }
        default:
            return state;
    }
}

export default userReducer;