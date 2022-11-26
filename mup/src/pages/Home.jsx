import './Home.css'
import BookCard from '../components/BookCard'
import { Typography, Grid, Paper } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Masonry from 'react-masonry-css'


function Home() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/books')
    .then( res => res.json() )
    .then( data => { setBooks(data) })
  }, [])

  const deleteBook = async (id) => {
    console.log('You are deleting me', id)
    await fetch(`http://localhost:8000/books/` + id, {
      method: 'DELETE'
    })
    const newBooksList = books.filter((book) => book.id != id)
    setBooks(newBooksList)
  }

  const breakpoints = {
    default: 3,
    1300: 2,
    1000: 1
  }
  
  return (
    <Container maxWidth='lg'>
      <Typography
        sx={{ marginTop: 2, marginBottom:4, textDecorationLine: 'underline' }}
        variant='h5'
        component='h1'
        gutterBottom
        color='textSecondary'
        fontWeight='800'
      >
        Books Page
      </Typography>

      <Container>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {books.map((book) => (
              <div key={book.id}>
                <BookCard book={book} deleteBook={deleteBook}/>
              </div>
          ))}
       </Masonry>
      </Container>
    </Container>
  )
}

export default Home