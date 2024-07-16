import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';


function LayoutTeste() {
    return (

        <Box className="fundoTeste">

            {/* <Box sx={{border: '1px solid black'}}>
                skjsdkjsdskdjsdk
            </Box>

            <Stack display={'flex'} justifyContent={'center'} alignItems={'center'}>
        
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

            <Typography sx={{fontSize: '70px', fontFamily: 'Playwrite GB J', border: '1px solid black', letterSpacing: '0.5rem'}}>
                The Beatles
            </Typography>

            </Stack> */}
{/* 
width="560"
height="315" */}

            <div className="desenho">

                <div>
                <div class="i-frame">
                    <iframe
                    width="390"
                    height="250"
                    src="https://www.youtube.com/embed/CGj85pVzRJs?si=z_haaszAGY-u-r87" 
                    title="YouTube video player" 
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen></iframe> 
                        <div class="stand-1"></div>
                        <div class="stand-2"></div>
            </div>
                </div>

                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

                <Typography sx={{fontSize: '4rem', color: 'white', fontFamily: 'Playwrite GB J'}}>
                   The Beatles
                </Typography>

                <button class="cssbuttons-io-button">
                        Get started
                        <div class="icon">
                            <svg
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                fill="currentColor"
                            ></path>
                            </svg>
                        </div>
                </button>

                </Box>

            </div>

         </Box>
     
    )
};

export default LayoutTeste;