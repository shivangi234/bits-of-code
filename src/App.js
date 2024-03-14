// App.js
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import { Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./Home/Home";
import Footer from "./components/Footer/Footer";
import GitNotes from "./Blogs/Github/GitNotes";
import NextNote from "./Blogs/Nextjs/NextNote";
import ReactNotes from "./Blogs/React/ReactNotes";

const App = () => {
  const [mode, setMode] = useState(true);

  const appTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  const handleChange = () => {
    setMode((prevMode) => !prevMode);
  };

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <Paper elevation={0} square>
          <NavBar mode={mode} handleChange={handleChange} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gitnotes" element={<GitNotes />} />
            <Route path="/nextnotes" element={<NextNote />} />
            <Route path="/reactnotes" element={<ReactNotes />} />
          </Routes>
         <Footer />
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default App;
