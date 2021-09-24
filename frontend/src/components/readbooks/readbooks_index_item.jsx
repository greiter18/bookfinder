import React from 'react';

const ReadBooksIndexItem = ({book , deleteReadBook}) => {

  return(
    <div>
      {console.log('redbookindex item ++++++++',book._id)}
      <div>
       <p>Title: {book.title}</p> 
       <p>Author: {book.author}</p> 
      </div>
      <a href={book.link} target="_blank">
       <img src={book?.image} alt={book?.title} />
      </a>
      <div className="radioRating">
       <p>Rating</p>
       <input type="radio" id="five" name="rating" value="5"/>
         <label for="5">5</label>
       <input type="radio" id="four" name="rating" value="4"/>
         <label for="4">4</label>
       <input type="radio" id="three" name="rating" value="3"/>
         <label for="3">3</label>
       <input type="radio" id="two" name="rating" value="2"/>
         <label for="2">2</label>
       <input type="radio" id="one" name="rating" value="1"/>
         <label for="1">1</label>
      </div>
      <button onClick={() => deleteReadBook(book._id)}>Remove</button>
    </div>
  )
}

export default ReadBooksIndexItem;