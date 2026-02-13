import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import hamburger from '../assets/images/Navbar/Vector.svg';
export default function SwipeableTemporaryDrawer() {

  const [state, setState] = React.useState({
    top: false,
  });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setState({ ...state, top: false }); // Close the drawer
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, top: open }); // Spread previous state
  };

  const list = (
    <Box id="box"
    //   bgcolor={'slateblue'}
      //sx={{color:'white', width: '100%', background: 'linear-gradient(#040842, #040842)',fontFamily: 'vt323'}}
      sx={{
        color: 'white',
        width: '100%',
        background: 'linear-gradient(#040842, #040842)',
        opacity: '10',
        fontFamily: 'vt323,', // Apply the 'vt323' font here
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['SCHEDULE', 'PRIZES', 'TRACKS', 'SPONSORS', 'FAQ', 'CONTACT US'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => {
                const id = text === 'CONTACT US' ? 'footer' : text.toLowerCase();
                scrollToSection(id);
              }}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div className='justify-end relative min-[768px]:hidden w-[30px] h-[60px]' >
      {/* Conditionally render hamburger menu icon */}
      {/* <Button className='w-[20%] pr-0 pt-0' onClick={toggleDrawer(!state.top)} style={{ zIndex: state.top ? 9999 : 1 }}>
      <img className="min-[450px]:hidden min-[320px]:w-[30%] min-[320px]:pr-[0] min-[320px]:h-[18%] min-[320px]:mt-[40%] min-[320px]:mr-[30%]" src="./images/Vector.svg" ></img>
      </Button> */}
      <button onClick={toggleDrawer(!state.top)} style={{ zIndex: 9999,position: 'fixed', }}><img className="min-[768px]:hidden min-[320px]:pr-[0] min-[320px]:h-[40%]" src={hamburger} ></img></button>
      <SwipeableDrawer
        anchor="top"
        style={{ zIndex: 1000 }}
        open={state.top}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list}
      </SwipeableDrawer>
    </div>
  );
}
//  min-[320px]:mt-[110%] min-[320px]:ml-[100%]