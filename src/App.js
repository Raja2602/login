import { RegisterPage } from "./RegisterPage";
import LoginPage from "./LoginPage";
import DashBoard from "./DashBoard";
import { BrowserRouter,Route,Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<h1>home</h1>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
