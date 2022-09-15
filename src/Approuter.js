
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Layouts/About";
import Home from "./Layouts/Home";
import Home4 from "./Layouts/Home4";
import Login from "./Layouts/Login";
import Signup from "./Layouts/Signup";
import Contact from "./Layouts/Contact";
import EmailVerification from "./Layouts/EmailVerification";
import Learning from "./Layouts/Learning";
import DesignPage from "./Layouts/DesignPage";
import Business from "./Layouts/Business";
import Recruit from "./Layouts/Recruit";
import TrendingJobs from "./Layouts/TrendingJobs";
import OfferDescription from "./Components/Trending Jobs/OfferDescription";
import Terms from "./Layouts/Terms";
import Policy from "./Layouts/Policy";
import Faq from "./Layouts/Faq";
import Dashboard from "./Layouts/Dashboard";
import Desk17 from "./Layouts/Desk17";
import Chat from "./Layouts/Chat";
import Courses from "./Layouts/Courses"
import Completed from "./Components/Courses/Completed";
import CourseVideo from "./Layouts/CourseVideo";
import Desk28 from "./Layouts/Desk28";

function Approuter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/home4" element={<Home4 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/emailverification" element={<EmailVerification />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/business" element={<Business />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/jobs" element={<TrendingJobs />} />
        <Route path="/jobs/offer_desc" element={<OfferDescription />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />{" "}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/desktop17" element={<Desk17 />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/completed" element={<Completed />} />
        <Route path="/video" element ={<CourseVideo/>}/>
        <Route path="/desktop28" element={<Desk28/>}/>
      </Routes>
    </Router>
  )
}

export default Approuter;
