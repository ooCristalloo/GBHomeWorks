import * as React from "react";
import {Button, Container, Paper, Typography} from "@mui/material";
import Cart from "./components/Cart";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function CartList() {

    const navigate = useNavigate()

    const transferPage = (event) => {
        navigate("/")
    }

    const carts = useSelector(state => state.carts);
    console.log(carts);

    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{p: 4, mt: 4}}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Список продуктов
                </Typography>

                {carts.map(cart => (
                    <Cart key={cart.id} text={cart.text} desc={cart.desc}/>
                ))}

                <Button variant="contained" color="error" size="large" sx={{mt: 2}} onClick={transferPage}>
                    Вернуться на главный экран
                </Button>
            </Paper>
        </Container>
    );
}