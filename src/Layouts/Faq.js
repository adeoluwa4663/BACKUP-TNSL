import React from "react";
import FaqBanner from "../Components/Faq/FaqBanner";
import FaqPage from "../Components/Faq/FaqPage";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

function Faq() {
  return (
    <div>
      <Navbar/>
      <FaqBanner />

      <FaqPage />
      <Footer />
    </div>
  )
}
export default Faq;