import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Leads from './components/Leads';

function App() {
  return (
    <div className="App">   
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>        
        </Route>
        <Route path="/leads" element={<Leads />}>        
        </Route>     
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
