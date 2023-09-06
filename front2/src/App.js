import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Leads from './components/Leads';
import Sales from './components/Sales';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Register from './components/Register';

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
        <Route path="/login" element={<Login />}>        
        </Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}>        
        </Route>    
        <Route path="/resetpassword" element={<ResetPassword />}>        
        </Route>  
        <Route path="/register" element={<Register />}>        
        </Route>          
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
