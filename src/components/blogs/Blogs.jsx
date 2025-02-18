import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleAddToBookmarks, handleReadTime}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('./blog.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='md:w-2/3'>
           <h1 className="text-4xl">Blog :{blogs.length}</h1> 
           {
            blogs.map(blog => <Blog
            blog={blog}
            key={blog.id}
            handleAddToBookmarks={handleAddToBookmarks}
            handleReadTime={handleReadTime}
            ></Blog>)
           }
        </div>
    );
};

export default Blogs;