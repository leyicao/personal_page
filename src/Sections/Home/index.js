import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import PageContainer from "../../Layouts/PageContainer";
import PageContent from "../PageContent.json";
import "./Home.scss";
import LetterImage from "./LetterImage";

const boldContent = ["", "Developer", "Team Player", "Fast Learner"];

const HomeView = () => {
  const [currentIdx, setCurrentIdx] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIdx((prev) => (prev % 3) + 1);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentIdx]);
  return (
    <PageContainer>
      <Box className="home-view-container" id="Home">
        <Grid container>
          <Grid item md={12} lg={6}>
            <h1 className="cd-headline rotate-1">
              <div>{PageContent.Home_Page_Header}</div>
              <div className="cd-words-wrapper">
                {boldContent.map((text, index) => (
                  <b
                    key={text}
                    className={classNames({
                      "is-visible": currentIdx === index,
                      "is-hidden": currentIdx !== index,
                    })}
                  >
                    {text}
                  </b>
                ))}
              </div>
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
