import React from 'react';

const ReadBooksIndexItem = ({book , deleteReadBook}) => {

  return(
    <div>
      {console.log('redbookindex item ++++++++',book._id)}
      {book.title}
      <button onClick={() => deleteReadBook(book._id)}>Remove</button>
    </div>
  )
}

export default ReadBooksIndexItem;