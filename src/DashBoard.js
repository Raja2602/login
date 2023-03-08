import { useNavigate, Navigate } from "react-router-dom";
import { logout } from "./Auth";
import NavBar from "./NavBar";
import { isAuthenticated } from './Auth';

export default function DashBoard()
   
{     const navigate=useNavigate();  
    const logoutUser=()=>{
                logout();
                navigate('/login')

}
if (!isAuthenticated()) {
  //redirect user to dashboard
  return <Navigate to="/login" />
}
   return(
    <div>
          <NavBar logoutUser={logoutUser}/>
       <main role="main" className="container mt-5">
             <div className="container">
              <div className="text-center mt-5">
                <p className="text-bold " ><h1>You have registered successfully</h1></p>
              </div>
            </div>
          
      </main>
    </div>
   )


}