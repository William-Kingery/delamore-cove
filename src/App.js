import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Suites from "./pages/Suites/Suites";
import Experiences from './pages/Experiences/Exp'; 
import GettingHere from "./pages/GettingHere/GettingHere";
import './App.scss';

function App() {

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/suites" element={<Suites />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/getting-here" element={<GettingHere />} />
         </Routes>
      </BrowserRouter>
  );
}

export default App;


