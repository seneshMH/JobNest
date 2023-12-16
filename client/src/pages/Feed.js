import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    AppBar,
    Box,
    Card,
    Container,
    Grid,
    TextField,
    Toolbar,
    Typography,
    InputAdornment,
    Button,
    Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const FeedContainer = styled(Container)`
    padding: 2% 0;
`;

const SearchBox = styled(Box)`
    width: 100%;
    padding: 2% 0;
`;

const CardsContainer = styled(Grid)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const FeedCard = styled(Card)`
    height: 100%;
    overflow: hidden;
    // padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05); /* Add a slight scale effect on hover */
    }
`;

const HomeButton = styled(Button)`
    // margin: 5px 0;
`;

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

const Footer = styled("footer")`
    background-color: #282c34;
    color: white;
    padding: 1rem;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const Feed = () => {
    const [query, setQuery] = useState("");
    const [post, setPost] = useState();

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get(`http://localhost:8080/posts/${query}`);
            setPost(response.data);
        };

        const fetchInitialPosts = async () => {
            const response = await axios.get(`http://localhost:8080/allPosts`);
            console.log(response);
            setPost(response.data);
        };

        if (query.length === 0) fetchInitialPosts();
        if (query.length > 2) fetchPosts();
    }, [query]);

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

            <FeedContainer>
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={12} md={12} lg={12}>
                        <HomeButton variant="outlined">
                            <Link to="/">Home</Link>
                        </HomeButton>
                        <SearchBox>
                            <TextField
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                placeholder="Search..."
                                sx={{ width: "100%" }}
                                fullWidth
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </SearchBox>
                    </Grid>
                </Grid>

                <CardsContainer container spacing={2}>
                    {post &&
                        post.map((p) => (
                            <Grid key={p.id} item xs={12} md={6} lg={4}>
                                <FeedCard>
                                    <Box sx={{ padding: "20px" }}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontSize: "2rem",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {p.profile}
                                        </Typography>
                                        <Divider sx={{ padding: "5px" }} />
                                        <Typography
                                            sx={{ color: "#585858", marginTop: "2%" }}
                                            variant="body"
                                        >
                                            Description: {p.desc}
                                        </Typography>
                                        <br />
                                        <br />
                                        <Typography variant="h6">
                                            Years of Experience: {p.exp} years
                                        </Typography>

                                        <Typography gutterBottom variant="body">
                                            Skills :{" "}
                                        </Typography>
                                        {p.techs.map((s, i) => (
                                            <Typography variant="body" gutterBottom key={i}>
                                                {s} .{` `}
                                            </Typography>
                                        ))}
                                    </Box>
                                </FeedCard>
                            </Grid>
                        ))}
                </CardsContainer>
            </FeedContainer>

            <Footer>
                <Typography variant="body2">
                    © {new Date().getFullYear()} Job Nest. All rights reserved.
                </Typography>
            </Footer>
        </div>
    );
};

export default Feed;
