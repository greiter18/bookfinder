import React, {useEffect} from 'react';
import ReadBooksIndexItem from './readbooks_index_item'


const Readbook = ({readbooks, fetchReadBooks, currentUser, deleteReadBook}) => {
  useEffect(() => {
    fetchReadBooks(currentUser.id)
  }, [])

  const setReadBooks = readbooks.map((book) => {
    return <ReadBooksIndexItem book={book} deleteReadBook={deleteReadBook} />
  })
  return (
    <div>
      <h1>Read Books</h1>
      {setReadBooks}
    </div>
  )
}

export default Readbook;