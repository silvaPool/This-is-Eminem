import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Layout() {
    return (
        // <div id="grid">
        //     <div id="left"></div>
        //     <div id="right">

        //       <Link to={'/opcoes'} className="link"> The BEATLES</Link>

        //     </div>
        // </div>

        <div class="hero game">
             <Link to={'/opcoes'} className="link"> The BEATLES</Link>
        </div>
    )
};

export default Layout;