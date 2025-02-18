import React, { useState } from 'react';
import {
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Box,
    Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                text: inputValue.trim(),
            };
            setTodos([...todos, newTodo]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Список задач
            </Typography>
            <form onSubmit={handleAddTodo}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Добавить задачу"
                    value={inputValue}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}/>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{ mb: 2 }}>
                    Добавить задачу
                </Button>
            </form>
            <List>
                {todos.map((todo) => (
                    <ListItem
                        key={todo.id}
                        secondaryAction={
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => handleDeleteTodo(todo.id)}>
                                <DeleteIcon />
                            </IconButton>}>
                        <ListItemText primary={todo.text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
