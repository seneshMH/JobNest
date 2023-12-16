import React from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function NavBar() {
    const StyledAppBar = styled(AppBar)`
        background-color: #282c34;
    `;

    const StyledToolbar = styled(Toolbar)`
        display: flex;
        justify-content: space-between;
    `;

    const LogoLink = styled(Link)`
        text-decoration: none;
        color: white;
        font-size: 1.5em;
        font-weight: bold;
    `;
    return (
        <StyledAppBar position="static">
            <StyledToolbar>
                <Typography variant="h6">
                    <LogoLink to="/">Job Nest</LogoLink>
                </Typography>
            </StyledToolbar>
        </StyledAppBar>
    );
}

export default NavBar;
