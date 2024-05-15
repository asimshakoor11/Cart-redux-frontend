import Headers from './components/Headers';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import { Suces } from './components/Suces';
import { Cacel } from './components/Cacel';

function App() {
  return (
    <>
     <Headers />
     <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/cart' element={<CartDetails />}/>
      <Route  path='/success' element={<Suces/>}/>
      <Route  path='/cancel' element={<Cacel/>}/>
     </Routes>
     <Toaster />
    </>
  );
}

export default App;
