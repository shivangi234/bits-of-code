import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Greetings = () => {

  return (
    <Box sx={{  p: 2,marginTop:"40px" }}>
      <Grid container justifyContent="center">
        <Grid item lg={6}>
            <Box sx={{textAlign:"center"}}>  
            <MoreHorizIcon sx={{ fontSize: "80px" }} />
            <Typography variant="h5" fontFamily="arial">
            Thanks for reading...😀
            </Typography>
            </Box>
        </Grid>
      
      </Grid>
    </Box>
  );
};

export default Greetings;
