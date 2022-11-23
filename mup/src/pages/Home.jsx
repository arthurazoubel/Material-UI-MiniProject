import BookCard from '../components/BookCard'
import { Typography, Grid, Paper } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import { useState } from 'react'


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

  
  return (
    <Container maxWidth='lg'>
      <Typography
        sx={{ marginTop: 2, marginBottom:4, textDecorationLine: 'underline' }}
        variant='h4'
        component='h1'
        gutterBottom
        color='textSecondary'
        fontWeight='800'
      >
        Books Page
      </Typography>

      <Container>
        <Grid container spacing={3}>
          {books.map((book) => (
              <Grid key={book.id} item xs={12} md={6} lg={4}>
                <BookCard book={book} deleteBook={deleteBook}/>
              </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  )
}

export default Home