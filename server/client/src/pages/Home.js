import React from "react";
import { Typography, Button, AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const AppContainer = styled("div")`
    text-align: center;
    padding: 2rem;
`;

const Heading = styled(Typography)`
    margin: 2rem 0;
    font-size: 2.5em;
    color: #333; /* Adjust the color according to your theme */
`;

const ButtonContainer = styled("div")`
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
`;

const CustomButton = styled(Button)`
    padding: 1.5rem 3rem;
    font-size: 1.2em;
    transition: background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #4caf50; /* Change to your preferred hover background color */
        color: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add a subtle box-shadow on hover */
    }
`;

const StyledAppBar = styled(AppBar)`
    background-color: #282c34; /* Adjust the color according to your theme */
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

const Footer = styled("footer")`
    background-color: #282c34;
    color: white;
    padding: 1rem;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const Home = () => {
    return (
        <div>
            <StyledAppBar position="static">
                <StyledToolbar>
                    <Typography variant="h6">
                        <LogoLink to="/">Job Nest</LogoLink>
                    </Typography>
                    {/* Add any additional AppBar content or menu items here */}
                </StyledToolbar>
            </StyledAppBar>

            <AppContainer>
                <Heading variant="h3" align="center">
                    Find Your Dream Job or Hire Top Talent!
                </Heading>
                <ButtonContainer>
                    <CustomButton variant="outlined">
                        <Link to="/employer/dashboard">Hire Talent</Link>
                    </CustomButton>
                    <CustomButton variant="outlined">
                        <Link to="/employee/feed">Get Job Now</Link>
                    </CustomButton>
                </ButtonContainer>
            </AppContainer>

            <Footer>
                <Typography variant="body2">
                    © {new Date().getFullYear()} Job Nest. All rights reserved.
                </Typography>
            </Footer>
        </div>
    );
};

export default Home;
