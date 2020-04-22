import React from 'react'
import DeepLink from './DeepLink'
import AppCard from './AppCard'

function SearchResult(props){
    const {visitFrequency,lastVisit,label,url,description,deepLinks,appCards,appPlatform} = props

    const showVisits = () => {
        return (
            visitFrequency > 0
            ? <p className="last-visit">You've visited this page {visitFrequency} times. Last visit: 12/16/19</p>
            : null
        )
    }

    const showDeepLinks = () => {
        return (
            deepLinks.length > 0
            ? <div className="deep-links">
                <ul>
                    {mapDeepLinks()}
                </ul>
                <p className="more-links"><a href="https://www.google.com?q=+site:https://flatironschool.com+Flatiron+School">More results from https://flatironschool.com »</a></p>
            </div>
            : null
        )
    }

    const showAppIcon = () => {
        return (
            appPlatform !=undefined
            ? <img src={appPlatform.imageUrl}/>
            : null
        )
    }

    const showAppCards = () => {
        return (
            appCards.length > 0
            ? <ul className="app-cards">
                {mapAppCards()}
            </ul>
            : null
        )
    }

    function mapDeepLinks(){
        return deepLinks.map(link => {
            return (
                <DeepLink
                    label={link.label}
                    url={link.url}
                    description={link.description}
                />
            )
        })
    }

    function mapAppCards(){
        return appCards.map(card => {
            return (
                <AppCard
                    content={card.content}
                    url={card.url}
                    recency={card.recency}
                    app={card.app}
                />
            )
        })
    }

    return (
        <div className="search-result">
            <h3><a href={url}>{label}</a></h3>
            <p className="url">{url}{showAppIcon()}</p>
            <p className="description">{description}</p>
            {showVisits()}
            {showDeepLinks()}
            {showAppCards()}
        </div>
    )
}

export default SearchResult

SearchResult.defaultProps = {
    visitFrequency: 0,
    lastVisit: null,
    label: "Link Title",
    url: "https://example.com",
    description: "This is a description.",
    deepLinks: [],
    appCards: [],
    appPlatform: undefined
}