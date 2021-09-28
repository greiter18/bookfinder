import React from 'react';
import RatingStars from './ratingstar'

const ReadBooksIndexItem = ({book , deleteReadBook}) => {

  return(
    <div className="readBook">
      {console.log('redbookindex item ++++++++',book._id)}
      <div >
       <p>Title: {book.title}</p> 
       <p>Author: {book.author}</p> 
      </div>
      <a href={book.link} target="_blank">
       <img src={book?.image} alt={book?.title} />
      </a>
      <p>Rating</p>
      <RatingStars/>
      <textarea name="" id="" value={book.comment} placeholder="What did you think of the book?"></textarea>
      <button onClick={() => deleteReadBook(book._id)}>Remove</button>
    </div>
  )
}

export default ReadBooksIndexItem;