import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Private from "./Private";
import Servicedetails from "./components/Servicedetails/Servicedetails";
import Notfound from "./components/Notfound/Notfound";
import Checkout from "./components/Checkout/Checkout";
import AddService from "./components/AddService/AddService";
import ManageService from "./components/ManageService/ManageService";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={
          <Private>
            <About />
          </Private>
        } />
        <Route path="/checkout" element={
          <Private>
            <Checkout/>
          </Private>
        } />
        <Route path="/addservice" element={
          <Private>
            <AddService/>
          </Private>
        } />
        <Route path="/manage" element={
          <Private>
            <ManageService/>
          </Private>
        } />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="servicedetails/:id" 
        element={<Servicedetails/>}/>

        <Route path="*" element={<Notfound/>}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
