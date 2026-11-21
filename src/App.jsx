import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Suites from "./pages/Suites/Suites";
import Experiences from './pages/Experiences/Exp'; 
import GettingHere from "./pages/GettingHere/GettingHere";
import './App.scss';

function RouteReset() {
   const { pathname } = useLocation();

   useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
   }, [pathname]);

   return null;
}

function App() {
   return (
      <BrowserRouter>
         <RouteReset />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/suites" element={<Suites />} />
            <Route path="/suites/:suiteSlug" element={<Suites />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/getting-here" element={<GettingHere />} />
            <Route path="*" element={<Home />} />
         </Routes>
      </BrowserRouter>
  );
}

export default App;


