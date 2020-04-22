import React from 'react'

function PrimaryNav() {
    return (
        <div class="primary-navigation">
            <span id="logo"><a href="https://google.com"><img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google logo" /></a></span>
            <form class="search-input"><input type="text" name="searchText" /><i class="fa fa-search"></i></form>
            <nav class="user-navigation">
                <ul>
                    <li class="apps"><a href="#"><i class="fa fa-th"></i></a></li>
                    <li class="profile"><a href="#"><img src="https://lh3.googleusercontent.com/-W85Kft4LxYk/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfuaNPMpoEmUvu4WR_lx0wXeH32pg.CMID/s64-c/photo.jpg" alt="Profile" /></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default PrimaryNav