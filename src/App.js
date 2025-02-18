import logo from './logo.svg';
import './App.css';
import TemperatureConverter from "./components/TemperatureConverter";
import {Box} from "@mui/material";
import TodoList from "./components/TodoList";

function App() {

    const CELSIUS = 1;
    const FAHRENHEIT = 2;

    return (
        <div className="App">
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mt={2}>
                <TemperatureConverter type={CELSIUS}/>
                <TemperatureConverter type={FAHRENHEIT}/>
            </Box>
            <TodoList/>
        </div>
    );
}


export default App;
