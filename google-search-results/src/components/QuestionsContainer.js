import React from 'react'
import QuestionAnswer from './QuestionAnswer'

function QuestionsContainer(props){
    const mapQuestions = () => {
        return props.questions.map(question => {
            return <QuestionAnswer summary={question.summary}/>
        })
    }

    return (
        <div className="question-answers">
            <h3>People also ask</h3>
            {mapQuestions()}
        </div>
    )
}

export default QuestionsContainer