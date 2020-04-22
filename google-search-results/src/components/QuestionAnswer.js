import React from 'react'

function QuestionAnswer(props){
    const {label,url,description} = props

    return (
        <div className="question-answer">
            <header>
                <h3>{props.summary}</h3>
                <i className="fa fa-angle-up"></i>
            </header>
        </div>
    )
}

export default QuestionAnswer