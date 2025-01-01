
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Navbar from './components/Header/Navbar'


function App() {
  const [bookMarks, setBookmarks]= useState([])
  const [readTime, setRedTime] = useState(0)

  const handleAddToBookmarks = blog => {
    const newBookMark = [...bookMarks, blog]
    setBookmarks(newBookMark)
  }

  const handleReadTime = time =>{
    const newReadTime = readTime + time;
    setRedTime(newReadTime)
  }

  return (
    <>
      <Navbar></Navbar>
      <div className='md : flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmarks={handleAddToBookmarks} handleReadTime={handleReadTime}></Blogs>
      <BookMarks bookMarks={bookMarks} readTime={readTime}></BookMarks>
      </div>
      
    </>
  )
}

export default App
