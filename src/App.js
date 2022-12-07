import './App.css';
import Header from './components/Header/Header';
// import Home from './views/Home/Home';
import Library from './views/Library/Library';

function App() {
  return (
    <div className='main'>
      <Header />
      {/* <Home /> */}
      <Library />
    </div>
  );
}

export default App;
