import "../App.css";
import React from "react";
import oqtoPus from "./images/Bitmap.png";
import location from "./images/location.svg";
import twitter from "./images/twitter.svg";
import chains from "./images/website.svg";
import building from "./images/company.svg";

const Main = (props) => {
  return (
    <div className="mainParent">
      {/* -- octocat user & bio --*/}

      <div className="imgAndBioParent">
        <figure className="imgParent">
          <img
            alt=""
            src={
              props.data === ""
                ? oqtoPus
                : props.data.message
                ? oqtoPus
                : props.data.avatar_url === null
                ? oqtoPus
                : props.data.avatar_url
            }
          />
        </figure>
        <div className="userBioParent">
          <div className="oqtoDiv">
            <h2>
              {props.data === ""
                ? "the Oqocat"
                : props.data.message
                ? "Not avaliable"
                : props.data.name === null
                ? "Not avaliable"
                : props.data.name}{" "}
            </h2>
            <span>
              {props.data === ""
                ? "@oqocat"
                : props.data.message
                ? "Not avaliable"
                : props.data.email === null
                ? "Not avaliable"
                : props.data.email}
            </span>
          </div>
          <span className="joinDate">
            {props.data === ""
              ? "Joined 25 Jan 2011"
              : props.data.message
              ? "Not avaliable"
              : props.data.created_at === null
              ? "Not avaliable"
              : props.data.created_at}
          </span>
        </div>
        <div className="userBio">
          <span>
            {" "}
            {props.data === ""
              ? "This profile has no bio"
              : props.data.message
              ? "Not avaliable"
              : props.data.bio === null
              ? "This profile has no bio"
              : props.data.bio}
          </span>
        </div>
      </div>

      {/* -- followers/following tab --*/}

      <div className="followerNumbersParent">
        <div className="flexContainer">
          <div className="followers">
            <span>Repos</span>
            <span>Followers</span>
            <span>Following</span>
          </div>
          <div className="numbers">
            <span>
              {props.data === ""
                ? "8"
                : props.data.message
                ? "0"
                : props.data.public_repos === null
                ? "8"
                : props.data.public_repos}
            </span>
            <span>
              {props.data === ""
                ? "3938"
                : props.data.message
                ? "0"
                : props.data.followers === null
                ? "3938"
                : props.data.followers}
            </span>
            <span>
              {props.data === ""
                ? "9"
                : props.data.message
                ? "0"
                : props.data.following === null
                ? "9"
                : props.data.following}
            </span>
          </div>
        </div>
      </div>

      {/* -- adress/links/socials --*/}

      <div className="linksParent">
        <div className="linksContainer">
          <div className="locationDiv">
            <img alt="" src={location} />
            <span>
              {" "}
              {props.data === ""
                ? "San Francisco"
                : props.data.message
                ? "no results"
                : props.data.location === null
                ? "not avaliable"
                : props.data.location}
            </span>
          </div>
          <div className="twitterDiv">
            <img alt="" src={twitter} />
            <span>
              {" "}
              {props.data === ""
                ? "not avaliable"
                : props.data.message
                ? "no results"
                : props.data.twitter_username === null
                ? "not avaliable"
                : props.data.twitter_username}
            </span>
          </div>
          <div className="chainsDiv">
            <img alt="" src={chains} />
            <span>
              {" "}
              {props.data === ""
                ? "https://github.blog"
                : props.data.message
                ? "no results"
                : props.data.blog === null
                ? props.data.blog
                : "not avaliable"}
            </span>
          </div>
          <div className="buildingDiv">
            <img alt="" src={building} />
            <span>
              {" "}
              {props.data === ""
                ? "github"
                : props.data.message
                ? "no results"
                : props.data.company === null
                ? "not avaliable"
                : props.data.company}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
