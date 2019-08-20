import React from 'react';

const Header = () => {
    return (
        <div className="menu">
            <div className="logo">
                Logo
            </div>
            <a href="/" className="active item">
                About
            </a>
            <a href="/" className="item">
                Projects
            </a>
            <a href="/" className="item">
                Contact
            </a>
            
        </div>
    )
}

export default Header;