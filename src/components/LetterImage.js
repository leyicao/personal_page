import React from 'react'
import Button from '@mui/material/Button';

import './LetterImage.scss';

const LetterImage = () => {
  const handleImageOnClick = () => {
    const pdfUrl = "/Leyi_Cao_resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Leyi_Cao_resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <div className='letter-image-container' onClick={handleImageOnClick}>
    <div class="letter-image">
      <div class="animated-mail">
        <div class="back-fold"></div>
        <div class="letter">
          <div class="letter-border"></div>
          <div class="letter-title"></div>
          <div class="letter-context"></div>
          <div class="letter-stamp">
            <div class="letter-stamp-inner"></div>
          </div>
        </div>
        <div class="top-fold"></div>
        <div class="body"></div>
        <div class="left-fold"></div>
      </div>
      <div class="shadow"></div>
      <div className='button-container'>
        <Button variant="contained">
          Download CV
        </Button>
      </div>
    </div>

  </div>
}

export default LetterImage;