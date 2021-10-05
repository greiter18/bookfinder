import React from 'react';
import RatingStars from './ratingstar';
import StarRating from './starrating';

const ReadBooksIndexItem = ({book , deleteReadBook}) => {

  return(
    <div className="readBook">
      <div className="readImage">
        <a href={book.link} target="_blank" className='mainbookimageA'>
        <img src={book?.image} alt={book?.title} className="mainbookimage"/>
        </a>
        <StarRating/>
      </div>
      <div className="readBookInfo">
        <p>{book.title}</p> 
        <p>By {book.author}</p> 
        <textarea name="" id="" value={book.comment} placeholder="What did you think of the book?"></textarea>
        <button onClick={() => deleteReadBook(book._id)}>Remove</button>
      </div>
    </div>
  )
}

export default ReadBooksIndexItem;