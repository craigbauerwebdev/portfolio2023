//const { useEffect, useState } = wp.element;
import React from "react";
import Header from "./Components/Header/Header";
import HomePage from "./Components/Content/HomePage";
import AboutPage from "./Components/Content/AboutPage";
import ExperiencePage from "./Components/Content/ExperiencePage";
import ProjectsPage from "./Components/Content/ProjectsPage";
import ContactPage from "./Components/Content/ContactPage";
import Footer from "./Components/Footer/Footer";
import SplashScreen from "./Components/Content/SplashScreen";
//import Loader from "./Components/GeneralPurpose/Loader";

const App: React.FC = () => {
  const baseUrl: string = location.href.includes("localhost")
    ? "http://localhost:8888/portfolio"
    : "https://craigbauer.dev";

  return (
    <div>
      <SplashScreen baseUrl={baseUrl} />
      <Header baseUrl={baseUrl} />
      <main>
        <HomePage baseUrl={baseUrl} />
        <AboutPage baseUrl={baseUrl} />
        <ExperiencePage />
        <ProjectsPage baseUrl={baseUrl} />
        <ContactPage baseUrl={baseUrl} />
      </main>
      <Footer baseUrl={baseUrl} />
    </div>
  );
};
export default App;
