import React from "react";
import Button from "@mui/material/Button";

import "./LetterImage.scss";

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
  return (
    <Button className="letter-image-container" onClick={handleImageOnClick}>
      <div className="letter-image">
        <div className="animated-mail">
          <div className="back-fold"></div>
          <div className="letter">
            <div className="letter-border"></div>
            <div className="letter-title"></div>
            <div className="letter-context"></div>
            <div className="letter-stamp">
              <div className="letter-stamp-inner"></div>
            </div>
          </div>
          <div className="top-fold"></div>
          <div className="body"></div>
          <div className="left-fold"></div>
        </div>
        <div className="shadow"></div>
        <div className="button-container">
          <Button variant="contained">Download CV</Button>
        </div>
      </div>
    </Button>
  );
};

export default LetterImage;
