import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";
import New from "./Pages/New/New";
import Single from "./Pages/Single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { serviceInputs, stockInputs, userInputs } from "./Data/formsource";
import Signup from "./Pages/Signup/Signup";
import Vitrine from "./Pages/Vitrine/Vitrine";
import Contact from "./Pages/Contact/Contact";
import Apropos from "./Pages/Apropos/Apropos";
import Actualites from "./Pages/Actualites/Actualites";
import Services from "./Pages/Services/Services";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Vitrine />} />
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="contact" element={<Contact />} />
            <Route path="packs" element={<Services />} />
            <Route path="about" element={<Apropos />} />
            <Route path="actualites" element={<Actualites />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New titre="Ajouter un client" inputs={userInputs} />} />
            </Route>

            <Route path="services">
              <Route index element={<List />} />
              <Route path=":servicetId" element={<Single />} />
              <Route path="new" element={<New titre="Ajouter un service" inputs={serviceInputs}  />} />
            </Route>

            <Route path="stock">
              <Route index element={<List />} />
              <Route path=":stockId" element={<Single />} />
              <Route path="new" element={<New titre="Ajouter un article" inputs={stockInputs}  />} />
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
