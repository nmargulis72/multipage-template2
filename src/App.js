import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services'
import Products from './pages/Products/Products'
import Signup from './pages/SignUp/Signup'
import {Navbar, Footer} from './components';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router className="App">
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/products' element={<Products />} />
      <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
