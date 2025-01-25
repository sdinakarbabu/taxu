import './App.css';
import Footer from './components/Footer/Footer';
import Greetings from './components/Greetings/Greetings';
import Navbar from './components/Navbar/Navbar';
import ContactForm from './components/ContactForm/ContactForm';
import { useEffect, useState } from 'react';
import Enquiry from './components/Enquiry/Enquiry';

const App =()=> {  
  const [contactOn,contactOff] = useState(false);
  const [check,setCheck] = useState(true)
    useEffect(() => {
      const timer = setTimeout(() => {
          setCheck(!check)
      }, 5000);
        return () => clearTimeout(timer);
    }, []);
    return (
      <main className='main'>
        <Navbar/>
        {(check)?<Greetings/>:<Enquiry setChange={contactOff} contactOn={contactOn}/>}
        <ContactForm setChange={contactOff} contactOn={contactOn}/>
        <Footer/>
      </main>
    );
}

export default App;
