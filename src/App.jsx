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
import Gen5 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Uber/Gen5";
import Air22 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Uber/Air22";
import Air12 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Uber/Air12";
import TbsFly from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Uber/TbsFly";
import AccessControl from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Alarm/AccessControl";
import SmartCredentials from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Alarm/SmartCredentials";
import FourDoor from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Alarm/FourDoor";
import DoorController from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Alarm/DoorController";
import OutputControl from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Alarm/OutputControl";
import InputMonitor from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Alarm/InputMonitor";
import TwoReader from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Alarm/TwoReader";
import HomeAut from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Fermax/HomeAut";
import Wit7 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Fermax/Wit7";
import Neo7 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Fermax/Neo7";
import MiloTouch from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Fermax/MiloTouch";
import MeetDesktop from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Fermax/MeetDesktop";
import MarineDigital from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Fermax/MarineDigital";
import KinTouch from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Fermax/KinTouch";
import MiloVideo from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Fermax/MiloVideo";
import BlackMeet from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Fermax/BlackMeet";
import VeoTelephone from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Fermax/VeoTelephone";
import VdsExtra from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Fermax/VdsExtra";
import VeoWifi from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Fermax/VeoWifi";
import MarinePanel from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Fermax/MarinePanel";
import CityPanel from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Fermax/CityPanel";
import DuoxPlus from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Fermax/DuoxPlus";
import CabinetSpeaker from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Commend/CabinetSpeaker";
import ProjectorSpeaker from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Commend/ProjectorSpeaker";
import HornSpeaker from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Commend/HornSpeaker";
import CeilingSpeaker from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Commend/CeilingSpeaker";
import WattAmplifier500 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Commend/WattAmplifier500";
import WattAmplifier250 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Commend/WattAmplifier250";
import WattAmplifier125 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Commend/WattAmplifier125";
import WattAmplifier50 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Commend/WattAmplifier50";
import WattAmplifier20 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Commend/WattAmplifier20";
import NT4100PTIRZ3 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Webgate/NT4100PTIRZ3";
import NT4100PTIRZ2 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Webgate/NT4100PTIRZ2";
import NK1080DIR30 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Webgate/NK1080DIR30";
import NK1080DF2 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Webgate/NK1080DF2";
import NE5100VDSIR2 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Webgate/NE5100VDSIR2";
import NE5100VDSIR1 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Webgate/NE5100VDSIR1";
import NK5100BLIR42 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Webgate/NK5100BLIR42";
import NK1080BLIR48 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Webgate/NK1080BLIR48";
import NE2100EDSIR2 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Webgate/NE2100EDSIR2";
import NE5100EDSIR1 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Webgate/NE5100EDSIR1";
import Ulisee from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Pelco/Ulisee";
import Spectra from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Pelco/Spectra";
import Esprit from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Pelco/Esprit";
import Sarix from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Pelco/Sarix";
import Optera from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Pelco/Optera";
import Pelco from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Pelco/Pelco";
import TurretCamera from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Pelco/TurretCamera";
import MiniDome from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Pelco/MiniDome";
import DomeCamera from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Pelco/DomeCamera";
import SeriesDome from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Pelco/SeriesDome";
import LongBullet from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Pelco/LongBullet";
import CameraSeries from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Pelco/CameraSeries";
import Professional from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Pelco/Professional";
import Environmental from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Pelco/Environmental";
import DS2CD2T43G2 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hikvision/DS2CD2T43G2";
import DS2DE7A825IW from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hikvision/DS2DE7A825IW";
import DS2SE7C432MWG from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hikvision/DS2SE7C432MWG";
import DS7700NI from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hikvision/DS7700NI";
import DS7608NXI from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hikvision/DS7608NXI";
import DS2CD2143G2 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hikvision/DS2CD2143G2";
import DS2CD2083G2 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hikvision/DS2CD2083G2";
import DS2DE4225IW from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hikvision/DS2DE4225IW";
import Inr415 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Acti/Inr415";
import Gnr340 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Acti/Gnr340";
import Enr130 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Acti/Enr130";
import Z86 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Acti/Z86";
import Z49 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Acti/Z49";
import NetworkDome from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Acti/NetworkDome";
import B928 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Acti/B928";
import A817 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Acti/A817";
import A713 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Acti/A713";
import Cargo from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Gillardoni/Cargo";
import CargoDv from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Gillardoni/CargoDv";
import Fep1000 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Gillardoni/Fep1000";
import HcDv from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Gillardoni/HcDv";
import Xray from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Gillardoni/Xray";
import Amx from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Gillardoni/Amx";
import Breva from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Gillardoni/Breva";
import Argo640 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Gillardoni/Argo640";
import Argo640Dv from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Gillardoni/Argo640Dv";
import Argo536 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Gillardoni/Argo536";
import Smd601 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Ceia/Smd601";
import Smd600 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Ceia/Smd600";
import Pmd2 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Ceia/Pmd2";
import Hipe from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Ceia/Hipe";
import Opengate from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Ceia/Opengate";
import Msdi from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Ceia/Msdi";
import Msd from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Ceia/Msd";
import Pd240cb from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Ceia/Pd240cb";
import Pd240 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Ceia/Pd240";
import Pd140n from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Ceia/Pd140n";
import Emis from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Ceia/Emis";
import Ema from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Ceia/Ema";
import Handwand from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Autoclear/Handwand";
import DvXray from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Autoclear/DvXray";
import Dvsdv from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Autoclear/Dvsdv";
import DvsXray from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Autoclear/DvsXray";
import Inspection6040 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Autoclear/Inspection6040";
import Inspection5333 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Autoclear/Inspection5333";
import N2300 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Autoclear/N2300";
import E5000 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Autoclear/E5000";
import E3500 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Autoclear/E3500";
import Clx from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Autoclear/Clx";
import Technical from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Detnov/Technical";
import Doa from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Detnov/Doa";
import Trd100 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Detnov/Trd100";
import HeatnSmoke from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Detnov/HeatnSmoke";
import ControlPanel from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Detnov/ControlPanel";
import Communication from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Detnov/Commuinication";
import CallPoint from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Detnov/CallPoint";
import BeaconSeries from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Detnov/BeaconSeries";
import PowerSupply from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Detnov/PowerSupply";
import ConnectionBase from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Detnov/ConnectionBase";
import DetnovCloud from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Detnov/DetnovCloud";
import Mad464 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Detnov/Mad464";
import AddressProgram from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Detnov/AddressProgram";
import Technicalinputs from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Detnov/Technicalinputs";
import Isolator from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Detnov/Isolator";
import SmokeDetector from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Detnov/SmokeDetector";
import MetalBox from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Detnov/MetalBox";
import Clampbell from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Detnov/Clampbell";
import Vsc9000 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Foster/Vsc9000";
import Vsc80i from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Foster/Vsc80i";
import Fingerprint from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Foster/Fingerprint";
import Crime from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Foster/Crime";
import CrimeLite from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Foster/CrimeLite";
import Mobile from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Ebs/Mobile";
import View from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Ebs/View";
import Track from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Ebs/Track";
import Serene from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Onity/Serene";
import Trillium from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Onity/Trillium";
import AdvanceTrillium from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Onity/AdvanceTrillium";
import StoragePassport from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Onity/StoragePassport";
import CardSafe from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Onity/CardSafe";
import AuditTrail from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Onity/AuditTrail";
import OpeningOption from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Onity/OpeningOption";
import Os100 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Onity/Os100";
import AccessSolution from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Onity/AccessSolution";
import Orbita from "./components/pages/frontend/OurProducts/product extend/orbita/Orbita";
import OBT2043MB from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Orbita/OBT2043MB";
import OBT4135MG from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Orbita/OBT4135MG";
import OBT2042MJ from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Orbita/OBT2042MJ";
import OBT2042MG from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Orbita/OBT2042MG";
import S4432G from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Orbita/S4432G";
import S3076 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Orbita/S3076";
import P8030 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Orbita/P8030";
import P8010 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Orbita/P8010";
import E4041 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Orbita/E4041";
import ER3092 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Orbita/ER3092";
import E3041 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Orbita/E3041";
import CP020X from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Cass/CP020X";
import CP555 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Cass/CP555";
import CP505 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Cass/CP505";
import SP7000 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/SP7000";
import SP6000 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/SP6000";
import SP5500 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/SP5500";
import SP4000 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/SP4000";
import SP65 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/SP65";

// import Zx8 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/Zx8";
import PGM82 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/PGM82";
import PGM4 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/PGM4";
import RX1 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/RX1";
import PS45 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/PS45";
import PS25 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/PS25";
import BUS2SER from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/BUS2SER";
import NV780MR from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/NV780MR";
import DM70 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/DM70";
import DM50 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/DM50";
import DG467360 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/DG467360";
import DG457 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/DG457";
import DG85 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/DG85";
import TM70 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/TM70";
import TM50 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/TM50";
import K656 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/K656";
import K641 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/K641";
import K32 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/K32";
import K32LX from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/K32LX";
import K10V from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/K10V";
import K10H from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/K10H";
import Terminal from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Magnetic/Terminal";
import TollBarrier from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Magnetic/TollBarrier";
import AccessXL2 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Magnetic/AccessXL2";
import AccessProL from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Magnetic/AccessProL";
import AccessPro from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Magnetic/AccessPro";
import Magnetic from "./components/pages/frontend/OurProducts/product extend/magnetic/Magnetic";
import MagneticParking from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Magnetic/MagneticParking";
import WingGate from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Magnetic/WingGate";
import Turnstiles from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Magnetic/Turnstiles";
import SwingGates from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Magnetic/SwingGates";
import RetractableGates from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Magnetic/RetractableGates";
import MWingPedestrian from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Magnetic/MWingPedestrian";
import UrbanSquare from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Leda/UrbanSquare";
import LightingBollards from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Leda/LightingBollards";
import AluminumBollard from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Leda/AluminumBollard";
import SlimlineBollard from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Leda/SlimlineBollard";
import SentinelBollard from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Leda/SentinelBollard";
import JS80 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Faac/JS80";
import JS48 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Faac/JS48";
import J275 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Faac/J275";
import J200 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Faac/J200";
import DSCHD300 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Delta/DSCHD300";
import DSC2000 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Delta/DSC2000";
import DSC550 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Delta/DSC550";
import DSC501 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Delta/DSC501";
import DSC800 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Delta/DSC800";
import DSC720 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Delta/DSC720";
import DSC305 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Delta/DSC305";
import VesdaEves from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Vesda/VesdaEves";
import DH80840WANF from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/DH80840WANF";
import Fisheye from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/Fisheye";
import MultiSensor from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/MultiSensor";
import DomeWizMind from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/DomeWizMind";
import StarlightAnalytics from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/StarlightAnalytics";
import WizSense from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/WizSense";
import WizSenseSeries from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/WizSenseSeries";
import OutdoorTiOC from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/OutdoorTiOC";
import OutdoorDual from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/OutdoorDual";
import AcupickN85FJ6Z from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/AcupickN85FJ6Z";
import AcupickN45FJ62 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/AcupickN45FJ62";
import N85EUN2 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/N85EUN2";
import N45EYN2 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/N45EYN2";
import AcupickN85FL6Z4 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/AcupickN85FL6Z4";
import N85CL5Z from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/N85CL5Z";
import N85EFN2 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/N85EFN2";
import AcupickN85FB6Z4 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/AcupickN85FB6Z4";
import CompliantUnmanaged from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/CompliantUnmanaged";
import CompliantCompliant from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/CompliantCompliant";
import CompliantManaged from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/CompliantManaged";
import CMNetworkSwitch from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/CMNetworkSwitch";
import UnmanagedSwitch from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/UnmanagedSwitch";
import IndustrialSwitch from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/IndustrialSwitch";
import N84B5N from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Dahua/N84B5N";
import BrandDetails from "./components/pages/frontend/OurProducts/BrandDetails";
import BrandProducts from "./components/pages/frontend/OurProducts/Reusable/BrandProducts";
import Pro3200 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Honeywell/Pro3200";
import ZX82 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/ZX82";
import AdminPanel from "./components/Admin/AdminPanel";
import Cochrane from "./components/pages/frontend/OurProducts/product extend/Cochrane/Cochrane";

import Razor from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Cochrane/Razor";
import Vehicle from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Cochrane/Vehicle";
import Floating from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Cochrane/Floating";
import Fence from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Senstar/Fence";
import Buried from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Senstar/Buried";
import Zx8 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Paradox/Zx8";
import ShutterBarrier from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Cochrane/ShutterBarrier";
import ClearVu from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Cochrane/ClearVu";
import FiberPatrol from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Senstar/FiberPatrol";
import SenstarLM100 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Senstar/SenstarLM100";
import FiberPatrolFP400 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Senstar/FiberPatrolFP400";
import SmartLidar from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Senstar/SmartLidar";
import PNMC16013RVQ from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hanwha/PNMC16013RVQ";
import PNM9085RQZ1 from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hanwha/PNM9085RQZ1";
import PNMC34404RQPZ from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hanwha/PNMC34404RQPZ";
import TNPA7430RW from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hanwha/TNPA7430RW";
import XNP9300RW from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hanwha/XNP9300RW";
import XNVA8084RS from "./components/pages/frontend/OurProducts/Honeywell Product-Info/Hanwha/XNVA8084RS";
import HanwhaPage from "./components/pages/frontend/OurProducts/product extend/hanwha/HanwhaPage";
import DeantasPage from "./components/pages/frontend/OurProducts/product extend/deantas/DeantasPage";











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

          {/* In your Routes section: */}
            <Route path="/our-products/:brandName" element={<BrandProducts />} />
            
          {/* The :slug is a variable that represents 'honeywell', 'pelco', etc. */}
            <Route path="/products/:slug" element={<BrandDetails />} />

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
            <Route path="/products/hanwha" element={<HanwhaPage />} />

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
            <Route path="/products/deantas" element={<DeantasPage />} />

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
             <Route path="/our-products/honeywell/pro3200-series" element={<Pro3200 />} />
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
             <Route path="/our-products/ubergard/gen5-touchscreen" element={<Gen5/>} />
             <Route path="/our-products/ubergard/3d-air-22" element={<Air22/>} />
             <Route path="/our-products/ubergard/air-12" element={<Air12/>} />
             <Route path="/our-products/ubergard/3d-fly" element={<TbsFly/>} />

             {/* Alarm.com Product Details Route */}
             <Route path="/our-products/alarm/access-control-readers" element={< AccessControl/>} />
             <Route path="/our-products/alarm/smart-credentials" element={< SmartCredentials/>} />
             <Route path="/our-products/alarm/four-door-controller" element={< FourDoor/>} />
             <Route path="/our-products/alarm/door-controller" element={< DoorController/>} />
             <Route path="/our-products/alarm/output-control-expansion" element={< OutputControl/>} />
             <Route path="/our-products/alarm/input-monitor-expansion" element={< InputMonitor/>} />
             <Route path="/our-products/alarm/two-reader-expansion" element={< TwoReader/>} />

             {/* Fermax Product Details Route */}
             <Route path="/our-products/fermax/home-aut-monitor" element={< HomeAut/>} />
             <Route path="/our-products/fermax/monitor-poe-black-meet" element={< Wit7/>} />
             <Route path="/our-products/fermax/monitor-poe-white-meet" element={< Neo7/>} />
             <Route path="/our-products/fermax/milo-touch-digital" element={< MiloTouch/>} />
             <Route path="/our-products/fermax/meet-desktop-guard" element={< MeetDesktop/>} />
             <Route path="/our-products/fermax/marine-digital-video-panel" element={< MarineDigital/>} />
             <Route path="/our-products/fermax/kin-touch-panel" element={< KinTouch/>} />
             <Route path="/our-products/fermax/milo-video-panel-with-prox-meet" element={< MiloVideo/>} />
             <Route path="/our-products/fermax/milo-video-panel-black-meet" element={<BlackMeet/>} />
             <Route path="/our-products/fermax/duox-plus-veo" element={<VeoTelephone/>} />
             <Route path="/our-products/fermax/iloft-telephone-vds" element={<VdsExtra/>} />
             <Route path="/our-products/fermax/duox-plus-veo-wifi" element={<VeoWifi/>} />
             <Route path="/our-products/fermax/marine-panel-duox-plus" element={<MarinePanel/>} />
             <Route path="/our-products/fermax/city-panel-duox-plus-s1ap201" element={<CityPanel/>} />
             <Route path="/our-products/fermax/city-panel-duox-plus-s1cp101" element={<DuoxPlus/>} />

             {/* Commend Product Details Route */}
            <Route path="/our-products/commend/cabinet-speaker" element={<CabinetSpeaker/>} />
            <Route path="/our-products/commend/projector-speaker" element={<ProjectorSpeaker/>} />
            <Route path="/our-products/commend/horn-speaker" element={<HornSpeaker/>} />
            <Route path="/our-products/commend/ceiling-speaker" element={<CeilingSpeaker/>} />
            <Route path="/our-products/commend/watt-amplifier-500" element={<WattAmplifier500/>} />
            <Route path="/our-products/commend/watt-amplifier-250" element={<WattAmplifier250/>} />
            <Route path="/our-products/commend/watt-amplifier-125" element={<WattAmplifier125/>} />
            <Route path="/our-products/commend/watt-amplifier-50" element={<WattAmplifier50/>} />
            <Route path="/our-products/commend/watt-amplifier-20" element={<WattAmplifier20/>} />

            {/* Webgate Product Details Route */}
            <Route path="/our-products/webgate/intelligent-network-camera-z3" element={<NT4100PTIRZ3/>} />
            <Route path="/our-products/webgate/intelligent-network-camera-z2" element={<NT4100PTIRZ2/>} />
            <Route path="/our-products/webgate/nk1080d-ir30-af" element={<NK1080DIR30/>} />
            <Route path="/our-products/webgate/nk1080d-f2" element={<NK1080DF2/>} />
            <Route path="/our-products/webgate/ne5100vd-sir2" element={<NE5100VDSIR2/>} />
            <Route path="/our-products/webgate/ne5100vd-sir1" element={<NE5100VDSIR1/>} />
            <Route path="/our-products/webgate/ne2100ed-sir2" element={<NE5100EDSIR1/>} />
            <Route path="/our-products/webgate/ne2100ed-sir2" element={<NE2100EDSIR2/>} />
            <Route path="/our-products/webgate/nk1080bl-ir48" element={<NK1080BLIR48/>} />
            <Route path="/our-products/webgate/nk5100bl" element={<NK5100BLIR42/>} />

            {/* Pelco Product Details Route */}
            <Route path="/our-products/pelco/ulisee-enhanced" element={<Ulisee/>} />
            <Route path="/our-products/pelco/spectra-enhanced" element={<Spectra/>} />
            <Route path="/our-products/pelco/esprit-anti-corrosion" element={<Esprit/>} />
            <Route path="/our-products/pelco/sarix-multi-enhanced" element={<Sarix/>} />
            <Route path="/our-products/pelco/optera-imm-series" element={<Optera/>} />
            <Route path="/our-products/pelco/pelco-fisheye-camera" element={<Pelco/>} />
            <Route path="/our-products/pelco/environmental-turret" element={<TurretCamera/>} />
            <Route path="/our-products/pelco/environmental-mini-dome" element={<MiniDome/>} />
            <Route path="/our-products/pelco/sarix-professional-4" element={<DomeCamera/>} />
            <Route path="/our-products/pelco/series-dome-camera" element={<SeriesDome/>} />
            <Route path="/our-products/pelco/short-and-long-bullet-camera" element={<LongBullet/>} />
            <Route path="/our-products/pelco/thermal-enhanced-4-camera-series" element={<CameraSeries/>} />
            <Route path="/our-products/pelco/bullet-camera" element={<Professional/>} />
            <Route path="/our-products/pelco/environmental-bullet-cameras" element={<Environmental/>} />

            {/* Hikvision Product Details Route */}
            <Route path="/our-products/hikvision/fixed-bullet-network" element={<DS2CD2T43G2/>} />
            <Route path="/our-products/hikvision/network-speed-dome-camera" element={<DS2DE7A825IW/>} />
            <Route path="/our-products/hikvision/network-ptz-camera" element={<DS2SE7C432MWG/>} />
            <Route path="/our-products/hikvision/series-nvr" element={<DS7700NI/>} />
            <Route path="/our-products/hikvision/acusense-series-nvr" element={<DS7608NXI/>} />
            <Route path="/our-products/hikvision/acusense-fixed-dome-network-camera" element={<DS2CD2143G2/>} />
            <Route path="/our-products/hikvision/acusense-fixed-bullet-network-camera" element={<DS2CD2083G2/>} />
            <Route path="/our-products/hikvision/network-ir-speed-dome-camera" element={<DS2DE4225IW/>} />

             {/* Acti Product Details Route */}
             <Route path="/our-products/acti/bay-raid-backmount-standalone" element={<Inr415/>} />
             <Route path="/our-products/acti/channel-tower-strandalone" element={<Gnr340/>} />
             <Route path="/our-products/acti/channel-desktop-standalone" element={<Enr130/>} />
             <Route path="/our-products/acti/outdoor-network-dome-camera" element={<Z86/>} />
             <Route path="/our-products/acti/zoom-bullet-with-dn" element={<Z49/>} />
             <Route path="/our-products/acti/network-dome-camera" element={<NetworkDome/>} />
             <Route path="/our-products/acti/outdoor-ptz-network-speed-dome-camera" element={<B928/>} />
             <Route path="/our-products/acti/outdoor-network-dome-camera" element={<A817/>} />
             <Route path="/our-products/acti/network-fisheye-dome-camera" element={<A713/>} />

             {/* Dahua Product Details Route */}
             <Route path="/our-products/dahua/dh-80840wanf" element={<DH80840WANF/>} />
             <Route path="/our-products/dahua/dh-psdw81642m" element={<DH80840WANF/>} />
             <Route path="/our-products/dahua/dh-ipc-ebw81242n" element={<Fisheye/>} />
             <Route path="/our-products/dahua/dh-ipc-pfw83242" element={<MultiSensor/>} />
             <Route path="/our-products/dahua/dh-ipc-hdbw7442h" element={<DomeWizMind/>} />
             <Route path="/our-products/dahua/6ce445xanr" element={<StarlightAnalytics/>} />
             <Route path="/our-products/dahua/wizsense-series-52c432gbnr" element={<WizSense/>} />
             <Route path="/our-products/dahua/wizsense-series-5a445gbnr" element={<WizSenseSeries/>} />
             <Route path="/our-products/dahua/6c3425xbpv-outdoor-tioc-network" element={<OutdoorTiOC/>} />
             <Route path="/our-products/dahua/n83bp83-outdoor-dual-lens" element={<OutdoorDual/>} />
             <Route path="/our-products/dahua/acupick-n85fj6z" element={<AcupickN85FJ6Z/>} />
             <Route path="/our-products/dahua/acupick-n45fj62" element={<AcupickN45FJ62/>} />
             <Route path="/our-products/dahua/night-color-turret-camera" element={<N85EUN2/>} />
             <Route path="/our-products/dahua/night-color-network-dome-camera" element={<N45EYN2/>} />
             <Route path="/our-products/dahua/outdoor-network-dome-camera" element={<AcupickN85FL6Z4/>} />
             <Route path="/our-products/dahua/n85cl5z-outdoor-epoe-network-dome" element={<N85CL5Z/>} />
             <Route path="/our-products/dahua/n85efn2" element={<N85EFN2/>} />
             <Route path="/our-products/dahua/acupick-n85fb6z4" element={<AcupickN85FB6Z4/>} />
             <Route path="/our-products/dahua/dh-s4228" element={<CompliantCompliant/>} />
             <Route path="/our-products/dahua/dh-psf3010" element={<CompliantUnmanaged/>} />
             <Route path="/our-products/dahua/dh-s4220" element={<CompliantManaged/>} />
             <Route path="/our-products/dahua/dh-s4210" element={<CMNetworkSwitch/>} />
             <Route path="/our-products/dahua/dh-lr2110" element={<UnmanagedSwitch/>} />
             <Route path="/our-products/dahua/dh-is4210" element={<IndustrialSwitch/>} />
             <Route path="/our-products/dahua/n84b5n" element={<N84B5N/>} />

              {/* Hanwha-Vision Product Details Route */}
              <Route path="/our-products/hanwha/PNMC16013RVQ" element={<PNMC16013RVQ/>} />
              <Route path="/our-products/hanwha/PNM9085RQZ1" element={<PNM9085RQZ1/>} />
              <Route path="/our-products/hanwha/PNMC34404RQPZ" element={<PNMC34404RQPZ/>} />
              <Route path="/our-products/hanwha/TNPA7430RW" element={<TNPA7430RW/>} />
              <Route path="/our-products/hanwha/XNP9300RW" element={<XNP9300RW/>} />
              <Route path="/our-products/hanwha/XNVA8084RS" element={<XNVA8084RS/>} />
              



             {/* Gilardoni Product Details Route */}
             <Route path="/our-products/gilardoni/cargo" element={<Cargo/>} />
             <Route path="/our-products/gilardoni/cargo-dv" element={<CargoDv/>} />
             <Route path="/our-products/gilardoni/1000" element={<Fep1000/>} />
             <Route path="/our-products/gilardoni/1000-hc-dv" element={<HcDv/>} />
             <Route path="/our-products/gilardoni/640-x-ray" element={<Xray/>} />
             <Route path="/our-products/gilardoni/640-amx" element={<Amx/>} />
             <Route path="/our-products/gilardoni/automatic-tray-return-system" element={<Breva/>} />
             <Route path="/our-products/gilardoni/single-view-hand-baggage" element={<Argo640/>} />
             <Route path="/our-products/gilardoni/dual-view-hand-baggage" element={<Argo640Dv/>} />
             <Route path="/our-products/gilardoni/single-view" element={<Argo536/>} />

             {/* Ceia Product Details Route */}
             <Route path="/our-products/ceia/smd601" element={<Smd601/>} />
             <Route path="/our-products/ceia/smd600" element={<Smd600/>} />
             <Route path="/our-products/ceia/pmd2" element={<Pmd2/>} />
             <Route path="/our-products/ceia/hi-pe" element={<Hipe/>} />
             <Route path="/our-products/ceia/opengate" element={<Opengate/>} />
             <Route path="/our-products/ceia/high-performance" element={<Msdi/>} />
             <Route path="/our-products/ceia/portable-cellphone" element={<Msd/>} />
             <Route path="/our-products/ceia/long-range-hand-held" element={<Pd240cb/>} />
             <Route path="/our-products/ceia/wide-search-area" element={<Pd240/>} />
             <Route path="/our-products/ceia/compact-hand-held" element={<Pd140n/>} />
             <Route path="/our-products/ceia/mail-scanner" element={<Emis/>} />
             <Route path="/our-products/ceia/liquid-explosive-detector" element={<Ema/>} />

             {/* AutoClear Product Details Route */}
            <Route path="/our-products/autoclear/handwand" element={<Handwand/>} />
            <Route path="/our-products/autoclear/100100tdvs-dv-inspection-system" element={<DvXray/>} />
            <Route path="/our-products/autoclear/100100tdvs-inspection-system" element={<DvsXray/>} />
            <Route path="/our-products/autoclear/6040dvs-dv-inspection-system" element={<Dvsdv/>} />
            <Route path="/our-products/autoclear/6040dvs-inspection-system" element={<Inspection6040/>} />
            <Route path="/our-products/autoclear/5333dvs-inspection-system" element={<Inspection5333/>} />
            <Route path="/our-products/autoclear/n2300-trace-detector" element={<N2300/>} />
            <Route path="/our-products/autoclear/series-trace-detector" element={<E5000/>} />
            <Route path="/our-products/autoclear/e3500-trace-detector" element={<E3500/>} />
            <Route path="/our-products/autoclear/compact-tree-detector" element={<Clx/>} />

            {/* Detnov Product Details Route */}
            <Route path="/our-products/detnov/technical-inputs" element={<Technical/>} />
            <Route path="/our-products/detnov/indicator-light-with-buzzer" element={<Doa/>} />
            <Route path="/our-products/detnov/voltage-relay-output" element={<Trd100/>} />
            <Route path="/our-products/detnov/clampbell-fire-alarm" element={<Clampbell/>} />
            <Route path="/our-products/detnov/heat-and-smoke-detector" element={<HeatnSmoke/>} />
            <Route path="/our-products/detnov/conventional-control-panel" element={<ControlPanel/>} />
            <Route path="/our-products/detnov/multi-pupose-communication-card" element={<Communication/>} />
            <Route path="/our-products/detnov/manual-call-point" element={<CallPoint/>} />
            <Route path="/our-products/detnov/beacon-series" element={<BeaconSeries/>} />
            <Route path="/our-products/detnov/monitored-power-supply" element={<PowerSupply/>} />
            <Route path="/our-products/detnov/connection-base" element={<ConnectionBase/>} />
            <Route path="/our-products/detnov/detnov-cloud" element={<DetnovCloud/>} />
            <Route path="/our-products/detnov/addressable-sounder" element={<Mad464/>} />
            <Route path="/our-products/detnov/address-programmer" element={<AddressProgram/>} />
            <Route path="/our-products/detnov/addressable-modules" element={<Technicalinputs/>} />
            <Route path="/our-products/detnov/manual-call--point-with-isolator" element={<Isolator/>} />
            <Route path="/our-products/detnov/optical-smoke-detector" element={<SmokeDetector/>} />
            <Route path="/our-products/detnov/control-panel-with-metal-box" element={<MetalBox/>} />

            {/* Foster+Freeman Product Details Route */}
            <Route path="/our-products/foster/vsc9000" element={<Vsc9000/>} />
            <Route path="/our-products/foster/vsc80i" element={<Vsc80i/>} />
            <Route path="/our-products/foster/fingerprint-imaging-workstation" element={<Fingerprint/>} />
            <Route path="/our-products/foster/crime-lite-x" element={<Crime/>} />
            <Route path="/our-products/foster/crime-lite-auto" element={<CrimeLite/>} />

            {/* Ebs Product Details Route */}
            <Route path="/our-products/ebs/at-mobile" element={<Mobile/>} />
            <Route path="/our-products/ebs/active-view" element={<View/>} />
            <Route path="/our-products/ebs/active-track" element={<Track/>} />

            {/* Onity Product Details Route */}
             <Route path="/our-products/onity/directkey-with-serene" element={<Serene/>} />
             <Route path="/our-products/onity/trillium-rfid" element={<Trillium/>} />
             <Route path="/our-products/onity/advance-trillium-rfid" element={<AdvanceTrillium/>} />
             <Route path="/our-products/onity/self-storage-passport" element={<StoragePassport/>} />
             <Route path="/our-products/onity/contactless-rfid-card-safe" element={<CardSafe/>} />
             <Route path="/our-products/onity/keypad-and-audit-trail" element={<AuditTrail/>} />
             <Route path="/our-products/onity/keypad-and-opening-option-os200" element={<OpeningOption/>} />
             <Route path="/our-products/onity/keypad-and-opening-option-os100" element={<Os100/>} />
             <Route path="/our-products/onity/mobile-access-solution" element={<AccessSolution/>} />

            {/* Orbita Product Details Route */}
            <Route path="/our-products/orbita/obt-2043mb" element={<OBT2043MB/>} />
            <Route path="/our-products/orbita/obt-4135mg" element={<OBT4135MG/>} />
            <Route path="/our-products/orbita/obt-2042mj-hotel-room" element={<OBT2042MJ/>} />
            <Route path="/our-products/orbita/obt-2042mg-hotel-room-safe" element={<OBT2042MG/>} />
            <Route path="/our-products/orbita/s4432g-lcd-luxury-design" element={<S4432G/>} />
            <Route path="/our-products/orbita/s3076-hotel-frid-lock" element={<S3076/>} />
            <Route path="/our-products/orbita/p8030-fully-automatic-smart-lock" element={<P8030/>} />
            <Route path="/our-products/orbita/p8010-fingerprint-smart-lock" element={<P8010/>} />
            <Route path="/our-products/orbita/e4041-lcd-smart" element={<E4041/>} />
            <Route path="/our-products/orbita/er3092-hotel-lock" element={<ER3092/>} />
            <Route path="/our-products/orbita/e3041-hotel-rfid-lock" element={<E3041/>} />

            {/* Paradox Product Details Route */}
            <Route path="/our-products/paradox/sp7000-controller" element={<SP7000/>} />
            <Route path="/our-products/paradox/sp6000-controller" element={<SP6000/>} />
            <Route path="/our-products/paradox/sp5500-controller" element={<SP5500/>} />
            <Route path="/our-products/paradox/sp4000-controller" element={<SP4000/>} />
            <Route path="/our-products/paradox/expandable-32-zone-control-panel" element={<SP65/>} />
            <Route path="/our-products/paradox/zx82-expansion-module" element={<ZX82/>} />
            <Route path="/our-products/paradox/zx8-expansion-module" element={<Zx8/>} />
            <Route path="/our-products/paradox/pgm82-expansion-module" element={<PGM82/>} />
            <Route path="/our-products/paradox/pgm4-expansion-module" element={<PGM4/>} />
            <Route path="/our-products/paradox/rx1-wireless-receiver" element={<RX1/>} />
            <Route path="/our-products/paradox/ps45-supervised-power-supply" element={<PS45/>} />
            <Route path="/our-products/paradox/ps25-supervised-power-supply" element={<PS25/>} />
            <Route path="/our-products/paradox/bus2ser-integration-module" element={<BUS2SER/>} />
            <Route path="/our-products/paradox/nv780mr-digital-outdoor-dual-size-view" element={<NV780MR/>} />
            <Route path="/our-products/paradox/dm70-high-security-motion-detector" element={<DM70/>} />
            <Route path="/our-products/paradox/dm50-dual-element-motion-detector" element={<DM50/>} />
            <Route path="/our-products/paradox/dg467-ceiling-mounted-digital" element={<DG467360/>} />
            <Route path="/our-products/paradox/dg457-glassbreak-detector" element={<DG457/>} />
            <Route path="/our-products/paradox/dg85-outdoor-high-security" element={<DG85/>} />
            <Route path="/our-products/paradox/tm70-touch-intuitive-touchscreen" element={<TM70/>} />
            <Route path="/our-products/paradox/tm50-touch-intuitive-touchscreen" element={<TM50/>} />
            <Route path="/our-products/paradox/k656-touch-sense-lcd-keypad" element={<K656/>} />
            <Route path="/our-products/paradox/k641+-character-blue-lcd-keypad" element={<K641/>} />
            <Route path="/our-products/paradox/k32+-hardwired-led-keypad" element={<K32/>} />
            <Route path="/our-products/paradox/k32lx-hardwired-lcd-keypad" element={<K32LX/>} />
            <Route path="/our-products/paradox/k10v-hardwired-led-keypad" element={<K10V/>} />
            <Route path="/our-products/paradox/k10h-hardwired-led-keypad" element={<K10H/>} />


            {/* Cass Product Details Route */}
            <Route path="/our-products/cass/gate-barrier" element={<CP020X/>} />
            <Route path="/our-products/cass/token-acceptor" element={<CP555/>} />
            <Route path="/our-products/cass/ticket-scanner" element={<CP505/>} />

            {/* Magnetic Product Details Route */}
            <Route path="/our-products/magnetic/terminal-ms" element={<Terminal/>} />
            <Route path="/our-products/magnetic/toll-barrier" element={<TollBarrier/>} />
            <Route path="/our-products/magnetic/barriers-for-wide-lanes" element={<AccessXL2/>} />
            <Route path="/our-products/magnetic/access-pro-l" element={<AccessProL/>} />
            <Route path="/our-products/magnetic/access-pro" element={<AccessPro/>} />
            <Route path="/our-products/magnetic/access-pro" element={<Magnetic/>} />
            <Route path="/our-products/magnetic/magnetic-parking" element={<MagneticParking/>} />
            <Route path="/our-products/magnetic/wing-gate" element={<WingGate/>} />
            <Route path="/our-products/magnetic/mpp-turnstiles" element={<Turnstiles/>} />
            <Route path="/our-products/magnetic/mpw-swing-gates" element={<SwingGates/>} />
            <Route path="/our-products/magnetic/retractable-gates" element={<RetractableGates/>} />
            <Route path="/our-products/magnetic/pedestrian-passageway-with-wing-gates" element={<MWingPedestrian/>} />

            {/* Leda Product Details Route */}
            <Route path="/our-products/leda/urban-square-light" element={<UrbanSquare/>} />
            <Route path="/our-products/leda/slimline-lighting-bollards" element={<LightingBollards/>} />
            <Route path="/our-products/leda/ambassador-aluminum-bollard" element={<AluminumBollard/>} />
            <Route path="/our-products/leda/slimline-bollard" element={<SlimlineBollard/>} />
            <Route path="/our-products/leda/sentinel-bollard" element={<SentinelBollard/>} />

            {/* Faac Product Details Route */}
            <Route path="/our-products/faac/js80" element={<JS80/>} />
            <Route path="/our-products/faac/js48" element={<JS48/>} />
            <Route path="/our-products/faac/j275" element={<J275/>} />
            <Route path="/our-products/faac/j200" element={<J200/>} />

            {/* Delta Product Details Route */}
            <Route path="/our-products/delta/dsc-hd300-wedge-barricade" element={<DSCHD300/>} />
            <Route path="/our-products/delta/dsc-2000-modular-wedge-barricade" element={<DSC2000/>} />
            <Route path="/our-products/delta/dsc-550-open-frame-wedge-barricade" element={<DSC550/>} />
            <Route path="/our-products/delta/dsc-501-wedge-barricade" element={<DSC501/>} />
            <Route path="/our-products/delta/dsc-800-high-seurity-bollard" element={<DSC800/>} />
            <Route path="/our-products/delta/dsc-720-high-security-bollard" element={<DSC720/>} />
            <Route path="/our-products/delta/dsc-305-medium-security" element={<DSC305/>} />

            {/* Vesda Product Details Route */}
            <Route path="/our-products/vesda/vesda-eves" element={<VesdaEves/>} />

            {/* Cochrane Product Details Route */}
            <Route path="/products/cochrane" element={<Cochrane/>} />
            <Route path="/products/cochrane/razor-mesh" element={<Razor/>} />
            <Route path="/products/cochrane/vehicle-barrier" element={<Vehicle/>} />
            <Route path="/products/cochrane/floating-barrier" element={<Floating/>} />
            <Route path="/our-products/cochrane/invisible-walls" element={<ClearVu/>} />
            <Route path="/our-products/cochrane/shutter-barrier" element={<ShutterBarrier/>} />

            {/* Senstar Product Details Route */}
            <Route path="/our-products/senstar/fence-sensor" element={<Fence/>} />
            <Route path="/our-products/senstar/buried-sensor" element={<Buried/>} />
            <Route path="/our-products/senstar/fiber-patrol" element={<FiberPatrol/>} />
            <Route path="/our-products/senstar/senstar-lm100" element={<SenstarLM100/>} />
            <Route path="/our-products/senstar/fiberpatrol-fp400" element={<FiberPatrolFP400/>} />
            <Route path="/our-products/senstar/smart3d-lidar" element={<SmartLidar/>} />

            {/* Deantas Product Details Route */}

            {/* <Route path="/our-products/deantas/" element={<DSCHD300/>} />
            <Route path="/our-products/deantas/" element={<DSC2000/>} />
            <Route path="/our-products/deantas/" element={<DSC550/>} />
            <Route path="/our-products/deantas/" element={<DSC501/>} />
            <Route path="/our-products/deantas/" element={<DSC800/>} />
            <Route path="/our-products/deantas/" element={<DSC720/>} />
            <Route path="/our-products/deantas/" element={<DSC305/>} /> */}

            {/* Admin Panel Route */}
            <Route path="/admin" element={<AdminPanel/>} />

          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;