import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore/Explore';

const App =()=> {  

    return (
      <main className='main'>
        <Navbar/>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/products' element={<Explore/>} />
            </Routes>
          </BrowserRouter>
        <Footer/>
      </main>
    );
}

export default App;
