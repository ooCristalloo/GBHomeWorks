import * as React from "react";
import {Box, Button, Container, Paper, styled, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

const StyledPaper = styled(Paper)(({theme}) => ({
    borderRadius: theme.shape.borderRadius,
    background: "primary.dark",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: theme.shadows[6],
    },
}))

export default function HomePage() {
    const selector = useSelector(theme => theme);
    const dispatch = useDispatch();

    const switchTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    };

    return (
        <Container maxWidth="md" sx={{py: 4}}>
            <StyledPaper elevation={3}>
                <Box className="style_box" bgcolor={selector === "default" ? "primary.light" : "primary.dark"} sx={{p: 2}}>
                    <Typography variant="body1" color={selector === "default" ? "black" : "white"} gutterBottom>
                        Здесь совершенно случайный текст
                    </Typography>
                    <Button variant="contained" color="primary" onClick={switchTheme} sx={{mt: 2}}>
                        {selector === "default" ? "Включить темную тему" : "Включить светлую тему"}
                    </Button>
                </Box>
            </StyledPaper>
        </Container>
    )
}

