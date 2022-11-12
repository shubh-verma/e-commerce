import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const About = () => {
  const visitLinkedIn = () => {
    window.location = "https://www.linkedin.com/in/shubham-verma-cs/";
  };
  return (
    <div className="aboutSection">
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/db5ojxber/image/upload/v1668252505/image/16482424553491_flhhxg.jpg"
              alt="Founder"
            />
            <Typography>Shubham Verma</Typography>
            <Button onClick={visitLinkedIn} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by Shubham Verma. Only with the
              purpose to learn MERN stack.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Please Visit</Typography>
            <a href="https://github.com/shubh-verma/" target="blank">
              <GitHubIcon className="youtubeSvgIcon" />
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-verma-cs/"
              target="blank"
            >
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>

            <a href="https://www.instagram.com/shubh_vrma/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
