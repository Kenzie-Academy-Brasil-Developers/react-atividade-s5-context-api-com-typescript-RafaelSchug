import './App.css';
import Cart from './components/Cart';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Products></Products>
        <Cart></Cart>
      </header>
    </div>
  );
}

export default App;
