
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';

import { HomePage } from './pages/HomePage';
import EducationPage from './pages/industries/EducationPage';
import HealthcarePage from './pages/industries/HealthcarePage';
import ConsultingProfessionalServicesPage from './pages/industries/ProfessionalServicesPage';
import SolutionsOverviewPage from './pages/solutions/SolutionsOverviewPage';
import BuildPage from './pages/solutions/BuildPage';
import CreatePage from './pages/solutions/CreatePage';
import PromotePage from './pages/solutions/PromotePage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import CreativeWorkspacePage from './pages/CreativeWorkspacePage';
import ContactPage from './pages/ContactPage';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-layout">
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/industries/education" element={<EducationPage />} />
            <Route path="/industries/healthcare" element={<HealthcarePage />} />
            <Route path="/industries/professional-services" element={<ConsultingProfessionalServicesPage />} />
            
            <Route path="/solutions" element={<SolutionsOverviewPage />} />
            <Route path="/solutions/build" element={<BuildPage />} />
            <Route path="/solutions/create" element={<CreatePage />} />
            <Route path="/solutions/promote" element={<PromotePage />} />
            
            <Route path="/about" element={<AboutPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/creative-workspace" element={<CreativeWorkspacePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
