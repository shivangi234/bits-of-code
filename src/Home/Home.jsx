import React from "react";
import { Box, Typography } from "@mui/material";
import CustomCard from "../components/CustomCards/CustomCard";

const Home = () => {
  const cards = [
    { title: "Git", description: "Understanding Git & GitHub",detailData:"Understanding the difference between Git and Github with their examples and their main use cases or how they helpful for the developers"},
    { title: "React", description: "Client Vs Serverside renderinng",detailData:"Difference between different type of rendering techniques an advantage of Next.js over React.js..."},
    { title: "React", description: "Core concepts you need to know about React" ,detailData:"Learning some of the fundamental conccepts of React.js and top questions asked in React interviews..."},
    { title: "React", description: "Core concepts you need to know about React" ,detailData:"Learning some of the fundamental conccepts of React.js and top questions asked in React interviews..."},
    { title: "React", description: "Core concepts you need to know about React" ,detailData:"Learning some of the fundamental conccepts of React.js and top questions asked in React interviews..."},
    { title: "React", description: "Core concepts you need to know about React" ,detailData:"Learning some of the fundamental conccepts of React.js and top questions asked in React interviews..."},
 
  ];

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" component="div" align="center" fontWeight="bold" fontFamily="sans"> Bits-Of-COde</Typography>
      <br />
      <Typography variant="h2" component="div" align="center" fontWeight="bold" fontFamily="arial">Explore <span style={{ color: "#8761d4" }}>Learn </span>
        Build 🚀
      </Typography>

      <Box sx={{ m: 13 }}>
        <CustomCard cards={cards} />
      </Box>
    </Box>
  );
};

export default Home;
