import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Menu from './pages/Menu';
 

function App() {
  return (
    <div className="App">
      {/* <Layout> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}  /> 
          <Route path="/about" element={<About/> }  /> 
          <Route path="/menu" element={<Menu/> }  />
          <Route path="/contact" element={<Contact/>}  />  
          <Route path="/*" element={<PageNotFound/>}  /> 
        </Routes>
      </BrowserRouter>
      {/* </Layout> */}
    </div>
  );
}

export default App;
