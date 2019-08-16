import React from 'react';

const Header = () => {
    return (
        <div className="menu">
            <div className="logo">
                Logo
            </div>
            <a className="active item">
                Home
            </a>
            <a className="item">
                Messages
            </a>
            <a className="item">
                Friends
            </a>
            
        </div>
    )
}

export default Header;