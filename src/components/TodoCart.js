import * as React from "react";
import {Box, Button, Container, Paper, Stack, TextField, Typography} from "@mui/material";

export default function TodoCart(props) {

    return (
        <Paper
            elevation={2}
            sx={{
                p: 3,
                mb: 2,
                borderRadius: 2,
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                    boxShadow: 4,
                },
            }}
        >
            <Stack spacing={2}>
                <Typography variant="h5" component="h2" fontWeight="bold">
                    {props.name}
                </Typography>

                <Typography variant="body1" color="text.secondary">
                    {props.desc}
                </Typography>
            </Stack>
        </Paper>
    )
}