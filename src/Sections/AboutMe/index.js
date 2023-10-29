import React from "react";
import Grid from "@mui/material/Grid";

import PageContainer from "../../Layouts/PageContainer";
import "./AboutMe.scss";

const TabItems = [
  {
    tabName: "Education",
    header: "Education",
    subHeader: "14124 dasd 23",
    body: "1das d das das das d23",
  },
];

const AboutMeView = () => {
  return (
    <PageContainer>
      <Grid className="about-me-section" id="AboutMe">
        <h1 className="header">
          Education
          <p className="downline" />
          <h2 className="section-header">About Me</h2>
        </h1>

        {TabItems.map((item) => (
          <div>
            <Grid container>
              <Grid item lg={6} xs={12}>
                <div className="tab-card">
                  <h3>{item.subHeader}</h3>
                  <h1>{item.header}</h1>
                  <div>{item.body}</div>
                </div>
              </Grid>

              <Grid item lg={6} xs={12}>
                <div className="tab-card">
                  <h3>{item.subHeader}</h3>
                  <h1>{item.header}</h1>
                  <div>{item.body}</div>
                </div>
              </Grid>

              <Grid item lg={6} xs={12}>
                <div className="tab-card">
                  <h3>{item.subHeader}</h3>
                  <h1>{item.header}</h1>
                  <div>{item.body}</div>
                </div>
              </Grid>

              <Grid item lg={6} xs={12}>
                <div className="tab-card">
                  <h3>{item.subHeader}</h3>
                  <h1>{item.header}</h1>
                  <div>{item.body}</div>
                </div>
              </Grid>
            </Grid>
          </div>
        ))}
      </Grid>
    </PageContainer>
  );
};

export default AboutMeView;
