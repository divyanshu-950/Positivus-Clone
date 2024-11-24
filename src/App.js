import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Services from './Component/Services';
import Testimonials from './Component/Testimonials';
import Working from './Component/Working';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <Router basename='/positivus_clone'>
    <div className="App">
     <Navbar/>
     <Header/>
     <Services/>
     <Working/>
     <Testimonials/>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
