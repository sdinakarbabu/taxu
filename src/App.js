import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore/Explore';
import ContactForm from './pages/ContactForm/ContactForm';
import Greetings from './components/Greetings/Greetings';
import PaymentDetails from './pages/PaymentDetails/PaymentDetails';
import About from './pages/About/About';

const App =()=> {  
    return (
      <BrowserRouter>
        <main className='main'>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Greetings/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/products' element={<Explore/>} />
            <Route path='/contact'  element={<ContactForm/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/payment' element={<PaymentDetails/>} />
          </Routes>
          <hr style={{width:'100vw',padding:"1px", backgroundColor:'#000000'}}/>
          <Footer/>
          <hr style={{width:'100vw',padding:"1px", backgroundColor:'#000'}}/>
        </main>
      </BrowserRouter>
    );
}

export default App;
