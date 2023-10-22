import React, { useState } from 'react';
import classNames from 'classnames';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import PageContainer from '../../layouts/PageContainer';
import './AboutMe.scss'

const TabItems = [
  { tabName: 'Education', header: 'Education', subHeader: '14124 dasd 23', body: '1das d das das das d23' },
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
  const [activeTab, setActiveTab] = useState(TabItems[0].tabName);

  return (
    <PageContainer >
      <Grid id="AboutMe">
        <div className='tab-container'>
          {
            TabItems.map((item) =>
              <Button key={item.tabName} className={classNames({
                active: item.tabName === activeTab,
                tab: true,
              })} onClick={() => setActiveTab(item.tabName)}>{item.tabName}</Button>
            )
          }
        </div>

        {TabItems.map((item) =>
          <CustomTabPanel value={item.tabName} selectedValue={activeTab}>
            <Grid container>
              <Grid item lg={6} xs={12}>
                <div className='tab-card'>
                  <h3>{item.subHeader}</h3>
                  <h1>{item.header}</h1>
                  <div>
                    {item.body}
                  </div>
                </div>
              </Grid>

              <Grid item lg={6} xs={12}>
                <div className='tab-card'>
                  <h3>{item.subHeader}</h3>
                  <h1>{item.header}</h1>
                  <div>
                    {item.body}
                  </div>
                </div>
              </Grid>

              <Grid item lg={6} xs={12}>
                <div className='tab-card'>
                  <h3>{item.subHeader}</h3>
                  <h1>{item.header}</h1>
                  <div>
                    {item.body}
                  </div>
                </div>
              </Grid>

              <Grid item lg={6} xs={12}>
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
    </PageContainer>
  );
}

export default AboutMePageView