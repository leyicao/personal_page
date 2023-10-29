import React, { useState, memo } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./ScrollButton.scss";

const ScrollButton = memo(() => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="scroll-button-container">
      <div className="scroll-button" style={{ marginBottom: 10 }}>
        <a href="https://github.com/leyicao/personal_page">
          <GitHubIcon />
        </a>
      </div>
      <div className="scroll-button" style={{ display: visible ? "" : "none" }}>
        <ArrowUpwardIcon onClick={scrollToTop} />
      </div>
    </div>
  );
});

export default ScrollButton;
