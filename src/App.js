import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore/Explore';
import ContactForm from './pages/ContactForm/ContactForm';
import Greetings from './components/Greetings/Greetings';
import Google from './components/Google/Google';


const App =()=> {  
    return (
      <main className='main'>
        <Navbar/>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Google/>} />
              <Route path='/home' element={<Home/>} />
              <Route path='/products' element={<Explore/>} />
              <Route path='/contact'  element={<ContactForm/>} />
            </Routes>
          </BrowserRouter>
        <hr style={{width:'100vw',padding:"1px", backgroundColor:'#000000'}}/>
        <Footer/>
        <hr style={{width:'100vw',padding:"1px", backgroundColor:'#000'}}/>
      </main>
    );
}

export default App;
