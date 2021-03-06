import * as types from '../actionType'

const initialState = {
    accessToken: sessionStorage.getItem("ytc-access-token") ? sessionStorage.getItem("ytc-access-token") : null,
    user: sessionStorage.getItem("ytc-user") ? sessionStorage.getItem("ytc-user") : null,
    loading: false,
}

export const authReducer = (prevState = initialState, { type, payload }) => {
    switch (type) {
        case types.LOGIN_REQUEST:
            return {
                ...prevState,
                loading: true,
            }
        case types.LOGIN_SUCCESS:
            return {
                ...prevState,
                accessToken: payload,
                loading: false,
            }
        case types.LOGIN_FAIL:
            return {
                ...prevState,
                accessToken: null,
                loading: false,
                error: payload,
            }
        case types.LOAD_RPOFILE:
            return {
                ...prevState,
                user: payload,
            }
        case types.LOG_OUT:
            return {
                ...prevState,
                accessToken: null,
                user: null,
            }
        default:
            return prevState
    }
}