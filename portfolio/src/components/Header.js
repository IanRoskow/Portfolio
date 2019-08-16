import React from 'react';

const Header = () => {
    return (
        <div className="menu">
            <div className="logo">
                Logo
            </div>
            <a href="/" className="active item">
                Home
            </a>
            <a href="/" className="item">
                Messages
            </a>
            <a href="/" className="item">
                Friends
            </a>
            
        </div>
    )
}

export default Header;