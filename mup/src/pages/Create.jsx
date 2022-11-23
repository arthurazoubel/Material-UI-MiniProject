import React from 'react'
import { Typography, Button, Container, FormLabel, RadioGroup, FormControlLabel, Radio, FormControl, Box } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import { TextField } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Create() {

  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [storyline, setStoryline] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [storylineError, setStorylineError] = useState(false)
  const [genre, setGenre] = useState('romance')
  const book = {title:'', author:'', storyline:'', genre:''}

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setStorylineError(false)

    if (title && storyline) {
      fetch('http://localhost:8000/books', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({title, author, storyline, genre})
      }).then(() => {
        navigate('/')
      })
      
    }

    if (title == '') {
      setTitleError(true)
    }
    if (storyline == '') {
      setStorylineError(true)
    }
  }

  return (
    <Container maxWidth='lg'>
      <Typography
        sx={{marginTop:2, textDecorationLine:'underline'}}
        variant='h5'
        component='h1'
        gutterBottom
        color='textSecondary'
        fontWeight='800'
      >
        Create a New Book
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          onChange={(e)=>{setTitle(e.target.value)}}
          sx={{marginTop: 2, marginBottom: 3}}
          color='secondary'
          label='Book Title'
          variant='outlined'
          fullWidth
          required
          error={titleError}
        />

        <TextField
          onChange={(e)=>{setAuthor(e.target.value)}}
          sx={{ marginBottom: 3}}
          color='secondary'
          label='Author'
          variant='outlined'
          fullWidth
        />

        <TextField 
          onChange={(e)=>{setStoryline(e.target.value)}}
          sx={{marginBottom: 3}}
          color='secondary'
          label='Book Storyline'
          variant='outlined'
          fullWidth
          multiline
          rows={'4'}
          required
          error={storylineError}
        />

        <Box sx={{display:'flex', flexDirection:'column'}}>
          <FormControl sx={{width:'15%'}}>
            <FormLabel id="genre-radio-buttons">Genre</FormLabel>
            <RadioGroup
              aria-labelledby="genre-radio-buttons"
              defaultValue="romance"
              name="radio-buttons-group"
              sx={{marginBottom: 3}}
              value={genre}
              onChange={(e)=>{setGenre(e.target.value)}}
            >
              <FormControlLabel value="romance" control={<Radio />} label="Romance" />
              <FormControlLabel value="science-fiction" control={<Radio />} label="Science Fiction" />
              <FormControlLabel value="biography" control={<Radio />} label="Biography" />
            </RadioGroup>
          </FormControl>

          <Button 
            sx={{width:'10%'}}
            type='submit'
            variant="contained"
            color='primary'
            endIcon={<ControlPointIcon/>}
          >
          Create
          </Button>
        </Box>
      </form>

    </Container>
  )
}

export default Create