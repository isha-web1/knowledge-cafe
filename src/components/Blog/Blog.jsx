import React from 'react';

const Blog = ({blog}) => {
    const {title, cover,author_img,author,reading_time,hashtags,posted_date}= blog;
    return (
        <div>
            <img src={cover} alt={`this is the cover picture${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                     <img className='w-14' src={author_img} alt="" />
                     <div className='ml-6'>
                        <h1 className='text-2xl'>{author}</h1>
                        <p>{posted_date}</p>
                     </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
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