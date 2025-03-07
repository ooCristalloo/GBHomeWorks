import * as React from "react";
import {Alert, Box, Button, Container, Paper, Snackbar, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addCart} from "../actions/CartsActions";
import {useNavigate} from "react-router-dom";

export default function FormCart() {

    const navigate = useNavigate()

    const transferPage = (event) => {
        navigate("/products")
    }

    const dispatch = useDispatch();

    const [text, setText] = useState ("")
    const [desc, setDesc] = useState ("")
    const [open, setOpen] = useState(false)

    const addCarts = () => {
        dispatch(addCart(text, desc));

        setText('');
        setDesc('');
        setOpen(true)
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return
        }
        setOpen(false)
    }

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{p: 4, mt: 4}}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Добавление продукта
                </Typography>

                <Box component="form" noValidate autoComplete="off" sx={{mt: 2}}>
                    <Stack spacing={3}>
                        <TextField fullWidth required id="name" name="name" label="Введите название продукта" variant="outlined" value={text} onChange={(e) => setText(e.target.value)}/>
                        <TextField fullWidth required id="description" name="description" label="Введите описание продукта" variant="outlined" multiline rows={4} value={desc} onChange={(e) => setDesc(e.target.value)}/>
                        <Button variant="contained" color="primary" size="large" sx={{mt: 2}} onClick={addCarts}>
                            Добавить продукт
                        </Button>
                        <Button variant="contained" color="success" size="large" sx={{mt: 2}} onClick={transferPage}>
                            Список продуктов
                        </Button>
                    </Stack>
                </Box>
            </Paper>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                    Продукт успешно добавлен!
                </Alert>
            </Snackbar>
        </Container>
    )
}