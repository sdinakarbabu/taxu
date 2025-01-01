import './App.css';
import Enquiry from './components/Enquiry/Enquiry';
import Greetings from './components/Greetings/Greetings';
import Navbar from './components/Navbar/Navbar'

const App =()=> {  
  
    return (
      <main className='main'>
        <Navbar/>
        <Greetings />
      </main>
    );
}

export default App;
