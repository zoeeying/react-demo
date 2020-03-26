import React from 'react'
import './App.css'
import CommentList from './components-hoc/CommentList'
import BlogPost from './components-hoc/BlogPost'

function App() {
  return (
    <div className="App">
      <CommentList />
      <BlogPost id={2} />
    </div>
  )
}

export default App
