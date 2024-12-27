
import './App.css'
import Blogs from './components/blogs/Blogs'
import BooksMarks from './components/booksmark/Booksmarks'
import Header from './components/Header/Header'

function App() {
  

  return (
    <>
      <Header></Header>
      <div className='md : flex'>
      <Blogs></Blogs>
      <BooksMarks></BooksMarks>
      </div>
      
    </>
  )
}

export default App
