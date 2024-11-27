import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { NavBarmenu } from "../puntoventa";



export const AppRouter = () => {

    const authStatus = 'autenticated';

  return (
   <Routes>

        {
            ( authStatus === 'not-autenticated' )
                ? 
                
                  <Route path="/auth/*" element={ <LoginPage /> } />

                : 
                
                  <Route path="/*" element={ <NavBarmenu /> } />
        }

        <Route path="/*" element={ <Navigate to="/auth/login" />}/>

   </Routes>
  )
}
