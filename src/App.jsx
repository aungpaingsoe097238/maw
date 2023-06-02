import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from './pages/Test';
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/test' element={ <Test/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
