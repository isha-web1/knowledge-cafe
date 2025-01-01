import React from 'react';
import {  FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmarks}) => {
    const {title, cover,author_img,author,reading_time,hashtags,posted_date}= blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`this is the cover picture${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                     <img className='w-14' src={author_img} alt="" />
                     <div className='ml-6'>
                        <h1 className='text-2xl'>{author}</h1>
                        <p>{posted_date}</p>
                     </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                    onClick={()=>handleAddToBookmarks(blog)}
                     className='ml-2 text-red-400 text-2xl'
                    ><FaBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl">title :{title}</h2>
            {
                hashtags.map((hash ,idx)=> <span key={idx}> <a href="">#{hash}</a> </span> )
            }
        </div>
    );
};

export default Blog;