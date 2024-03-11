import React,{useState} from "react";
import NavBar from "./NavBar/NavBar";
import { Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./Home/Home";
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
      <Paper elevation={0} sx={{ height: "150vh" }} square>
        <NavBar mode={mode} handleChange={handleChange} />
        <Home/>
        </Paper>
    </ThemeProvider>
    </>
  );
};

export default App;
