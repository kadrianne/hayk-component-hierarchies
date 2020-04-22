import React from 'react'

function DeepLink(props){
    const {label,url,description} = props

    return (
        <li>
            <div className="deep-link">
                <h3><a href={url}>{label}</a></h3>
                <p>{description}</p>
            </div>
        </li>
    )
}

export default DeepLink