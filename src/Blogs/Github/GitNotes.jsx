import React ,{useRef} from "react";
import {
  Box,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import GitHeader from "../../Assets/images/Git/header.jpg";
import vcs from "../../Assets/images/Git/vcs.png"
import Greetings from "../../components/Greetings/Greetings";
const GitNotes = () => {

  const scrollToRef = (ref) => {
    if (ref.current) {
      const yPos = ref.current.getBoundingClientRect().top;
      window.scrollTo({ top: yPos - 100, behavior: "smooth" });
    }
  };

  const gitRef = useRef(null);
  const versionControlRef = useRef(null);
  const gitHubRef = useRef(null);
  const conclusionRef = useRef(null);
  const useversionControlRef = useRef(null);
  return (
    <>
      <Box sx={{ paddingTop: "90px" }}>
        {/* header section */}
        <Grid container>
          <Grid item lg={1}></Grid>
          <Grid item lg={7}>
            <Box>
              <img alt="" src={GitHeader} width={700} height={300} />
              <Grid container justifyContent="center" sx={{ mt: 2 }}>
                <Grid item lg={8}>
                  <Box sx={{ textAlign: "center" }}>
                    <Chip label="Git" color="secondary" />
                    &nbsp;&nbsp;
                    <Chip label="GitHub" color="secondary" />
                    <br />
                    <br />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Understanding Git and Github
                  </Typography>
                  <Box sx={{ textAlign: "center" }}>
                    
                    <MoreHorizIcon sx={{ fontSize: "80px" }} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem>
                  <ListItemButton onClick={() => scrollToRef(gitRef)} component="a" href="#what-is-git">
                    <ListItemText primary="What is Git ?" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton  onClick={() => scrollToRef(versionControlRef)} component="a" href="#version-control-system">
                    <ListItemText primary="Version Control System" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={() => scrollToRef(gitHubRef)} component="a" href="#what-is-github">
                    <ListItemText primary="What Is GitHub?" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton  onClick={() => scrollToRef(conclusionRef)} component="a" href="#conclusion">
                    <ListItemText primary="Conclusion" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={() => scrollToRef(useversionControlRef)} component="a" href="#use-of-version-control-system">
                    <ListItemText primary="Why use Version Control System?" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Grid>
        </Grid>
      {/* content section */}
        <Grid container sx={{ mt: 5 }}>
          <Grid item lg={1}></Grid>
          <Grid item lg={6}>
            {/* What is git */}
            <div ref={gitRef}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bolder",
                  letterSpacing: "2px",
                  fontFamily: "arial",
                }}
              >
                What is git?
              </Typography>
              <Typography
                variant="h6"
                sx={{ letterSpacing: "2px", fontFamily: "arial", mt: 1 }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                mollitia, non nisi fuga et officia placeat iusto sed id harum
                consequatur, inventore, velit officiis repellat impedit.
                Mollitia, dicta nisi. Vel, assumenda ab!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                mollitia, non nisi fuga et officia placeat iusto sed id harum
                consequatur, inventore, velit officiis repellat impedit.
                Mollitia, dicta nisi. Vel, assumenda ab!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                mollitia, non nisi fuga et officia placeat iusto sed id harum
                consequatur, inventore, velit officiis repellat impedit.
                Mollitia, dicta nisi. Vel, assumenda ab!
              </Typography>
            </Box>
            </div>
              {/*Version Control System */}
            <div ref={versionControlRef}>
            <Box sx={{ mt: 10 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bolder",
                  letterSpacing: "2px",
                  fontFamily: "arial",
                }}
              >
                Version Control System
              </Typography>
              <img alt="" src={vcs} width={700} height={500} />
              <Typography
                variant="h6"
                sx={{ letterSpacing: "2px", fontFamily: "arial", mt: 1 }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                mollitia, non nisi fuga et officia placeat iusto sed id harum
                consequatur, inventore, velit officiis repellat impedit.
                Mollitia, dicta nisi. Vel, assumenda ab!
              </Typography>
            </Box>
            </div>
              {/*What Is GitHub? */}
            <div ref={gitHubRef}>
            <Box sx={{ mt: 10 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bolder",
                  letterSpacing: "2px",
                  fontFamily: "arial",
                }}
              >
               What Is GitHub ?
              </Typography>
              <Typography
                variant="h6"
                sx={{ letterSpacing: "2px", fontFamily: "arial", mt: 1 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quibusdam libero vero fugit sequi hic consequatur eligendi! Deleniti, totam quae. Nesciunt officiis animi provident voluptates repudiandae similique voluptas, natus soluta cumque esse, vel eveniet eos? Aliquam dolorum recusandae at quaerat eligendi aliquid assumenda temporibus necessitatibus natus, odio inventore, animi voluptatem minima quis pariatur sequi, reprehenderit dolores esse maxime. Illum, ipsum.
              </Typography>
            </Box>
            </div>  
              {/*Conclusion */}
              <div ref={conclusionRef}>  
              <Box sx={{ mt: 10 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bolder",
                  letterSpacing: "2px",
                  fontFamily: "arial",
                }}
              >
              Conclusion
              </Typography>
              <Typography
                variant="h6"
                sx={{ letterSpacing: "2px", fontFamily: "arial", mt: 1 }}
              >
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos maxime nisi facilis laudantium fugiat quasi distinctio ullam soluta consectetur, numquam odio sapiente consequuntur, recusandae, debitis placeat quisquam dolore porro similique modi? Placeat fuga earum rerum sunt nemo velit dolorum recusandae quam ratione quas laboriosam autem atque laborum architecto dolores reiciendis perspiciatis, odio delectus iste error assumenda nostrum vitae dicta temporibus.
              </Typography>
            </Box> 
            </div> 
            {/*Why use Version Control System?*/}
            <div ref={useversionControlRef}>
            <Box sx={{ mt: 10 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bolder",
                  letterSpacing: "2px",
                  fontFamily: "arial",
                }}
              >
               Why use Version Control System?
              </Typography>
              <Typography
                variant="h6"
                sx={{ letterSpacing: "2px", fontFamily: "arial", mt: 1 }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum officia iste voluptates molestiae deleniti debitis vero corrupti. Porro iure illum cupiditate ad sunt quas temporibus eius cum suscipit inventore quos tempore facilis alias ex error illo quo itaque, ipsum ea explicabo, nulla laborum! Et, repellendus. Aspernatur provident omnis modi, necessitatibus dolores mollitia odio perferendis, labore exercitationem adipisci perspiciatis consequatur atque!
              </Typography>
            </Box>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Greetings/>

    </>
  );
};

export default GitNotes;
