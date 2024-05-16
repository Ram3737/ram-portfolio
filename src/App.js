import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/layout";
import Homepage from "./pages/homepage/homepage";
import AboutPage from "./pages/aboutPage/aboutPage";
import WorksPage from "./pages/worksPage/worksPage";
import CredentialsPage from "./pages/credentialsPage/credentialsPage";
import ProficiencyPage from "./pages/proficiencyPage/proficiencyPage";
import SkillsPage from "./pages/skillsPage/skillsPage";
import ProjectPage from "./pages/projectsPage/projectPage";
import ContactUsPage from "./pages/contactUsPage/contactUsPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/credentials" element={<CredentialsPage />} />
          <Route exact path="/proficiency" element={<ProficiencyPage />} />
          <Route exact path="/skills" element={<SkillsPage />} />
          <Route exact path="/projects" element={<ProjectPage />} />
          <Route exact path="/contact-us" element={<ContactUsPage />} />
          <Route exact path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        toastStyle={{ backgroundColor: "#242627", color: "#c9c8c7" }}
      />
    </div>
  );
}

export default App;
