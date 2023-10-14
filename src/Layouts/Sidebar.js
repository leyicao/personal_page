import * as React from 'react';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PhotoCameraFrontRoundedIcon from '@mui/icons-material/PhotoCameraFrontRounded';
import TerminalIcon from '@mui/icons-material/Terminal';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

import './Sidebar.scss'
import logo from '../assets/logo-color.png'

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

const Sidebar = () =>
  <div className='sidebar'>
    <img src={logo} alt="logo" style={{ width: '100%' }} />
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
  </div>

export default Sidebar;