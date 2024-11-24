import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Services from './Component/Services';
import Testimonials from './Component/Testimonials';
import Working from './Component/Working';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Services/>
     <Working/>
     <Testimonials/>
     <Footer/>
    </div>
  );
}

export default App;
