import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Library from './views/Library/Library';
import Categories from './views/Categories/Categories';
import About from './views/About/About';

function App() {
  return <BrowserRouter>
    <div className='main'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/library' element={<Library />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  </BrowserRouter>
};

export default App;
