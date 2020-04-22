import React from 'react'

function AppCard(props){
    const {content,url,recency,app} = props

    return (
        <li>
            <div className="app-card">
                <a href={url}>
                    <p>{content}</p>
                    <p className="details"><span className="app">{app}</span><time>{recency} ago</time></p>
                </a>
            </div>
        </li>
    )
}

export default AppCard