import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import ScrollProgress from "./components/helper/scroll-progress";
import Navbar from "./components/navbar";
import ErrorBoundary from "./components/ErrorBoundary";
import SkipToContent from "./components/helper/SkipToContent";
import ScrollToTopNavigation from "./components/helper/scroll-to-top-navigation";
// Homepage Sections are loaded via pages/home

import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/home"));
const ServicesPage = lazy(() => import("./pages/services"));
const ContactPage = lazy(() => import("./pages/contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <ErrorBoundary>
      <SkipToContent />
      <div className="font-inter">
        <ToastContainer />
        <main id="main-content" className="min-h-screen relative mx-auto text-white w-full">
          <ScrollToTopNavigation />
          <ScrollProgress />
          <Navbar />

          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>

          <ScrollToTop />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
