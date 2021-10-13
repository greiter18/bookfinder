import React, {useState, useEffect}from 'react';
// import axios from "axios";
// import BookIndexItem from "./book_index_item";

const Result = () => {

  const options = {
    headers: {
      common: null
      }
  };

  useEffect(() => {
    //return axios.get(
    //`https://www.googleapis.com/books/v1/volumes?q=${newBooks}&startIndex=${currentPage}&maxResults=${totalBooksShown}`,
    //returnoptions
		//);
  }, [])

  const urlParams = new URLSearchParams(window.location.search);
  // const params = () => {
  //  const newParams = new URLSearchParams(window.location.search)
  //  for (const param of newParams) {
  //    return param
  //     console.log('param---------',param)
  //     console.log('testing')
  //   }
  // }


  return (
    <div>
      Results Page
      {/* {console.log('param------',params())} */}
    </div>
  )
};

export default Result;
