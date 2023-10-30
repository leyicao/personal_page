import React, { useEffect, useState, useRef } from "react";
import LinearProgress from "@mui/material/LinearProgress";

import useVisible from "../../hooks/isVisible";

export const SkillBar = ({ skillName, percentage, waitTime }) => {
  const elemRef = useRef();
  const isVisible = useVisible(elemRef);

  const [skillPercentage, setSkillPercentage] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setSkillPercentage(percentage), waitTime);
    }
  }, [isVisible, setSkillPercentage, percentage, waitTime]);

  return (
    <div className="skill-bar" ref={elemRef}>
      <div className="skill-bar-header">
        <div id="skill-name">{skillName}</div>
        {!!skillPercentage && <div>{skillPercentage + `%`}</div>}
      </div>
      <div>
        <LinearProgress variant="determinate" value={skillPercentage} />
      </div>
    </div>
  );
};
