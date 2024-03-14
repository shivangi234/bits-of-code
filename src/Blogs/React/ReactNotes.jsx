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
import ReactHeader from "../../Assets/images/React/reactjs.png";
import vcs from "../../Assets/images/Git/vcs.png"
import Greetings from "../../components/Greetings/Greetings";
const ReactNotes = () => {

  const scrollToRef = (ref) => {
    if (ref.current) {
      const yPos = ref.current.getBoundingClientRect().top;
      window.scrollTo({ top: yPos - 100, behavior: "smooth" });
    }
  };

  const clientRef = useRef(null);
  const serverRef = useRef(null);
  const staticRef = useRef(null);
  const problemsRef = useRef(null);
  const methodsRef = useRef(null);
  const benifitsRef = useRef(null);
  return (
    <>
      <Box sx={{ paddingTop: "90px" }}>
        {/* header section */}
        <Grid container>
          <Grid item lg={1}></Grid>
          <Grid item lg={7}>
            <Box>
              <img alt="" src={ReactHeader} width={700} height={300} />
              <Grid container justifyContent="center" sx={{ mt: 2 }}>
                <Grid item lg={8}>
                  <Box sx={{ textAlign: "center" }}>
                    <Chip label="React" color="secondary" />
                    &nbsp;&nbsp;
                    <Chip label="Interview" color="secondary" />
                    <br />
                    <br />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Core Concept About React
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
                  <ListItemButton onClick={() => scrollToRef(clientRef)} component="a" href="#client-side-rendering">
                    <ListItemText primary="Why use reactjs" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton  onClick={() => scrollToRef(serverRef)} component="a" href="#server-side-rendering">
                    <ListItemText primary="What is JSX" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={() => scrollToRef(staticRef)} component="a" href="#static-site-generation">
                    <ListItemText primary="What Is Virtual DOM?" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton  onClick={() => scrollToRef(problemsRef)} component="a" href="#problems-with-reactjs">
                    <ListItemText primary="Explain React State and Props" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={() => scrollToRef(methodsRef)} component="a" href="#methods-of-prerendering-using-next-js">
                    <ListItemText primary="Explain React Hooks" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={() => scrollToRef(methodsRef)} component="a" href="#benifits-Of-using-next-js">
                    <ListItemText primary="What are the different lifecycle methods of React" />
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
            {/* Client Side rendering */}
            <div ref={clientRef}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bolder",
                  letterSpacing: "2px",
                  fontFamily: "arial",
                }}
              >
               Client Side rendering
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
              {/*Server Side rendering */}
            <div ref={serverRef}>
            <Box sx={{ mt: 10 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bolder",
                  letterSpacing: "2px",
                  fontFamily: "arial",
                }}
              >
               Server Side rendering
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
              {/*Static Site Generation */}
            <div ref={staticRef}>
            <Box sx={{ mt: 10 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bolder",
                  letterSpacing: "2px",
                  fontFamily: "arial",
                }}
              >
               Static Site Generation 
              </Typography>
              <Typography
                variant="h6"
                sx={{ letterSpacing: "2px", fontFamily: "arial", mt: 1 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quibusdam libero vero fugit sequi hic consequatur eligendi! Deleniti, totam quae. Nesciunt officiis animi provident voluptates repudiandae similique voluptas, natus soluta cumque esse, vel eveniet eos? Aliquam dolorum recusandae at quaerat eligendi aliquid assumenda temporibus necessitatibus natus, odio inventore, animi voluptatem minima quis pariatur sequi, reprehenderit dolores esse maxime. Illum, ipsum.
              </Typography>
            </Box>
            </div>  
              {/*Problems With React Js*/}
              <div ref={problemsRef}>  
              <Box sx={{ mt: 10 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bolder",
                  letterSpacing: "2px",
                  fontFamily: "arial",
                }}
              >
               Problems With React Js
              </Typography>
              <Typography
                variant="h6"
                sx={{ letterSpacing: "2px", fontFamily: "arial", mt: 1 }}
              >
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos maxime nisi facilis laudantium fugiat quasi distinctio ullam soluta consectetur, numquam odio sapiente consequuntur, recusandae, debitis placeat quisquam dolore porro similique modi? Placeat fuga earum rerum sunt nemo velit dolorum recusandae quam ratione quas laboriosam autem atque laborum architecto dolores reiciendis perspiciatis, odio delectus iste error assumenda nostrum vitae dicta temporibus.
              </Typography>
            </Box> 
            </div> 
            {/*Methos Of Prerendering Next Js*/}
            <div ref={methodsRef}>
            <Box sx={{ mt: 10 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bolder",
                  letterSpacing: "2px",
                  fontFamily: "arial",
                }}
              >
                  Methos Of Prerendering Next Js
              </Typography>
              <Typography
                variant="h6"
                sx={{ letterSpacing: "2px", fontFamily: "arial", mt: 1 }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum officia iste voluptates molestiae deleniti debitis vero corrupti. Porro iure illum cupiditate ad sunt quas temporibus eius cum suscipit inventore quos tempore facilis alias ex error illo quo itaque, ipsum ea explicabo, nulla laborum! Et, repellendus. Aspernatur provident omnis modi, necessitatibus dolores mollitia odio perferendis, labore exercitationem adipisci perspiciatis consequatur atque!
              </Typography>
            </Box>
            </div>
             {/*Benifits of Next js*/}
             <div ref={benifitsRef}>
            <Box sx={{ mt: 10 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bolder",
                  letterSpacing: "2px",
                  fontFamily: "arial",
                }}
              >
              Benifits of Next js
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

export default ReactNotes;
