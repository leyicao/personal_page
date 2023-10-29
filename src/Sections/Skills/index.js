import React, { useEffect, useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import PageContainer from "../../Layouts/PageContainer";
import useVisible from "../../hooks/isVisible";

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
  const elemRef = useRef();
  const isVisible = useVisible(elemRef);

  const [skills, setSkills] = useState(
    skillsContent.map(({ skillName }) => ({ skillName, percentage: 0 }))
  );

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setSkills(skillsContent), 500);
    }
  }, [isVisible]);

  return (
    <PageContainer>
      <Grid ref={elemRef} className="skills-section" id="Skills">
        <h1 className="header">
          Skills <p className="downline" />
        </h1>
        <Grid container>
          {skills.map((skill) => (
            <Grid item lg={6} xs={12}>
              <SkillBar {...skill} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default SkillsView;
