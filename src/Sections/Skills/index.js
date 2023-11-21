import React from "react";
import Grid from "@mui/material/Grid";
import PageContainer from "../../Layouts/PageContainer";

import { SkillBar } from "./SkillBar";

import "./Skills.scss";

const skillsContent = [
  { skillName: "Python", percentage: 95 },
  { skillName: "Java", percentage: 80 },
  { skillName: "MySQL", percentage: 90 },
  { skillName: "MongoDB", percentage: 80 },
  { skillName: "Javascript", percentage: 45 },
  { skillName: "ReactJS", percentage: 40 },
  { skillName: "HTML/CSS", percentage: 40 },
  { skillName: "C/C++", percentage: 20 },
  { skillName: "Web Devopment", percentage: 70 },
  { skillName: "Communication", percentage: 95 },
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
            <Grid key={skill.skillName} item lg={6} xs={12}>
              <SkillBar {...skill} waitTime={index * 150} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default SkillsView;
