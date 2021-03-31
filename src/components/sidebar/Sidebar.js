import React from 'react'
import './_sidebar.scss'
import { MdExitToApp, MdHistory, MdHome, MdLibraryBooks, MdSentimentDissatisfied, MdSubscriptions, MdThumbUp } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/auth.action'

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <nav onClick={handleToggleSidebar} className={sidebar ? "sidebar open" : "sidebar"}>
            <li>
                <MdHome size={23} />
                <span>Home</span>
            </li>
            <li>
                <MdSubscriptions size={23} />
                <span>Subscriptions</span>
            </li>
            <li>
                <MdThumbUp size={23} />
                <span>Liked Video</span>
            </li>
            <li>
                <MdHistory size={23} />
                <span>History</span>
            </li>
            <li>
                <MdLibraryBooks size={23} />
                <span>Library</span>
            </li>
            <li>
                <MdSentimentDissatisfied size={23} />
                <span>I don't Know</span>
            </li>
            <hr />
            <li onClick={logoutHandler}>
                <MdExitToApp size={23} />
                <span>Log Out</span>
            </li>
            <hr />
        </nav>
    )
}

export default Sidebar
