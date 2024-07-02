import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBoxHistorias = styled(Box)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
 
`



function HistoriasPage() {
    return (
      <StyledBoxHistorias>

      <Stack textAlign={'center'} gap={'2rem'}>

        <Typography sx={{color: 'black', fontFamily: 'Playwrite GB J', fontSize: '25px'}}>
            The Beatles - Histórias
        </Typography>

        <Typography sx={{fontFamily: 'Playwrite GB J', fontSize: '20px'}}>
          Now And Then

            <Typography sx={{fontFamily: 'Playwrite GB J', fontSize: '15px', marginTop: '10px', marginBottom: '15px'}}>
                02.11.23
            </Typography>
        </Typography>

        </Stack>

        <Divider />

       <Box sx={{padding: '15px', textAlign: 'left', width: '50%', margin: '0 auto'}}>
          <Typography sx={{fontSize: '15px'}}>
            <Typography sx={{fontSize: '18px', lineHeight: '26px', letterSpacing: 'normal'}}>
         <b> “NOW AND THEN” TO BE RELEASED WORLDWIDE
            THURSDAY, NOVEMBER 2 AT 2PM GMT / 10AM EDT / 7AM PDT </b>
            </Typography>

            <Typography sx={{fontSize: '18px', lineHeight: '26px', letterSpacing: 'normal'}}>

            <b>  THE BEATLES’ 1962-1966 (‘THE RED ALBUM’) AND 1967-1970 (‘THE BLUE ALBUM’) COLLECTIONS EXPANDED, MIXED IN STEREO & DOLBY ATMOS FOR 2023 EDITION RELEASES OUT NOVEMBER 10  </b>

            </Typography>

          <Typography sx={{fontSize: '18px', lineHeight: '26px', letterSpacing: 'normal'}}>

            London – October 26, 2023 – Together and apart, The Beatles have always had a talent for the unexpected. And now, 2023 brings one of the most anticipated releases of their long and endlessly eventful history. “Now And Then” is the last Beatles song – written and sung by John Lennon, developed and worked on by Paul McCartney, George Harrison and Ringo Starr, and now finally finished by Paul and Ringo over four decades later.

            </Typography>

            <Typography  sx={{fontSize: '18px', lineHeight: '26px', letterSpacing: 'normal'}}>

            “Now And Then” will be released worldwide at 2pm GMT / 10am EDT / 7am PDT on Thursday, November 2 by Apple Corps Ltd./Capitol/UMe. The double A-side single pairs the last Beatles song with the first: the band’s 1962 debut UK single, “Love Me Do,” a truly fitting full-circle counterpart to “Now And Then.” Both songs are mixed in stereo and Dolby Atmos, and the release features original cover art by renowned artist Ed Ruscha. The new music video for “Now And Then” will debut on Friday, November 3. More details including global premiere plans will be announced.
            </Typography>
          </Typography>
       </Box>
      
      </StyledBoxHistorias>
    )
};

export default HistoriasPage;