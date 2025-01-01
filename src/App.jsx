
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Navbar from './components/Header/Navbar'


function App() {
  const [bookMarks, setBookmarks]= useState([])

  const handleAddToBookmarks = blog => {
    console.log('bookmark adding soon')
  }

  return (
    <>
      <Navbar></Navbar>
      <div className='md : flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
      <BookMarks></BookMarks>
      </div>
      
    </>
  )
}

export default App
