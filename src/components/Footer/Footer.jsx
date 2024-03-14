import React from "react";
import { SiTwitter, SiGithub, SiInstagram } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { Grid, Typography, Box } from "@mui/material";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Box sx={{ backgroundColor: "#070326", p: 2, }}>
      <Grid container>
        <Grid item lg={3}>
          <Typography variant="h7" sx={{color:"white"}}>© {year} Bits-Of-C0de —@Shivangi</Typography>
        </Grid>
        <Grid item lg={6}></Grid>
        <Grid item lg={2}>
            <Box sx={{float:"right",}}>
            <a 
            href="https://www.twitter.com/in/"
            rel="noopener noreferrer"
            target="_blank"
          >
          <SiTwitter  style={{color:"white"}}/>
          </a> &nbsp;&nbsp;&nbsp;
          <a 
            href="https://github.com/shivangi234/"
            rel="noopener noreferrer"
            target="_blank"
          >
          <SiGithub  style={{color:"white"}}/>
          </a> &nbsp;&nbsp;&nbsp;
          <a 
            href="https://www.instagram.com/in/"
            rel="noopener noreferrer"
            target="_blank"
          >
          <SiInstagram  style={{color:"white"}}/>
          </a> &nbsp;&nbsp;&nbsp;
          <a 
            href="https://www.linkedin.com/in/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FiLinkedin style={{color:"white"}}/>
          </a>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
