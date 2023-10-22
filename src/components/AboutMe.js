import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import './AboutMe.scss'

const TabItems = [
  { tabName: 'About me', header: 'About me', subHeader: '14124 dasd 23', body: '1das d das das das d23' },
  { tabName: 'Skills', header: 'Skills', subHeader: '14124 dasd 23', body: '1das d das das das d23' },
  { tabName: 'Experience', header: 'Experience', subHeader: '14124 dasd 23', body: '1das d das das das d23' }
]

function CustomTabPanel(props) {
  const { children, value, selectedValue, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={selectedValue !== value}
      id={`simple-tabpanel-${value}`}
      aria-labelledby={`simple-tab-${value}`}
      {...other}
    >
      {children}
    </div>
  );
}

const AboutMePageView = () => {
  const [value, setValue] = useState(TabItems[0].tabName);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Grid id="AboutMe">
      <div className='tab-container'>
        {
          TabItems.map((item) =>
            <Button key={item.tabName} className="tab" onClick={() => handleChange(item.tabName)}>{item.tabName}</Button>
          )
        }
      </div>

      {TabItems.map((item) =>
        <CustomTabPanel value={item.tabName} selectedValue={value}>
          <Grid container>
            <Grid item lg={6} md={12} >
              <div className='tab-card'>
                <h3>{item.subHeader}</h3>
                <h1>{item.header}</h1>
                <div>
                  {item.body}
                </div>
              </div>
            </Grid>

            <Grid item lg={6} md={12} >
              <div className='tab-card'>
                <h3>{item.subHeader}</h3>
                <h1>{item.header}</h1>
                <div>
                  {item.body}
                </div>
              </div>
            </Grid>

            <Grid item lg={6} md={12} >
              <div className='tab-card'>
                <h3>{item.subHeader}</h3>
                <h1>{item.header}</h1>
                <div>
                  {item.body}
                </div>
              </div>
            </Grid>

            <Grid item lg={6} md={12} >
              <div className='tab-card'>
                <h3>{item.subHeader}</h3>
                <h1>{item.header}</h1>
                <div>
                  {item.body}
                </div>
              </div>
            </Grid>
          </Grid>
        </CustomTabPanel>
      )}

    </Grid>
  );
}

export default AboutMePageView