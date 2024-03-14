// Home.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import CustomCard from "../components/CustomCards/CustomCard";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const cards = [
    { title: "Git", description: "Understanding Git & GitHub",detailData:"Understanding the difference between Git and Github with their examples and their main use cases or how they helpful for the developers"},
    { title: "React", description: "Client Vs Serverside renderinng",detailData:"Difference between different type of rendering techniques an advantage of Next.js over React.js..."},
    { title: "React", description: "Core concepts you need to know about React" ,detailData:"Learning some of the fundamental conccepts of React.js and top questions asked in React interviews..."},
    { title: "Javascript", description: "Promises in Javascript" ,detailData:"Learning some of the fundamental conccepts of Promises of javascript and top questions asked in  interviews..."},
    { title: "Javascript", description: "Javascript Concepts - Part 1" ,detailData:"Learning some of the fundamental conccepts of javascript and top questions asked in javascript interviews..."},
    { title: "Javascript", description: "Javascript Concepts - Part 2" ,detailData:"Learning some of the fundamental conccepts of javascript and top questions asked in javascript interviews..."},
    { title: "Javascript", description: "Javascript Event Loop" ,detailData:"Understanding how javascript works under the hood, how it executes our asynchronous javascript code and event loop.."},
    { title: "Javascript", description: "Protypical Inheritance" ,detailData:"Understanding and using prototype and prototypical inheritance in javascript & some of the fundamental conccepts of javascript..."},
    { title: "React", description: "React Lifecycle Methods" ,detailData:"Lifecycle methods are series of events that happen throughout the growth, and death of a  React component and top questions asked in  interviews..."},
 
  ];

  const navigateToRoute = (index) => {
    if (index === 0) {
      navigate('/gitnotes');
    } else if (index === 1) {
      navigate('/nextnotes');
    }
    else if (index === 2) {
      navigate('/reactnotes');
    }
    // Add more conditions for other routes if needed
  };

  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h5" component="div" align="center" fontWeight="bold" fontFamily="sans" > Bits-Of-COde</Typography>
      <br />
      <Typography variant="h2" component="div" align="center" fontWeight="bold" fontFamily="arial">Explore <span style={{ color: "#8761d4" }}>Learn </span>
        Build 🚀
      </Typography>

      <Box sx={{ m: 13 }}>
        <CustomCard cards={cards} navigateToRoute={navigateToRoute} />
      </Box>
    </Box>
  );
};

export default Home;
















