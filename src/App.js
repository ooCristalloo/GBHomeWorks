import './App.css';
import HomePage from "./components/HomePage";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import store from  './components/store/store';
import {Provider} from 'react-redux'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}


export default App;
