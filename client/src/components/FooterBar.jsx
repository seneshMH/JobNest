import React from "react";

import { Typography } from "@mui/material";
import styled from "@emotion/styled";

function FooterBar() {
    const Footer = styled("footer")`
        background-color: #282c34;
        color: white;
        padding: 1rem;
        text-align: center;
        position: fixed;
        bottom: 0;
        width: 100%;
    `;

    return (
        <Footer>
            <Typography variant="body2">
                © {new Date().getFullYear()} Job Nest. All rights reserved.
            </Typography>
        </Footer>
    );
}

export default FooterBar;
