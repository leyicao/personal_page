import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';

export const SkillBar = ({
  skillName,
  percentage
}) => {
  return (
    <div className='skill-bar'>
      <div className='skill-bar-header'>
        <div id="skill-name">{skillName}</div>
        <div>{percentage + `%`}</div>
      </div>
      <div>
        <LinearProgress variant="determinate" value={percentage} />
      </div>
    </div>
  )
}
