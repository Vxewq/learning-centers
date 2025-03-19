import { Typography, Card } from "@material-tailwind/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import LearningCenters from "./pages/learning-centers";
import CenterPage from "./pages/center-page";
import ResourcePage from "./pages/resource";
import Auth from "./pages/auth";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning-centers" element={<LearningCenters />} />
        <Route path="/resource" element={<ResourcePage />} />
        <Route path="/center-page/:id" element={<CenterPage />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
      
    </>
  );
}
