import React, { useState } from 'react';
import './StoryPage.css';

function StoryPage(props) {
    const [question, SetQuestion] = useState(props.questions[0])
    console.log(props)
    return (
        <div className="StoryPage">
            <div className="Question">
                <p>{question.text}</p>
            </div>
            <div className="options">
                {
                    question.options.map((item) => {
                        return (
                            <button onClick={()=>{console.log("clicked");SetQuestion(props.questions[item.actionIndex])}}>{item.text}</button>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default StoryPage;