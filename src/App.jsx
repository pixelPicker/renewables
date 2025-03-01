import { useState } from "react";
import Header from "./ProjectComponents/Header";
import Chatbot from "./ProjectComponents/Chatbot";
import { HashRouter, Routes, Route, Outlet } from "react-router";
import Footer from "./ProjectComponents/Footer";
import Home from "./HomePageComponents/Home.jsx";
import Page404 from "./ProjectComponents/Page404.jsx";
import AboutUs from "./QuizComponent/About/AboutUs.jsx";
import Quiz from "./QuizComponent/Quiz/Quiz.jsx";
import UpcomingEvents from "./Upcoming/Upcoming.jsx";
import CaseStudies from "./Casestudy/Casestudy.jsx";
import Blog from "./blog/blog.jsx";
import Projects from "./DIYProject/Projects.jsx";
import ReactGA from 'react-ga4'


const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Chatbot />
      <Footer />
    </>
  );
};

function App() {

  useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: "/", title: "Landing Page" });
}, [])

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="projects" element={<Projects />} />
          <Route path="casestudy" element={<CaseStudies />} />
          <Route path="upcoming" element={<UpcomingEvents />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="quiz" element={<Quiz />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
