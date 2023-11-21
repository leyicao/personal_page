import React, { useState, useEffect } from "react";
import classNames from "classnames";

const boldContent = ["", "Developer", "Team Player", "Fast Learner"];

const AnimatedFont = () => {
  const [currentIdx, setCurrentIdx] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIdx((prev) => (prev % 3) + 1);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentIdx]);

  return (
    <div className="cd-words-wrapper">
      {boldContent.map((text, index) => (
        <b
          key={text}
          className={classNames({
            "is-visible": currentIdx === index,
            "is-hidden": currentIdx === (index % 3) + 1, // Only hide the previosu displayed text
          })}
        >
          {text}
        </b>
      ))}
    </div>
  );
};

export default AnimatedFont;
