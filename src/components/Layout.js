import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";


function Layout() {
    return (
        // <div id="grid">
        //     <div id="left"></div>
        //     <div id="right">

        //       <Link to={'/opcoes'} className="link"> The BEATLES</Link>

        //     </div>
        // </div>

        <Box className="main game">
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, border: 'none', height: '70vh', width: '135vh', padding: '10px', background: 'white'}}>
              <Box>
                <Typography sx={{fontSize: '65px', fontFamily: " Playwrite GB J"}}>
                    The Beatles
                </Typography>
                <Link to={'/opcoes'} className="linkLayout">Explorar</Link>
                </Box>
                
              {/* <div class="imgLayout">

              </div> */}


              {/* */}

           <div class="i-frame">
           <iframe
             width="560"
              height="315"
              src="https://www.youtube.com/embed/CGj85pVzRJs?si=z_haaszAGY-u-r87" 
              title="YouTube video player" 
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen></iframe> 
                <div class="stand-1"></div>
                <div class="stand-2"></div>
            </div>


            </Box>
        </Box>

        // <iframe width="1000" height="315" src="https://www.youtube.com/embed/CGj85pVzRJs?si=W3maHJ6p0omnktaj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        // <div class="hero game">
        //      <Link to={'/opcoes'} className="link"> The BEATLES</Link>
        // </div>
    )
};

export default Layout;