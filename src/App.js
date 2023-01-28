
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React,  {Component} from 'react';
import Navbar from './components/Navbar';
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import { Route, Routes } from "react-router-dom";
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Default />} />
        </Routes> 
        <Modal /> 
        
    </React.Fragment>

  );
  }
}
export default App;