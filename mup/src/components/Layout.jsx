import React from 'react'
import { Drawer, Typography, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBarComponent from './AppBar';


const drawerWidth = 240

function Layout({ children }) {

  const navigate = useNavigate()
  const location = useLocation()
  const menuItems = [
    {
      text:'All Books',
      icon: <MenuBookOutlinedIcon color='primary' />,
      path:'/'
    },
    {
      text:'Add a Book',
      icon: <NoteAddOutlinedIcon color='primary' />,
      path:'/create'
    }
  ]


  return (
    <div style={{display: 'flex'}}>
      <AppBarComponent drawerWidth={drawerWidth} />
      <Drawer sx={{ width: drawerWidth, '& .MuiDrawer-paper': {width: drawerWidth}
        }} variant='permanent' anchor='left'>
        <Typography sx={{paddingLeft:'15px', marginBottom:'20px', marginTop:'10px', fontSize:'30px'}}>My Books App</Typography>
        <List>
          {menuItems.map((item) => (
            <ListItem
            key={item.text}
            button
            onClick={() => {navigate(item.path)}}
            style={location.pathname === item.path ? ({backgroundColor: '#dcdcdc'}) : ({backgroundColor:'white'})}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </List>

      </Drawer>
      <div style={{backgroundColor:'#f9f9f9', width:'100%', marginTop:'60px'}}>  
        {children}
      </div>
    </div>
  )
}

export default Layout