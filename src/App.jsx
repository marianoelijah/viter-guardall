import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./components/pages/frontend/home/Home";
import { StoreProvider } from "./components/store/storeContext";
import OurProductsPage from "./components/pages/frontend/OurProducts/OurProductsPage";
import WhoWeArePage from "./components/pages/frontend/landing-page/WhoWeArePage";
import OurClientsPage from "./components/pages/frontend/OurClients/OurClientsPage";
// import Contacts from "./components/pages/frontend/contacts/Contacts";
import OurContacts from "./components/pages/frontend/contacts/OurContacts";
import HoneywellPage from "/src/components/pages/frontend/OurProducts/product extend/honeywell storage/HoneywellPage";
import HirschPage from "/src/components/pages/frontend/OurProducts/product extend/hirsch storage/HirschPage";
import MagPage from "./components/pages/frontend/OurProducts/product extend/mag storage/MagPage";
import UberPage from "./components/pages/frontend/OurProducts/product extend/ubergard storage/UberPage";
import AlarmPage from "./components/pages/frontend/OurProducts/product extend/alarm storage/AlarmPage";
import FermaxPage from "./components/pages/frontend/OurProducts/product extend/fermax storage/FermaxPage";


// import OurContacts from "./components/pages/frontend/contacts/OurContacts";


const App = () => {


  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeArePage />} />
            <Route path="/our-products" element={<OurProductsPage />} />
            <Route path="/our-clients" element={<OurClientsPage />} />
            <Route path="/contacts" element={<OurContacts />} />


            <Route path="products/honeywell" element={<HoneywellPage />} />
            <Route path="products/hirsch" element={<HirschPage />} />
            <Route path="products/mag" element={<MagPage />} />
            <Route path="products/ubergard" element={<UberPage />} />
            <Route path="products/alarm-com" element={<AlarmPage />} />
            <Route path="products/fermax" element={<FermaxPage />} />
            
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;