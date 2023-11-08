import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import * as Constant from './constants';
import "./App.css";

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Services from "./pages/Service/ServicesPage";
import Project from "./pages/Project/ProjectPage";
import ProjectWeb from "./pages/Project/ProjectWeb";
import ProjectDesign from "./pages/Project/ProjectDesign";
// import ProjectGame from "./pages/Project/ProjectGame";

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop";

function App() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/about");
    }, 1000);
  }, []);
  return (
    <>
      <RouterScrollTop />
      {loading ? (
        <div className="loading-pag">
          <div className="loader">
            <span>{Constant.NAME}</span>
            <span>{Constant.NAME}</span>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/service" element={<Services />}></Route>
          <Route exact path="/project" element={<Project />}></Route>
          <Route exact path="/project/web" element={<ProjectWeb />} />
          <Route exact path="/project/design" element={<ProjectDesign />} />
          {/* <Route exact path="/project/game" element={<ProjectGame />} /> */}
        </Routes>
      )}
    </>
  );
}

export default App;
