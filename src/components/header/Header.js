import React from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdApps, MdNotifications } from 'react-icons/md'
import './_header.scss'

const Header = ({ handleToggleSidebar }) => {
    return (
        <div className="header">
            <FaBars 
                onClick={handleToggleSidebar}
                className="header__menu" 
                size={26} 
            />
            <img 
                src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
                alt="youtube"
                className="header__logo"
            />
            <form>
                <input type="text" placeholder="Search" />
                <button type="submit">
                    <AiOutlineSearch />
                </button>
            </form>
            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img 
                    src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                    alt="avatar"
                />
            </div>
        </div>
    )
}

export default Header
