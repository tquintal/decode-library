import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Library from './views/Library/Library';

function App() {
  return <BrowserRouter>
    <div className='main'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/library' element={<Library />} />
      </Routes>
    </div>
  </BrowserRouter>
};

export default App;
