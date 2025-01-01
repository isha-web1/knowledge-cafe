import React from 'react';

const BookMark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-400 m-4 p-4 rounded-xl'>
           <h1 className='text-2xl'>{title}</h1> 
        </div>
    );
};

export default BookMark;