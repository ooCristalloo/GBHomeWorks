import * as React from "react";
import {Button, Container, Paper, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchTasks} from "./reducer/fetchTasks";
import {useEffect} from "react";
import TodoCart from "./components/TodoCart";

export default function TodoList() {
    const dispatch = useDispatch();

    const {tasks, status, error} = useSelector((state) => state.tasks);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTasks());
        }
    }, [dispatch, status]);

    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{p: 4, mt: 4}}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Список Задач
                </Typography>
                {tasks.map((task) => (
                    <TodoCart name={task.name} desc={task.desc}/>
                ))}
            </Paper>
        </Container>
    );
}