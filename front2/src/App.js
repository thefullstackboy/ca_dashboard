import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Leads from './components/Leads';
import Sales from './components/Sales';

function App() {
  return (
    <div className="App">   
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>        
        </Route>
        <Route path="/leads" element={<Leads />}>        
        </Route> 
        <Route path="/sales" element={<Sales />}>        
        </Route>       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
