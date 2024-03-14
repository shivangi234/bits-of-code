import React from 'react';
import { Card, Box, Typography, Grid } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CustomCard = ({ cards, navigateToRoute }) => {
  return (
  <>  
  <Grid container justifyContent="center" spacing={2}>
    {cards.map((card, index) => (
   <Grid item lg={4} key={index}>
      <Card sx={{ borderBottom: "3px solid #a98de0" ,cursor:"pointer"}} onClick={() => navigateToRoute(index)}>
        <Typography variant="h7" align="left" sx={{ backgroundColor: "#8761d4", borderRadius: "4px", p: 1, letterSpacing: "2px" }}>{card.title}</Typography>
        <br /><br />
        <Typography variant="h5" align="left" padding="5px" fontFamily="arial" sx={{ letterSpacing: "2px", fontWeight: "bold" }}>{card.description}</Typography>
        <Box sx={{ m: 1 }}>
          <Typography variant="h7" align="left" >
            {card.detailData}
          </Typography>
        </Box>
        <br /><br />
        <Box sx={{ mt: 2, mb: 2 }}>
          <Grid container>
            <Grid item lg={7}>
              <Typography variant="h7" sx={{ float: "left", color: "#c2b4e0", p: 1 }}>Learn More <ArrowForwardIcon sx={{ mb: -1 }} /></Typography>
            </Grid>
            <Grid item lg={5}>
              <Typography variant="h7" sx={{ float: "right", fontSize: "12px", letterSpacing: "4px", p: 1 }}>2 min read</Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Grid>
    ))}
  </Grid>
  </>
  );
};

export default CustomCard;
