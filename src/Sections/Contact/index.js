import React from "react";
import Grid from "@mui/material/Grid";

import PageContainer from "../../Layouts/PageContainer";

import Linkedin from "../../assets/Linkedin.png";
import Github from "../../assets/Github.png";
import Gmail from "../../assets/Gmail.jpeg";

import "./Contact.scss";

// const boldContent = ["", "Developer", "Team Player", "Fast Learner"];

const ContactView = () => {
  return (
    <PageContainer style={{ marginTop: 50 }}>
      <div className="contact-section">
        <h1 className="header" id="Contact">
          More Contact
          <p className="downline" />
        </h1>

        <Grid container spacing={2} className="container">
          <Grid item xs={4} className="item">
            <a href="https://www.linkedin.com/in/leyi-cao/" target="_blank">
              <div className="image">
                <img src={Linkedin} />
              </div>
              <div className="title">Linkedin</div>
            </a>
          </Grid>

          <Grid item xs={4} className="item">
            <a href="https://github.com/leyicao" target="_blank">
              <div className="image">
                <img src={Github} />
              </div>
              <div className="title">Github</div>
            </a>
          </Grid>

          <Grid item xs={4} className="item">
            <a href="mailto:leyicao@gmail.com" target="_blank">
              <div className="image">
                <img src={Gmail} />
              </div>
              <div className="title">Gmail</div>
            </a>
          </Grid>
        </Grid>
      </div>
    </PageContainer>
  );
};

export default ContactView;
