import { Box, Typography } from "@mui/material";
import React from "react";

export default function Cards(props) {

    const {item} = props;
  
    return (
        <Box className="card">
            <section className="column-left">
                <img className="card-img" src={`/images/${item.coverImg}`} />
            </section>
            <section className="column-right">
                {/* <span className="material-symbols-outlined">location_on</span> */}
                <Typography sx={{fontSize: "25px", fontFamily: "Playwrite GB J"}}>{props.item.title}</Typography>
                    <Typography className="card-country" sx={{fontSize: '20px', fontFamily: "Playwrite GB J"}}>Estúdio: {props.item.studios}</Typography>
                    {/* <a href={props.item.googleMapLink}>View on Google Maps</a> */}
                    <Typography sx={{fontSize: '20px', fontFamily: "Playwrite GB S"}}>Lançamento: {props.item.date}</Typography>
                    <Typography sx={{fontSize: '20px', fontFamily: "Playwrite GB S"}}>Descrição: {props.item.description}</Typography>
                    <Typography sx={{fontFamily: "Playwrite GB S"}}>Explore: <a href={props.item.googleLink} target="_blank">Veja mais</a></Typography>
                    <Typography sx={{fontFamily: "Playwrite GB S"}}>Loja: <a href={props.item.shop} target="_blank">Compre agora</a></Typography>
                   
            </section>
        </Box>
    )
}

