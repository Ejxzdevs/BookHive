import {useState , useEffect } from 'react';
import axios from 'axios';

interface books {
  book_title: string
  book_description: string
}
const Product : React.FC= () => {

  const [books, setBooks] = useState<books[]>([]);

  useEffect(() => {
    // Fetch books from the API
    axios.get('http://localhost:8080/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);


  return (
    <div>
      <ul>
      {books.map((book,index)=>{
        return (
          <li key={index} >
              <p>{book.book_title}</p>
              <span>{book.book_description}</span>  
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default Product
