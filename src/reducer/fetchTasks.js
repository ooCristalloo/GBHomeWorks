import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const tasksData = [
    {id: 1, name: 'Домашнее задание', desc: 'Сделать домашнее задание', completed: false},
    {id: 2, name: 'Друг', desc: 'Позвонить другу', completed: true},
    {id: 3, name: 'Продукты', desc: 'Купить продукты', completed: false}
];


export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        return tasksData;
    }
);

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default tasksSlice.reducer;
