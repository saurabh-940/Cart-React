import "./Style/app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import {Toaster} from 'react-hot-toast'
import Cart from "./Components/Cart";
function App() { 
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exa path="/Cart" element={<Cart/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <Toaster/>
    </>
  );
}

export default App;
