import { Routes , Route} from "react-router-dom";
import Home from './pages/Home'
import Contact from "./pages/Contact";
import About from './pages/About'
import Cart from './pages/Cart'
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-4xl mx-auto  px-4 sm:px-6 lg:px-8">
      <Navbar/>
      <Routes>
<Route path='/' element={<Home/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/about' element={<About/>} />
<Route path='/cart' element={<Cart/>} />

      </Routes>
      
    </div>
  );
}

export default App;
