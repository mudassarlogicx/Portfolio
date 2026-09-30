import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DevelopmentWork from "./components/DevelopmentWork";
import SocialMediaWork from "./components/SocialMediaWork";
import ExperienceSection from "./components/ExperienceSection";
import WhatIHelpShape from "./components/WhatIHelpShape";
import LetsConnect from "./components/LetsConnect";
import EducationSection from "./components/EducationSection";

import LoadingScreen from "./components/LoadingScreen";


function App() {

  const [loading, setLoading] = useState(true);

  return (
    <>
      
      {/* LOADING SCREEN */}
      {loading && (
        <LoadingScreen
          onComplete={() => setLoading(false)}
        />
      )}


      {/* YOUR PORTFOLIO */}
      <Navbar />

      <Hero />

      <DevelopmentWork />

      <ExperienceSection />

      <SocialMediaWork />

      <EducationSection />

      <WhatIHelpShape />

      <LetsConnect />

    </>
  );
}


export default App;