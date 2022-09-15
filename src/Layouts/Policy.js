import React from "react";
import PolicyBanner from "../Components/Policy/PolicyBanner";
import PolicyPage from "../Components/Policy/PolicyPage";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Navbar/Navbar";

function Policy() {
  return (
    <div>
      <NavBar />
      <PolicyBanner />

      <PolicyPage />
      <Footer />
    </div>
  );
}
export default Policy;