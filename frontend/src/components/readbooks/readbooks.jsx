import React, {useEffect} from 'react';
import ReadBooksIndexItem from './readbooks_index_item';


const Readbook = ({readbooks, fetchReadBooks, currentUser, deleteReadBook}) => {
  useEffect(() => {
    fetchReadBooks(currentUser.id)
  }, [])

  const setReadBooks = readbooks.map((book) => {
    return <ReadBooksIndexItem book={book} deleteReadBook={deleteReadBook} />
  })

  const readCount = () => {
    return readbooks.length;
  };

  return (
    <div>
      <div className="readBooks">
        <h1>Your Read Books ({readCount()})</h1>
        {setReadBooks}
      </div>
    </div>
  )
}

export default Readbook;