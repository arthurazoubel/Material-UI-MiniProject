import { AppBar, Avatar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { format } from 'date-fns'
import FaceIcon from '@mui/icons-material/Face';

function AppBarComponent({drawerWidth}) {
   

  return (
    <>
        <AppBar sx={{width: '1280px'}} color='secondary' elevation={0}>
            <Toolbar>
                <Typography sx={{flexGrow:'1'}}>
                    Hello, today is {format(new Date, 'do MMMM Y')}
                </Typography>
                <Avatar><FaceIcon /></Avatar>
                <Typography marginLeft='10px'>
                    Arthur
                </Typography>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default AppBarComponent