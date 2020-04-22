import React from 'react'
import SearchResult from './SearchResult'
import QuestionsContainer from './QuestionsContainer'

function SearchResults(props){
    const {knowledgePanel,questions,resultCount,searchResults,searchTime} = props.data

    return (
        <section className="search-results">
            <p className="totals">About {resultCount} search results ({searchTime} seconds)</p>
            <ul>
                <li>
                    <SearchResult 
                        visitFrequency={searchResults[0].visitFrequency}
                        lastVisit={searchResults[0].lastVisit}
                        label={searchResults[0].label}
                        url={searchResults[0].url}
                        description={searchResults[0].description}
                        deepLinks={searchResults[0].deepLinks}
                        appCards={searchResults[0].appCards}
                        appPlatform={searchResults[0].appPlatform} 
                    />
                </li>
                <li>
                    <QuestionsContainer questions={questions}/>
                </li>
                <li>
                    <SearchResult 
                        visitFrequency={searchResults[1].visitFrequency}
                        lastVisit={searchResults[1].lastVisit}
                        label={searchResults[1].label}
                        url={searchResults[1].url}
                        description={searchResults[1].description}
                        deepLinks={searchResults[1].deepLinks}
                        appCards={searchResults[1].appCards}
                        appPlatform={searchResults[1].appPlatform} 
                    />
                </li>
            </ul>
        </section>
    )
}

export default SearchResults