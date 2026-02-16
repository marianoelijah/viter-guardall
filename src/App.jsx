import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./components/pages/frontend/home/Home";
import { StoreProvider } from "./components/store/storeContext";
import OurProductsPage from "./components/pages/frontend/OurProducts/OurProductsPage";
import WhoWeArePage from "./components/pages/frontend/landing-page/WhoWeArePage";
import OurClientsPage from "./components/pages/frontend/OurClients/OurClientsPage";
// import Contacts from "./components/pages/frontend/contacts/Contacts";
import OurContacts from "./components/pages/frontend/contacts/OurContacts";
import HoneywellPage from "./components/pages/frontend/OurProducts/product extend/honeywell/HoneywellPage";
import HirschPage from "./components/pages/frontend/OurProducts/product extend/hirsch/HirschPage";
import MagPage from "./components/pages/frontend/OurProducts/product extend/mag/MagPage";
import UberPage from "./components/pages/frontend/OurProducts/product extend/ubergard/UberPage";
import AlarmPage from "./components/pages/frontend/OurProducts/product extend/alarm/AlarmPage";
import FermaxPage from "./components/pages/frontend/OurProducts/product extend/fermax/FermaxPage";
import CommendPage from "./components/pages/frontend/OurProducts/product extend/commend/CommendPage";
import WebgatePage from "./components/pages/frontend/OurProducts/product extend/webgate/WebgatePage";
import PelcoPage from "./components/pages/frontend/OurProducts/product extend/pelco/PelcoPage";
import HikvisionPage from "./components/pages/frontend/OurProducts/product extend/hikvision/HikvisionPage";
import DahuaPage from "./components/pages/frontend/OurProducts/product extend/dahua/DahuaPage";
import ActiPage from "./components/pages/frontend/OurProducts/product extend/acti/ActiPage";
import GilardoniPage from "./components/pages/frontend/OurProducts/product extend/gilardoni/GilardoniPage";
import CeiaPage from "./components/pages/frontend/OurProducts/product extend/ceia/CeiaPage";
import AutoclearPage from "./components/pages/frontend/OurProducts/product extend/autoclear/AutoclearPage";
import DetnovPage from "./components/pages/frontend/OurProducts/product extend/detnov/DetnovPage";
import FosterPage from "./components/pages/frontend/OurProducts/product extend/foster/FosterPage";






const App = () => {


  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeArePage />} />
            <Route path="/our-products" element={<OurProductsPage />} />
            <Route path="/our-clients" element={<OurClientsPage />} />
            <Route path="/contacts" element={<OurContacts />} />


             {/* Product Brand Section */}
            {/* Access Control System */}
            <Route path="/products/honeywell" element={<HoneywellPage />} />
            <Route path="/products/hirsch" element={<HirschPage />} />
            <Route path="/products/mag" element={<MagPage />} />
            <Route path="/products/ubergard" element={<UberPage />} />
            <Route path="/products/alarm-com" element={<AlarmPage />} />
           
             {/* Audio-Video Intercom & PA-BGM */}
            <Route path="/products/fermax" element={<FermaxPage />} />
            <Route path="/products/commend" element={<CommendPage />} />

             {/* CCTVs */}
            <Route path="/products/webgate" element={<WebgatePage />} />
            <Route path="/products/pelco" element={<PelcoPage />} />
            <Route path="/products/hikvision" element={<HikvisionPage />} />
            <Route path="/products/dahua" element={<DahuaPage />} />
            <Route path="/products/acti" element={<ActiPage />} />

             {/* Detection Systems */}
            <Route path="/products/gilardoni" element={<GilardoniPage />} />
            <Route path="/products/ceia" element={<CeiaPage />} />
            <Route path="/products/autoclear" element={<AutoclearPage />} />

             {/* Fire Alarm */}
            <Route path="/products/detnov" element={<DetnovPage />} />

            {/* Forensic Examination */}
            <Route path="/products/foster" element={<FosterPage />} />
           


          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;