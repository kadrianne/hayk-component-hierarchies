import React from 'react'
import SearchResults from './SearchResults'
import SearchHighlights from './SearchHighlights'

function Main(props){
    const data = props.data
    
    return (
        <main>
            <SearchResults data={data}/>
            <SearchHighlights />
        </main>
    )
}

export default Main