import React from "react";
import Grid from "@mui/material/Grid";
import PageContainer from "../../Layouts/PageContainer";

import { SkillBar } from "./SkillBar";

import "./Skills.scss";

const skillsContent = [
  { skillName: "Javascript", percentage: 10 },
  { skillName: "Python", percentage: 95 },
  { skillName: "ReactJS", percentage: 80 },
  { skillName: "MongoDB", percentage: 65 },
  { skillName: "Javascript", percentage: 95 },
  { skillName: "Javascript", percentage: 95 },
  { skillName: "Javascript", percentage: 95 },
  { skillName: "Javascript", percentage: 95 },
  { skillName: "Javascript", percentage: 95 },
  { skillName: "Javascript", percentage: 95 },
];

const SkillsView = () => {
  return (
    <PageContainer>
      <Grid className="skills-section" id="Skills">
        <h1 className="header">
          Skills <p className="downline" />
        </h1>
        <Grid container>
          {skillsContent.map((skill, index) => (
            <Grid item lg={6} xs={12}>
              <SkillBar {...skill} waitTime={index * 150} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default SkillsView;
