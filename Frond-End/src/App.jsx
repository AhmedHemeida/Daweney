

import { Route, Routes } from "react-router-dom";
import './App.css';
import CountactUs from './components/functionComponents/CountactUs';
import ForgetPassword from './components/functionComponents/ForgetPassword';


import MyFooter from './components/functionComponents/MyFooter';


import { MyNav } from './components/functionComponents/MyNav';
import { MyNavDoctor } from "./components/functionComponents/MyNavDoctor";

import About from './components/pages/About';
import AboutDoctor from "./components/pages/AboutDoctor";
import AccDoctor from "./components/pages/AccDoctor";
import AddRequest from "./components/pages/AddRequest";
import Addservice from "./components/pages/Addservice";
import Addservice2 from "./components/pages/Addservice2";
import Addservice3 from "./components/pages/Addservice3";
import Addservice5 from "./components/pages/Addservice5";
import ContactDoctor from "./components/pages/ContactDoctor";
import Cost from "./components/pages/Cost";
import EditDoctor from "./components/pages/EditDoctor";
import EditInfo from "./components/pages/EditInfo";
import Help from "./components/pages/Help";

import Home from './components/pages/Home';
import HomeDoctor from "./components/pages/HomeDoctor";
import Login from "./components/pages/Login";
import MyAccount from "./components/pages/MyAccount";
import MyAccountDoctor from "./components/pages/MyAccountDoctor";

import MyCash from "./components/pages/MyCash";
import MyCashDoctor from "./components/pages/MyCashDoctor";
import Next from "./components/pages/Next";
import Next2 from "./components/pages/Next2";
import Next3 from "./components/pages/Next3";
import Next5 from "./components/pages/Next5";
import NextAcc from "./components/pages/NextAcc";
import OldServices from "./components/pages/OldServices";
import OldServicesDoctor from "./components/pages/OldServicesDoctor";

import Operation from "./components/pages/Operation";
import Opinion from "./components/pages/Opinion";
import RateDoctor from "./components/pages/RateDoctor";
import Reject from "./components/pages/Reject";
import RejectDoctor from "./components/pages/RejectDoctor";
import Requestes from "./components/pages/Requestes";
import Service1 from "./components/pages/Service1";
import Service2 from "./components/pages/Service2";
import Service3 from "./components/pages/Service3";
import Service5 from "./components/pages/Service5";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import SignupDoctor from "./components/pages/SignupDoctor";
import Verification from "./components/pages/Verification";
import Acpatient from "./components/pages/Acpatient";
import Acpatient2 from "./components/pages/Acpatient2";

import NextAccpatient from "./components/pages/NextAccpatient";
import Opinionpateint from "./components/pages/Opinionpateint";

import VerificationSignup from "./components/pages/VerificationSignup";
import ForgetSignup from "./components/pages/ForgetSignup";
import ResetPassWord from "./components/pages/ResetPassWord";
import ForgetDoctorSignup from "./components/pages/ForgetDoctorSignup";
import VerifyDoctor from "./components/pages/VerifyDoctor";
import RecivedRequest from "./components/pages/RecivedRequest";
import SendRequest from "./components/pages/SendRequest";
import AccepRequestDoctor from "./components/pages/AccepRequestDoctor";
import ApplyRequestDoctor from "./components/pages/ApplyRequestDoctor";







function App() {
  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<><MyNav /><Home /><MyFooter /></>} />
        <Route path="/home-doctor" element={<><MyNavDoctor /><HomeDoctor /><MyFooter /></>} />
        <Route path="/requestes" element={<><MyNav /><Requestes /><MyFooter /></>} />
        <Route path="/about" element={<><MyNav /><About /><MyFooter /></>} />
        <Route path="/contact" element={<><MyNav /><CountactUs /><MyFooter /></>} />
        <Route path="/services" element={<><MyNav /><Services /><MyFooter /></>} />
        <Route path="/service1" element={<><MyNav /><Service1 /><MyFooter /></>} />
        <Route path="/service2" element={<><MyNav /><Service2 /><MyFooter /></>} />
        <Route path="/service3" element={<><MyNav /><Service3 /><MyFooter /></>} />
        <Route path="/service5" element={<><MyNav /><Service5 /><MyFooter /></>} />
        <Route path="/addrequest" element={<><MyNav /><AddRequest /><MyFooter /></>} />
        <Route path="/opinion" element={<><MyNav /><Opinion /><MyFooter /></>} />
        <Route path="/reject" element={<><MyNav /><Reject /><MyFooter /></>} />
        <Route path="/help" element={<><MyNav /><Help /><MyFooter /></>} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/forgot/:type/:email" element={<ForgetPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signupdoctor" element={<SignupDoctor />} />
        <Route path="/aboutt" element={<><MyNavDoctor /><AboutDoctor /><MyFooter /></>} />
        <Route path="/contactt" element={<><MyNavDoctor /><ContactDoctor /><MyFooter /></>} />
        <Route path="/otherservice" element={<><MyNav /><Addservice /><MyFooter /></>} />
        <Route path="/otherservice2" element={<><MyNav /><Addservice2 /><MyFooter /></>} />
        <Route path="/otherservice3" element={<><MyNav /><Addservice3 /><MyFooter /></>} />
        <Route path="/otherservice5" element={<><MyNav /><Addservice5 /><MyFooter /></>} />
        <Route path="/average" element={<><MyNav /><Next /><MyFooter /></>} />
        <Route path="/average2" element={<><MyNav /><Next2 /><MyFooter /></>} />
        <Route path="/average3" element={<><MyNav /><Next3 /><MyFooter /></>} />
        <Route path="/average5" element={<><MyNav /><Next5 /><MyFooter /></>} />
        <Route path="/cost" element={<><MyNav /><Cost /><MyFooter /></>} />
        <Route path="/final" element={<><MyNav /><Operation /><MyFooter /></>} />
        <Route path="/acc" element={<><MyNavDoctor /><AccDoctor /><MyFooter /></>} />
        <Route path="/nextacc" element={<><MyNavDoctor /><NextAcc /><MyFooter /></>} />
        <Route path="/reject-doctor" element={<><MyNavDoctor /><RejectDoctor /><MyFooter /></>} />
        <Route path="/opinion-doctor" element={<><MyNavDoctor /><RateDoctor /><MyFooter /></>} />
        <Route path="/cash" element={<><MyNav /><MyCash /><MyFooter /></>} />
        <Route path="/account" element={<><MyNav /><MyAccount /><MyFooter /></>} />
        <Route path="/old" element={<><MyNav /><OldServices /><MyFooter /></>} />
        <Route path="/edit" element={<><MyNav /><EditInfo /><MyFooter /></>} />
        <Route path="/cashDoctor" element={<><MyNavDoctor /><MyCashDoctor /><MyFooter /></>} />
        <Route path="/editDoctor" element={<><MyNavDoctor /><EditDoctor /><MyFooter /></>} />
        <Route path="/oldDoctor" element={<><MyNavDoctor /><OldServicesDoctor /><MyFooter /></>} />
        <Route path="/myAccountDoctor" element={<><MyNavDoctor /><MyAccountDoctor /><MyFooter /></>} />
        <Route path="/accpatient" element={<><MyNavDoctor /><Acpatient /><MyFooter /></>} />
        <Route path="/accpatient2" element={<><MyNavDoctor /><Acpatient2 /><MyFooter /></>} />

        <Route path="/nextacpatient" element={<><MyNav /><NextAccpatient /><MyFooter /></>} />
        <Route path="/opinionpatient" element={<><MyNav /><Opinionpateint /><MyFooter /></>} />
        <Route path="/signupverify" element={<VerificationSignup />} />
        <Route path="/forgetsignup/:email" element={<ForgetSignup />} />
        <Route path="/resetPassword/:email" element={<ResetPassWord />} />
        {/* <Route path="/forgotdoctorsignup/:email" element={<ForgetDoctorSignup />} /> */}
        <Route path="/VerifyDoctor/:email" element={<VerifyDoctor />} />
        <Route path="/reciverequest" element={<><MyNav /><RecivedRequest /><MyFooter /></>} />
        <Route path="/sendRequest" element={<><MyNav /><SendRequest /><MyFooter /></>} />
        <Route path="/acceptRequest" element={<><MyNavDoctor /><AccepRequestDoctor /><MyFooter /></>} />
        <Route path="/applyRequest" element={<><MyNavDoctor /><ApplyRequestDoctor /><MyFooter /></>} />
        
      </Routes>


    </div>



  );
}

export default App;
