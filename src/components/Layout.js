import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';


function Layout() {
    return (
      
        <Box className="main game">
            <Box className="whiteBox" >
              <Box>
                <Typography sx={{fontSize: '65px', fontFamily: " Playwrite GB J", position: 'relative', bottom: '50px'}}>
                    The Beatles
                </Typography>
                <Link to={'/opcoes'} className="linkLayout">Explorar <LoginIcon sx={{verticalAlign: 'middle'}}/></Link>
                </Box>
                
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
    )
};

export default Layout;