import React, {useState} from 'react';
import axios from "axios";


const HomePage = () => {
  const [book, setBook] = useState('');
  const [bookList, setBookList] = useState([])

  const handleChange = () => {
    return (e) => {
      e.preventDefault();
      setBook(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    findBooks(book)
      .then((response) => {
        console.log(response)
        //
        setBookList(response.data.items)
        // (book => {
        //   return <BookIndexItem book={book.volumeInfo} key={book.id} />
        // })
        // for (var i = 0; i < response.data.items.length; i++) {
        // let item = response.data.items[i];
        // //let items = response.data.items[i];
        //   document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.title;
        //   document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.authors;
        //   document.getElementById("content").innerHTML += "<br>" + `<img src=${item.volumeInfo.imageLinks.thumbnail}/>`; 
      //}
    }
      )
  }

  const findBooks = (book) => {
    let newBooks = book.split(' ').join("+")
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${newBooks}`)
  }

  const list = bookList.map(book => {
    // return <BookIndexItem book={book.volumeInfo} key={book.id} />
    return <h1>{book.volumeInfo.title}</h1>
  }) 

  return(
    <div>
      <h1>Bookfinder</h1>
      <form onSubmit={handleSubmit}>
        What book do you want
        <input type="text" onChange={handleChange()}/>
        <button>Find Book</button>
      </form>
      <div id="content">
        {list}
      </div>
    </div>
  )
}

export default HomePage;