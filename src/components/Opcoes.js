import { Box, Container, Stack, Typography } from "@mui/material";
import AlbumIcon from '@mui/icons-material/Album';
import { Link } from "react-router-dom";

function Opcoes() {
    
    return (
      
       <Box className="teste">
        <Box className="bloco1">
            <Typography sx={{fontSize: "2rem", fontFamily: "Playwrite GB J", textAlign: "center"}}>
              <span className="titleOpcoes">Sejam Bem-vindos, </span> The Siamese Quads <br />
               O que procuram?
            </Typography>
            
        </Box>


        <Box className="bloco2">
            <Stack className="blocos">            
            <Typography sx={{fontSize: '10px', fontFamily: "Outfit"}}>
              <Link to={'/albuns'} className="linkOpcoes">Álbuns</Link>
            </Typography>
            </Stack>
            <Stack className="blocos">
            <Typography sx={{fontSize: '20px', fontFamily: "Outfit"}}>
            <Link to={'/historias'} className="linkOpcoes">Histórias</Link>
            </Typography>
            </Stack>
            <Stack className="blocos">
            <Typography sx={{fontSize: '20px', fontFamily: "Outfit"}}>
                Curiosidades
            </Typography>
            </Stack>
            <Stack className="blocos">
            <Typography sx={{fontSize: '20px', fontFamily: "Outfit"}}>
                Playlists
            </Typography>
            </Stack>
            <Stack className="blocos">
            <Typography sx={{fontSize: '20px', fontFamily: "Outfit"}}>
                Shopping
            </Typography>
            </Stack>
        </Box>

       </Box>
      
    )
}

export default Opcoes;