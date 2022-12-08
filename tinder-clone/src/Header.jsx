import React from 'react'
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
  return (
    <div  className='header'>
      <IconButton>
      <PersonIcon fontSize='large' className='header__icon'/>
      </IconButton>
      <img 
      className='header__logo'
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F09%2FTinder-Emblem.png&f=1&nofb=1&ipt=33e07b94c8c1027538adc60965ff9cdffe672e55b43be640b5367164acce6341&ipo=images"
       alt="" />
<IconButton>
<ForumIcon  fontSize='large' className='header__icon'/>
</IconButton>
      
    </div>
  )
}

export default Header
