import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";
import New from "./Pages/New/New";
import Single from "./Pages/Single/Single";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { serviceInputs, stockInputs, userInputs } from "./Data/formsource";
import Signup from "./Pages/Signup/Signup";
import Vitrine from "./Pages/Vitrine/Vitrine";
import Contact from "./Pages/Contact/Contact";
import Apropos from "./Pages/Apropos/Apropos";
import Actualites from "./Pages/Actualites/Actualites";
import Services from "./Pages/Services/Services";
import Errorpage from "./Pages/ErrorPage/Errorpage";
import { AuthContext } from "./Context/AuthContext";
import { useContext } from "react";


function App() {


  const {currentUser} = useContext(AuthContext)



const RequireAuth = ({children}) => {


return currentUser ? (children) : <Navigate to="/login"/> ;

}; 

console.log( currentUser);


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Vitrine />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Errorpage />} />
            <Route path="home" element={
            <RequireAuth>
            <Home />
            </RequireAuth>
            } />
            <Route path="signup" element={<Signup />} />
            <Route path="contact" element={
            
            <Contact />
          } />
            <Route path="packs" element={ 
              <Services />
            } />
            <Route path="about" element={<Apropos />} />
            <Route path="actualites" element={<Actualites />} />
            <Route path="users">
              <Route index element={<RequireAuth> 
                <List />
              </RequireAuth>} />
              <Route path=":userId" element={  
              <RequireAuth>
              <Single />
              </RequireAuth>
            } />
              <Route path="new" element={
              <RequireAuth>              
              <New titre="Ajouter un client" inputs={userInputs} />
              </RequireAuth>  
              } />
            </Route>

            <Route path="services">
              <Route index element={
              <RequireAuth>  
              <List />
            </RequireAuth>  
          } />
              <Route path=":servicetId" element={
              <RequireAuth>  
              <Single />
              </RequireAuth>  } />
              
              <Route path="new" element={
             <RequireAuth>  
              <New titre="Ajouter un service" inputs={serviceInputs}  />
              </RequireAuth>  } />
            </Route>

            <Route path="stock">
              <Route index element={<List />} />
              <Route path=":stockId" element={
              <RequireAuth>  
              <Single />
            </RequireAuth>  } />
              <Route path="new" element={
                <RequireAuth>  
              <New titre="Ajouter un article" inputs={stockInputs}  />
              </RequireAuth>  
              } />
            
            </Route>


            <Route path="invoices">
              <Route index element={<List />} />
              <Route path=":invoiceId" element={<Single />} />
              <Route path="new" element={<New titre="Ajouter une facture" inputs={stockInputs}  />} />
            </Route>


          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
