import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import WeekendIcon from '@mui/icons-material/Weekend';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import { Link } from "react-scroll";
function Navbar() {

  const [openMenu,setOpenMenu] = useState(false)
  const menuOptions = [
    {
      id : 'home',
      text:"Home",
      icon:<HomeIcon/>

    },
    {
      id : 'furniture',
      text:"Furniture",
      icon:<WeekendIcon/>
    },
    {
      id : 'walldecoration',
      text:"Wall Decoration",
      icon:<WallpaperIcon/>
    },
    {
      id : 'about',
      text:"About",
      icon:<InfoIcon/>
    },
    {
      id : 'testimonial',
      text:"Testimonials",
      icon:<CommentRoundedIcon/>
    },
    {
      id : 'contact',
      text:"Contact",
      icon:<PhoneRoundedIcon/>
    }
  ]


  return (
    <nav >
      <div className="nav-logo-container">
        <img src='' alt="" />// Logo here
      </div>
      <div className="navbar-links-container">
        <Link to="home" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500} >Home</Link>
      <Link to="furniture" 
      spy={true} 
      smooth={true} 
      offset={-150} 
      duration={500} >Furniture</Link>
      <Link to="walldecoration" 
      spy={true} 
      smooth={true} 
      offset={-150} 
      duration={500} >Wall Decoration</Link>
        <Link to="about" 
      spy={true} 
      smooth={true} 
      offset={-150} 
      duration={500} >About</Link>
        <Link to="testimonial" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500} >Testimonials</Link>
        <Link to="contact" 
      spy={true} 
      smooth={true} 
      offset={0} 
      duration={500} >Contact</Link>
        <button className="primary-button">Bookings Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
  {menuOptions.map((item) => (
    <ListItem key={item.text} disablePadding>
      <ListItemButton>
        <Link
          to={item.id}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          {item.icon} {item.text}
        </Link>
      </ListItemButton>
    </ListItem>
  ))}
</List>;
          <Divider />
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar
