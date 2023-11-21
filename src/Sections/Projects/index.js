import React from "react";
import Grid from "@mui/material/Grid";

import projectImg1 from "../../assets/Project-1.jpg";
import projectImg2 from "../../assets/Project-2.jpg";
import projectImg3 from "../../assets/Project-3.jpg";
import projectImg4 from "../../assets/Project-4.jpg";

import PageContainer from "../../Layouts/PageContainer";

import "./Projects.scss";
import ProjectCard from "./ProjectCard";

const ProjectsContent = [
  { projectName: "Project 1", imageSrc: projectImg1 },
  { projectName: "Project 2", imageSrc: projectImg2 },
  { projectName: "Project 3", imageSrc: projectImg3 },
  { projectName: "Project 4", imageSrc: projectImg4 },
];

const ProjectsView = () => {
  return (
    <PageContainer>
      <Grid className="project-section">
        <h1 className="header" id="Projects">
          My Works
          <p className="downline" />
        </h1>

        <div className="projects-container">
          {ProjectsContent.map(({ projectName, imageSrc }) => (
            <ProjectCard
              key={projectName}
              projectName={projectName}
              imageSrc={imageSrc}
            />
          ))}
        </div>
      </Grid>
    </PageContainer>
  );
};

export default ProjectsView;