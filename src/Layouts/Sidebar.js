import * as React from "react";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PhotoCameraFrontRoundedIcon from "@mui/icons-material/PhotoCameraFrontRounded";
import TerminalIcon from "@mui/icons-material/Terminal";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { Link } from "react-scroll";

import "./Sidebar.scss";
import logo from "../assets/logo-color.png";

const SideBarItems = [
  {
    id: "Home",
    text: "Home",
    Icon: HomeRoundedIcon,
  },
  {
    id: "AboutMe",
    text: "About Me",
    Icon: PhotoCameraFrontRoundedIcon,
  },
  {
    id: "Skills",
    text: "Skills",
    Icon: ImportContactsIcon,
  },
  {
    id: "Projects",
    text: "Projects",
    Icon: TerminalIcon,
  },
  {
    id: "Contact",
    text: "Contact",
    Icon: PermContactCalendarIcon,
  },
];

const Sidebar = () => (
  <div className="sidebar">
    <img src={logo} alt="logo" style={{ width: "100%" }} />
    {SideBarItems.map(({ text, Icon, id }) => (
      <Link key={id} activeClass="active" isDynamic smooth spy to={id}>
        <div className="nav-item-container">
          <div className="nav-item-icon-container">
            <Icon className="nav-item-icon" />
          </div>
          <div className="menu-text-container">
            <div className="menu-text">
              <div style={{ display: "flex" }}>
                {text.split("").map((character, index) => (
                  <div
                    key={`animated-up-${index}`}
                    id="animation-character"
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    {character}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex" }}>
                {text.split("").map((character, index) => (
                  <div
                    key={`animated-down-${index}`}
                    id="animation-character"
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    {character}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default Sidebar;
