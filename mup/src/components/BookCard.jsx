import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Avatar, IconButton, Typography } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


function BookCard({ book, deleteBook }) {
  
   

    return (
        <>
            <Card elevation={1}>
                <CardHeader
                    avatar= {
                        <Avatar
                        >
                            {book.genre[0].toUpperCase()}
                        </Avatar>
                    }
                    titleTypographyProps={{fontSize:'23px' }}
                    title={book.title}
                    subheaderTypographyProps={{fontSize:'16px' }}
                    subheader={book.author}
                    action={
                        <IconButton aria-label="delete" onClick={() => deleteBook(book.id)}>
                          <DeleteOutlinedIcon sx={{fontSize:'25px'}}/>
                        </IconButton>
                      }
                />
                <CardContent>
                    <Typography component='p' color={'textSecondary'} fontSize={'16px'} sx={{fontWeight:100}}>
                        {book.storyline}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default BookCard