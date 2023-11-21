import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import PageContainer from "../../Layouts/PageContainer";
import PageContent from "../PageContent.json";
import "./Home.scss";
import LetterImage from "./LetterImage";
import AnimatedFont from "./AnimatedFont";

const HomeView = () => {
  return (
    <PageContainer>
      <Box className="home-view-container" id="Home">
        <Grid container>
          <Grid item md={12} lg={6}>
            <h1 className="cd-headline rotate-1">
              <div>{PageContent.Home_Page_Header}</div>
              <AnimatedFont />
            </h1>
            <h4>{PageContent.Home_Page_Content_1}</h4>
          </Grid>

          <Grid item md={12} lg={6} style={{ margin: "auto" }}>
            <LetterImage />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default HomeView;
