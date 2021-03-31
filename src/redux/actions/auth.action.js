import firebase from 'firebase'
import auth from '../../firebase'
import { LOAD_RPOFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from '../actionType'

export const login = () => async dispatch => {
    try {
        dispatch({
            type: LOGIN_REQUEST,
        })
        const provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
        const res = await auth.signInWithPopup(provider)
        const accessToken = res.credential.accessToken
        const profile = {
            name: res.additionalUserInfo.profile.name,
            photoURL: res.additionalUserInfo.profile.picture,
        }
        sessionStorage.setItem("ytc-access-token", accessToken)
        sessionStorage.setItem("ytc-user", JSON.stringify(profile))
        dispatch({
            type: LOGIN_SUCCESS,
            payload: accessToken
        })
        dispatch({
            type: LOAD_RPOFILE,
            payload: profile,
        })
    } catch (err) {
        console.log(err.message)
        dispatch({
            type: LOGIN_FAIL,
            payload: err.message
        })
    }
}

export const logout = () => async dispatch => {
    await auth.signOut()
    dispatch({
        type: LOG_OUT,
    })
    sessionStorage.removeItem('ytc-access-token')
    sessionStorage.removeItem('ytc-user')
}