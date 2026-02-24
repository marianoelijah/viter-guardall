import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./components/pages/frontend/home/Home";
import { StoreProvider } from "./components/store/storeContext";
import OurProductsPage from "./components/pages/frontend/OurProducts/OurProductsPage";
import WhoWeArePage from "./components/pages/frontend/landing-page/WhoWeArePage";
import OurClientsPage from "./components/pages/frontend/OurClients/OurClientsPage";
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
import EbsPage from "./components/pages/frontend/OurProducts/product extend/ebs/EbsPage";
import OnityPage from "./components/pages/frontend/OurProducts/product extend/onity/OnityPage";
import OrbitaPage from "./components/pages/frontend/OurProducts/product extend/orbita/OrbitaPage";
import ParadoxPage from "./components/pages/frontend/OurProducts/product extend/paradox/ParadoxPage";
import CassPage from "./components/pages/frontend/OurProducts/product extend/cass/CassPage";
import MagneticPage from "./components/pages/frontend/OurProducts/product extend/magnetic/MagneticPage";
import LedaPage from "./components/pages/frontend/OurProducts/product extend/leda/LedaPage";
import FaacPage from "./components/pages/frontend/OurProducts/product extend/faac/FaacPage";
import DeltaPage from "./components/pages/frontend/OurProducts/product extend/delta/DeltaPage";
import VesdaPage from "./components/pages/frontend/OurProducts/product extend/vesda/VesdaPage";
import QuickPage from "./components/pages/frontend/OurProducts/product extend/quickalert/QuickPage";
import Fin4000ac from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Honeywell/Fin4000ac";
import Fin4000mik from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Honeywell/Fin4000mik";
import OmniProxProduct from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Honeywell/OmniProxProduct";
import LobbyWorksCredentials from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Honeywell/LobbyWorksCredentials";
import ProWatch from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Honeywell/ProWatch";
import LobbyWorksVisitor from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Honeywell/LobbyWorksVisitor";
import OmniProxCredentials from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Honeywell/OmniProxCredentials";
import OmniAssure from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Honeywell/OmniAssure";
import OmniProx from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Honeywell/OmniProx";
import DR4200Series from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Honeywell/DR4200Series";
import HonFin400Mik from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Honeywell/HonFin400Mik";
import HonFin400Ac from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Honeywell/HonFin400Ac";
import Pw6101Series from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Honeywell/Pw6101Series";
import PwSeries from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Honeywell/PwSeries";
import ContactlessProximity from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Honeywell/ContactlessProximity";
import ContactlessSmart from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Honeywell/ContactlessSmart";
import Mifare from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Honeywell/Mifare";
import SmartCardReader from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/SmartCardReader";
import GovernmentReader from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/GovernmentReader";
import TsReader from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/TsReader";
import TsScramblePad from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/TsScramblePad";
import ScramblePadReader from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/ScramblePadReader";





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
            <Route path="/products/foster-freeman" element={<FosterPage />} />

             {/* Guard Tour Systems */}
            <Route path="/products/ebs" element={<EbsPage />} />

             {/* Hotel Locking Systems and Hotel Safes */}
            <Route path="/products/onity" element={<OnityPage />} />
            <Route path="/products/orbita" element={<OrbitaPage />} />

              {/* Intrusion / Burglary Alarm Systems */}  
            <Route path="/products/paradox" element={<ParadoxPage />} />

            {/* Parking Management / Parking Guidance System */} 
            <Route path="/products/cass" element={<CassPage />} />

            {/* Vehicle Barrier System and Pedestrian Barriers */}
            <Route path="/products/magnetic" element={<MagneticPage />} />
            <Route path="/products/leda" element={<LedaPage />} />
            <Route path="/products/faac" element={<FaacPage />} />
            <Route path="/products/delta" element={<DeltaPage />} />

            {/* Aspiring Smoke Detection */} 
            <Route path="/products/vesda" element={<VesdaPage />} />

            {/* Quickalert */} 
            <Route path="/products/quick-alert" element={<QuickPage />} />

            {/* Honeywell Product Details Route */}
             <Route path="/our-products/honeywell/fin4000ac" element={<Fin4000ac />} />
             <Route path="/our-products/honeywell/fin4000mik" element={<Fin4000mik />} />
             <Route path="/our-products/honeywell/omniprox" element={<OmniProxProduct />} />
             <Route path="/our-products/honeywell/lobbyworks-credentials" element={<LobbyWorksCredentials />} />
             <Route path="/our-products/honeywell/pro-watch" element={<ProWatch />} />
             <Route path="/our-products/honeywell/lobbyworks-visitor" element={<LobbyWorksVisitor />} />
             <Route path="/our-products/honeywell/omniprox-credentials" element={<OmniProxCredentials />} />
             <Route path="/our-products/honeywell/omniassure" element={<OmniAssure />} />
             <Route path="/our-products/honeywell/omniprox-proximity" element={<OmniProx />} />
             <Route path="/our-products/honeywell/dr4200-series" element={<DR4200Series />} />
             <Route path="/our-products/honeywell/fin400mik" element={<HonFin400Mik />} />
             <Route path="/our-products/honeywell/fin400ac" element={<HonFin400Ac />} />
             <Route path="/our-products/honeywell/pw6101-series" element={<Pw6101Series />} />
             <Route path="/our-products/honeywell/pw-series" element={<PwSeries />} />
             <Route path="/our-products/honeywell/contactless-proximity" element={<ContactlessProximity />} />
             <Route path="/our-products/honeywell/contactless-smart" element={<ContactlessSmart />} />
             <Route path="/our-products/honeywell/mifare" element={<Mifare />} />

             {/* Hirsch Product Details Route */}
             <Route path="/our-products/honeywell/smart-card-reader" element={<SmartCardReader />} />
             <Route path="/our-products/honeywell/government-reader" element={<GovernmentReader />} />
             <Route path="/our-products/honeywell/ts-reader" element={<TsReader />} />
             <Route path="/our-products/honeywell/ts-scramblepad" element={<TsScramblePad />} />
             <Route path="/our-products/honeywell/scramblepad-reader" element={<ScramblePadReader />} />





          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;