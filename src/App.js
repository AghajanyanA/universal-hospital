import './App.css';
import Header from './Components/Header/Header';
import { ReactRouter } from './router/ReactRouter';

function App() {
  return (
    <div className="App">
      <Header />
      <ReactRouter />
    </div>
  );
}

export default App;
