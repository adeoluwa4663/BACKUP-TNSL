import React from "react";
import TermsBanner from "../Components/TermsCondition/TermsBanner";
import TermsPage from "../Components/TermsCondition/TermsPage";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Navbar/Navbar";

function Terms() {
  return (
    <div>
      <NavBar />
      <TermsBanner />

      <TermsPage />
      <Footer />
    </div>
  );
}
export default Terms;