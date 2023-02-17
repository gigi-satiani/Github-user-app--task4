import "../App.css";
import mySun from "./images/sun.svg";
import myMoon from "./images/moon.svg";
import mySearch from "./images/search.svg";
import React from "react";
import { StyledButton, ErrorMessage } from "./themeMode.style";

const Header = (props) => {
  const toggleTheme = () => {
    props.setTheme(props.theme === "light" ? "dark" : "light");
  };

  return (
    <div className="headerParent">
      <div className="darkLightMode">
        <span className="devfinderSpan">devfinder</span>
        <StyledButton
          onClick={() => {
            toggleTheme();
          }}
        >
          <div style={{ display: props.theme === "light" ? "block" : "none" }}>
            LIGHT
          </div>
          <div style={{ display: props.theme === "dark" ? "block" : "none" }}>
            DARK
          </div>
          <img
            alt=""
            src={mySun}
            className="buttonImage"
            style={{ display: props.theme === "light" ? "block" : "none" }}
          />
          <img
            alt=""
            src={myMoon}
            className="buttonImage"
            style={{ display: props.theme === "dark" ? "block" : "none" }}
          />
        </StyledButton>
      </div>
      <div className="searchParent">
        <div className="searchInputParent">
          <figure className="figureParent">
            <img alt="" src={mySearch} className="searchIcon" />
          </figure>
          <input
            type="search"
            className="searchInput"
            placeholder="Search GitHub username..."
            style={{ color: props.theme === "light" ? "#fff" : "#4B6A9B" }}
          />
          <ErrorMessage
            style={{
              color: "#F74646",
              fontFamily: "monospace",
              fontSize: "15px",
              paddingRight: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {props.data.message && "No results"}
          </ErrorMessage>
        </div>
        <div className="submitParent">
          <button onClick={props.findUser}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
