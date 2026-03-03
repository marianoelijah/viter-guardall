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
import HirschM64 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/HirschM64";
import HighAssurance from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/HighAssurance";
import MemoryExpansion from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/MemoryExpansion";
import HirschMx1Me from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/HirschMx1Me";
import AlarmExpansion from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/AlarmExpansion";
import Mx1Controller from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/Mx1Controller";
import MxController from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/MxController";
import Snib3 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/Snib3";
import RelayExpansion from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/RelayExpansion";
import Reb8 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/Reb8";
import CirrusCloud from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/CirrusCloud";
import UfhCredentials from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/UfhCredentials";
import TsCards from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/TsCards";
import HfKeyFob from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/HfKeyFob";
import WristbandProximity from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/WristbandProximity";
import ProximityCredentials from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/ProximityCredentials";
import PcGeneral from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hirsch/PcGeneral";
import TB01 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/TB01";
import FR330 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/FR330";
import FR320 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/FR320";
import FR300 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/FR300";
import DF1A from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/DF1A";
import CDUE133L from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/CDUE133L";
import CDUE130L from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/CDUE130L";
import CDS18 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/CDS18";
import AR401RO16 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/AR401RO16";
import AR837EF from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/AR837EF";
import AR837E from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/AR837E";
import AR725E from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/AR725E";
import AR723U from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/AR723U";
import AR727H from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/AR727H";
import AR721H from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/AR721H";
import AR327H from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/AR327H";
import AR331HT from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/AR331HT";
import AR331HS from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/AR331HS";
import AR331U from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/AR331U";
import AR321H from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Mag/AR321H";
import CCMS from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Uber/CCMS";
import KeysManagement from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Uber/KeysManagement";





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
             <Route path="/our-products/hirsch/utrust-ts-contact-smart-card-readers" element={<SmartCardReader />} />
             <Route path="/our-products/hirsch/utrust-ts-government-readers" element={<GovernmentReader />} />
             <Route path="/our-products/hirsch/utrust-ts-readers" element={<TsReader />} />
             <Route path="/our-products/hirsch/hirsch-ts-scramblepad-sc" element={<TsScramblePad />} />
             <Route path="/our-products/hirsch/hirsch-scramble-pad-readers" element={<ScramblePadReader />} />
             <Route path="/our-products/hirsch/hirsch-scramble-factor" element={<HighAssurance />} />
             <Route path="/our-products/hirsch/meb-cb-memory-expansion-board" element={<MemoryExpansion />} />
             <Route path="/our-products/hirsch/aeb8-alarm-expansion-board" element={<AlarmExpansion />} />
             <Route path="/our-products/hirsch/hirsch-m64-controller" element={<HirschM64 />} />
             <Route path="/our-products/hirsch/hirsch-mx-1-me-controller" element={<HirschMx1Me />} />
             <Route path="/our-products/hirsch/hirsch-mx-1-controller" element={<Mx1Controller />} />
             <Route path="/our-products/hirsch/hirsch-mx-controller" element={<MxController />} />
             <Route path="/our-products/hirsch/snib3-secure-network-interface-board" element={<Snib3/>} />
             <Route path="/our-products/hirsch/rs-485-relay-expansion-board" element={<RelayExpansion/>} />
             <Route path="/our-products/hirsch/reb8-relay-expansion-board" element={<Reb8/>} />
             <Route path="/our-products/hirsch/cirrus-cloud-access-control" element={<CirrusCloud/>} />
             <Route path="/our-products/hirsch/utrust-uhf-credentials" element={<UfhCredentials/>} />
             <Route path="/our-products/hirsch/utrust-ts-cards" element={<TsCards/>} />
             <Route path="/our-products/hirsch/utrust-hf-key-fob" element={<HfKeyFob/>} />
             <Route path="/our-products/hirsch/utrust-wristband-proximity" element={<WristbandProximity/>} />
             <Route path="/our-products/hirsch/utrust-proximity-credentials-mag-stripe-card" element={<ProximityCredentials/>} />
             <Route path="/our-products/hirsch/utrust-proximity-credentials" element={<PcGeneral/>} />

             {/* Mag Product Details Route */}
             <Route path="/our-products/mag/tb01" element={<TB01/>} />
             <Route path="/our-products/mag/fr330" element={<FR330/>} />
             <Route path="/our-products/mag/fr320" element={<FR320/>} />
             <Route path="/our-products/mag/fr300" element={<FR300/>} />
             <Route path="/our-products/mag/df1a" element={<DF1A/>} />
             <Route path="/our-products/mag/cdue133l" element={<CDUE133L/>} />
             <Route path="/our-products/mag/cdue130l" element={<CDUE130L/>} />
             <Route path="/our-products/mag/cds18" element={<CDS18/>} />
             <Route path="/our-products/mag/ar401ro16" element={<AR401RO16/>} />
             <Route path="/our-products/mag/ar837ef" element={<AR837EF/>} />
             <Route path="/our-products/mag/ar837e" element={<AR837E/>} />
             <Route path="/our-products/mag/ar725e" element={<AR725E/>} />
             <Route path="/our-products/mag/ar723u" element={<AR723U/>} />
             <Route path="/our-products/mag/ar727h" element={<AR727H/>} />
             <Route path="/our-products/mag/ar721h" element={<AR721H/>} />
             <Route path="/our-products/mag/ar327h" element={<AR327H/>} />
             <Route path="/our-products/mag/ar331ht" element={<AR331HT/>} />
             <Route path="/our-products/mag/ar331hs" element={<AR331HS/>} />
             <Route path="/our-products/mag/ar331u" element={<AR331U/>} />
             <Route path="/our-products/mag/ar321h" element={<AR321H/>} />

             {/* UberGard Product Details Route */}
             <Route path="/our-products/ubergard/software-ccms" element={<CCMS />} />
             <Route path="/our-products/ubergard/keys-management-system" element={<KeysManagement />} />
            
            {/* //  <Route path="/our-products/ubergard/gen5-touchscreen" element={</>} />
            //  <Route path="/our-products/ubergard/3d-air-22" element={</>} />
            //  <Route path="/our-products/ubergard/air-12" element={</>} />
            //  <Route path="/our-products/ubergard/3d-fly" element={</>} /> */}







          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;