import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import PageContent from './PageContent.json';
import './Home.scss';
import LetterImage from './LetterImage';

const boldContent = ['', 'Developer', 'Team Player', 'Fast Learner']

const HomePageView = () => {
  const [currentIdx, setCurrentIdx] = useState(1);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIdx((prev => prev % 3 + 1))
    }, 3000)
    return () => clearTimeout(timer)
  }, [currentIdx])
  return (
    <Box className='home-view-container' id="Home">
      <Grid container >
        <Grid item md={12} lg={5}>
          <h1 className="cd-headline rotate-1">
            <div>{PageContent.Home_Page_Header}</div>
            <div className="cd-words-wrapper">
              {
                boldContent.map((text, index) =>
                  <b className={currentIdx === index ? "is-visible" : "is-hidden"}>
                    {text}
                  </b>)
              }
            </div>
          </h1>
          <h4>
            {PageContent.Home_Page_Content_1}
          </h4>
        </Grid>

        <Grid item md={12} lg={7}>
          <LetterImage />
        </Grid>
      </Grid>
    </Box >
  )
}

export default HomePageView