import React from 'react';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({bookMarks}) => {
    return (
        <div className='bg-gray-300 ml-6 mt-4'>
            <h1 className="text-4xl text-center">bookmarked Blog : {bookMarks.length}</h1>
            {
                bookMarks.map((bookmark, idx) => <BookMark key={idx} bookmark={bookmark}></BookMark>)
            }
        </div>
    );
};

export default BookMarks;