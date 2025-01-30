import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore/Explore';
import ContactForm from './components/ContactForm/ContactForm';

const App =()=> {  

    return (
      <main className='main'>
        <Navbar/>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/products' element={<Explore/>} />
              <Route path='/contact' element={<ContactForm/>} />
            </Routes>
          </BrowserRouter>
        <Footer/>
      </main>
    );
}

export default App;
