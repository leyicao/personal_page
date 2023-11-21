import React from "react";
import Grid from "@mui/material/Grid";

import projectImg1_1 from "../../assets/Projects/Project1-1.png";
import projectImg1_2 from "../../assets/Projects/Project1-2.png";
import projectImg1_3 from "../../assets/Projects/Project1-3.png";
import projectImg1_4 from "../../assets/Projects/Project1-4.png";

import projectImg2 from "../../assets/Projects/Project-2.jpg";
import projectImg3 from "../../assets/Projects/Project-3.jpg";
import projectImg4 from "../../assets/Projects/Project-4.jpg";

import PageContainer from "../../Layouts/PageContainer";

import "./Projects.scss";
import ProjectCard from "./ProjectCard";

const ProjectsContent = [
  {
    projectName: "Little Lemon",
    images: [projectImg1_1, projectImg1_2, projectImg1_3, projectImg1_4],
  },
  { projectName: "Project 2", images: [projectImg2] },
  { projectName: "Project 3", images: [projectImg3] },
  { projectName: "Project 4", images: [projectImg4] },
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
          {ProjectsContent.map(({ projectName, images }) => (
            <ProjectCard
              key={projectName}
              projectName={projectName}
              images={images}
            />
          ))}
        </div>
      </Grid>
    </PageContainer>
  );
};

export default ProjectsView;
