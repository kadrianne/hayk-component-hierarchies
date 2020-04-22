import React from 'react'

function PrimaryNav() {
    return (
        <div className="primary-navigation">
            <span id="logo"><a href="https://google.com"><img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google logo" /></a></span>
            <form className="search-input"><input type="text" name="searchText" /><i className="fa fa-search"></i></form>
            <nav className="user-navigation">
                <ul>
                    <li className="apps"><a href="#"><i className="fa fa-th"></i></a></li>
                    <li className="profile"><a href="#"><img src="https://lh3.googleusercontent.com/-W85Kft4LxYk/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfuaNPMpoEmUvu4WR_lx0wXeH32pg.CMID/s64-c/photo.jpg" alt="Profile" /></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default PrimaryNav