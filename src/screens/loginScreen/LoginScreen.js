import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { login } from '../../redux/actions/auth.action'
import './_loginScreen.scss'

const LoginScreen = () => {
    const dispatch = useDispatch()
    const accessToken = useSelector(state => state.auth.accessToken)
    const history = useHistory()
    const handleLogin = () => {
        dispatch(login())
    }
    useEffect(() => {
        if (accessToken) {
            history.push('/')
        }
    }, [accessToken, history])

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
                    alt=''
                />
                <button onClick={handleLogin}>Login With Google</button>
                <p>This Project is made using YOUTUBE DATA API</p>
            </div>
        </div>
    )
}

export default LoginScreen
