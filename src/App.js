import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Message message="Абсолютно любое сообщение"></Message>
    </div>
  );
}

function Message(props){
  return(
      <div className="message">
          <h1>{props.message}</h1>
          <div className="underline"></div>
      </div>
  );
}

export default App;
