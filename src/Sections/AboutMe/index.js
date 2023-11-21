import React from "react";
import Grid from "@mui/material/Grid";

import PageContainer from "../../Layouts/PageContainer";
import "./AboutMe.scss";

const TabItems = [
  {
    tabName: "Education",
    header: "University of Pennsylvania",
    subHeader: "Master",
    body: "Computer and Information Technology",
  },
  {
    tabName: "Education",
    header: "University of California, Santa Cruz",
    subHeader: "Master",
    body: "Applied Economic and Finance",
  },
  {
    tabName: "Education",
    header: "Guangdong University of Foreign Studies",
    subHeader: "Bachelor",
    body: "Management, Marketing",
  },
  {
    tabName: "Education",
    header: "Guangdong University of Foreign Studies",
    subHeader: "Bachelor",
    body: "Art, Business English",
  },
];

const AboutMeView = () => {
  return (
    <PageContainer>
      <Grid className="about-me-section" id="AboutMe">
        <h1 className="header">
          Education
          <p className="downline" />
        </h1>
        <h2 className="section-header">About Me</h2>

          <div>
            <Grid container>
            {TabItems.map((item) => (
              <Grid item lg={6} xs={12} key={item.header}>
                <div className="tab-card">
                  <h3>{item.subHeader}</h3>
                  <h1>{item.header}</h1>
                  <div>{item.body}</div>
                </div>
              </Grid>
            ))}
            </Grid>
          </div>
      </Grid>
    </PageContainer>
  );
};

export default AboutMeView;
