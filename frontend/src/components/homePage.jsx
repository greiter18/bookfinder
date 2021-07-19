import React, {useState} from 'react';
import axios from "axios";

const HomePage = () => {
  const [book, setBook] = useState('');

  const handleChange = () => {
    console.log('book-----------',book)
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
        for (var i = 0; i < response.data.items.length; i++) {
        var item = response.data.items[i];
          document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.title;
      }
    }
      )
  }

  const findBooks = (book) => {
    let newBooks = book.split(' ').join("+")
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${newBooks}`)
  }

  // function handleResponse(response) {
  //   for (var i = 0; i < response.items.length; i++) {
  //     var item = response.items[i];
  //     // in production code, item.text should have the HTML entities escaped.
  //     document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.title;
  //    // https://www.googleapis.com/books/v1/volumes?q=
  //   }
  // }

  return(
    <div>
      <h1>Bookfinder</h1>
      <form onSubmit={handleSubmit}>
        What book do you want
        <input type="text" onChange={handleChange()}/>
        <button>Find Book</button>
      </form>
      <div id="content"></div>
      
    </div>
  )
}

export default HomePage;