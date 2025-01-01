
import './App.css'
import Blogs from './components/blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Navbar from './components/Header/Navbar'


function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <div className='md : flex'>
      <Blogs></Blogs>
      <BookMarks></BookMarks>
      </div>
      
    </>
  )
}

export default App
