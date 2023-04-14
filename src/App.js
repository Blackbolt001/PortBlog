import logo from './logo.svg';
import './App.css';
const Draggable = require('react-draggable');

function App() {
  return (
    <Draggable cancel=".header">
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Georgia Goose Designs
        </p>
        </header>
    </div>
    </Draggable>
  );
}

export default App;
