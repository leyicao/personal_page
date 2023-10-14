import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PhotoCameraFrontRoundedIcon from '@mui/icons-material/PhotoCameraFrontRounded';
import TerminalIcon from '@mui/icons-material/Terminal';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

import './Sidebar.scss'

const drawerWidth = 300;
const SideBarItems = [{
  text: 'Home',
  Icon: HomeRoundedIcon,
}, {
  text: 'About Me',
  Icon: PhotoCameraFrontRoundedIcon
}, {
  text: 'Skills',
  Icon: ImportContactsIcon
}, {
  text: 'Projects',
  Icon: TerminalIcon
}, {
  text: 'Contact',
  Icon: PermContactCalendarIcon
}]

const Sidebar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='sidebar'>
      <div className='logo'></div>
      <Divider />
      {SideBarItems.map(({ text, Icon }) => (
        <a>
          <div className='nav-item-container'>
            <div className='nav-item-icon-container'>
              <Icon className='nav-item-icon' />
            </div>
            <div className="menu-text-container">
              <div className='menu-text'>
                <div style={{ display: 'flex' }}>
                  {text.split('').map((character, index) =>
                    <div id="animation-character" style={{
                      transitionDelay: `${index * 50}ms`
                    }}>
                      {character}
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex' }}>
                  {text.split('').map((character, index) =>
                    <div id="animation-character" style={{
                      transitionDelay: `${index * 50}ms`
                    }}>
                      {character}
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </a>
      ))
      }
    </div >
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;