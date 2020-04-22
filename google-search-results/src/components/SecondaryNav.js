import React from 'react'
import NavLink from './NavLink'

function SecondaryNav() {

    const links = [
        {
            icon: "fa fa-search",
            text: "All"
        },{
            icon: "fa fa-newspaper",
            text: "News"
        },{
            icon: "fa fa-map-marked",
            text: "Maps"
        },{
            icon: "fa fa-video",
            text: "Videos"
        },{
            icon: "fa fa-images",
            text: "Images"
        },{
            icon: "fa fa-ellipsis-v",
            text: "More"
        }
    ]

    function mapLinks(){
        return links.map(link => {
            return <NavLink icon={link.icon} text={link.text} />
        })
    }

    return (
        <nav class="secondary-navigation">
            <ul class="search-types">
                {mapLinks()}
            </ul>
            <ul class="configuration">
                <li><a href="#">Settings</a></li>
                <li><a href="#">Tools</a></li>
            </ul>
        </nav>
    )
}

export default SecondaryNav