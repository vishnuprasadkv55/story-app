import React from 'react';
import './App.css';
import conf from './questions.json'
import StoryPage from './PageTemplate/StoryPage'

function App() {
  return (
    <div className="App">
      <StoryPage questions={conf.questions}/>
    </div>
  );
}

export default App;
