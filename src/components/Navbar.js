import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import WeekendIcon from "@mui/icons-material/Weekend";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import { Link } from "react-router-dom";
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      id: "home",
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      id: "furniture",
      text: "Furniture",
      icon: <WeekendIcon />,
    },
    {
      id: "walldecoration",
      text: "Wall Decoration",
      icon: <WallpaperIcon />,
    },
    {
      id: "about",
      text: "About",
      icon: <InfoIcon />,
    },
    {
      id: "testimonial",
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      id: "contact",
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      id: "pricing",
      text: "Pricing",
      icon: <PriceChangeIcon />,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src="" alt="" />
        // Logo here
      </div>
      <div className="navbar-links-container">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="link-mobile"
        >
          Home
        </Link>
        <Link
          to="furniture"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className="link-mobile"
        >
          Furniture
        </Link>
        <Link
          to="walldecoration"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className="link-mobile"
        >
          Wall Decoration
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className="link-mobile"
        >
          About
        </Link>
        <Link
          to="pricing"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="link-mobile"
        >
          Pricing
        </Link>
        <Link to={"/sign-in"}>Login</Link>
        <Link to={"/sign-up"}>Sign up</Link>
        <Link to="userprofile">Profile</Link>
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
                    className="link-mobile"
                  >
                    {item.icon} {item.text}
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          ;
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
}

export default Navbar;
