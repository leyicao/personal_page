import React from "react";
import Button from "@mui/material/Button";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ projectName, images }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="project-card">
      <div className="image-card">
        <img id="project-img" src={images[0]} alt={projectName} />
        <div className="learn-more">
          <h1>{projectName}</h1>
          <div style={{ display: "grid" }}>
            <Button variant="contained" onClick={handleOpen}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <ProjectModal
        open={open}
        onClose={handleClose}
        images={images}
        projectName={projectName}
      />
    </div>
  );
};

export default ProjectCard;
