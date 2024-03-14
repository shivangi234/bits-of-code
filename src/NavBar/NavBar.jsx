import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NotesIcon from '@mui/icons-material/Notes';
import IconButton from '@mui/material/IconButton';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LightModeIcon from '@mui/icons-material/LightMode';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import MoodIcon from '@mui/icons-material/Mood';
import { useNavigate } from 'react-router-dom';

export default function NavBar({ mode, handleChange }) {
  const navigate = useNavigate();

  const appBarColor = mode ? "#070326" : "#ffffff"; // Adjust the colors as needed
  const textColor = mode ? "#ffffff" : "#000000"; // Adjust the text colors as needed

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: appBarColor }}>
        <Toolbar>
          <IconButton
            onClick={() => navigate("/")}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: textColor }}
          >
            <NewspaperIcon /><Typography color={textColor}> &nbsp;Latest</Typography>
          </IconButton>
          <IconButton
           onClick={() => navigate("/")}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: textColor }}
          >
            <NotesIcon /><Typography color={textColor}> &nbsp;Posts</Typography>
          </IconButton>
          <Typography variant="h7" component="span" sx={{ flexGrow: 8 }}> </Typography>
          <Box sx={{ flexGrow: 1}}> <IconButton onClick={handleChange} sx={{ color: textColor }}>
            {mode ? <LightModeIcon /> : <BedtimeIcon />}
          </IconButton></Box>
          <Typography variant="h7" component="div" sx={{ color: textColor }}>
            <MoodIcon />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
