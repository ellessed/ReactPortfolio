import React from "react";
import AboutMe from "./pages/About";
import Footer from "./components/Footer";
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => {
  return (
    <div>
      <PortfolioContainer />
      {/* add footer component here */}
      <Footer />
    </div>
    // add header component
  );
};

export default App;
