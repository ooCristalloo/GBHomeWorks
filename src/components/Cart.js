import * as React from "react";
import {Box, Button, Container, Paper, Stack, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {delCart, DELETE_CART} from "../actions/CartsActions";

export default function Cart(props) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(delCart(props.key));
    };

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
                    {props.text}
                </Typography>

                <Typography variant="body1" color="text.secondary">
                    {props.desc}
                </Typography>

                <Box display="flex" justifyContent="flex-end">
                    <Button variant="outlined" color="error" sx={{ mt: 1 }} onClick={handleDelete}>
                        Удалить продукт
                    </Button>
                </Box>
            </Stack>
        </Paper>
    )
}