import { Suspense, lazy } from "react";
import HeroSection from "../../components/homepage/hero-section";
import AboutSection from "../../components/homepage/about";
// Lazy load below-the-fold sections for performance
const Experience = lazy(() => import("../../components/homepage/experience"));
const Skills = lazy(() => import("../../components/homepage/skills"));
const Projects = lazy(() => import("../../components/homepage/projects"));
const GitHubActivity = lazy(() => import("../../components/homepage/github-activity"));
const Services = lazy(() => import("../../components/homepage/services"));
const Education = lazy(() => import("../../components/homepage/education"));
const Blog = lazy(() => import("../../components/homepage/blog"));
const ContactSection = lazy(() => import("../../components/homepage/contact"));

function HomePage() {
    return (
        <div suppressHydrationWarning>
            {/* Above the fold (load immediately) */}
            <HeroSection />
            <AboutSection />
            {/* Below the fold (lazy loaded when scrolling) */}
            <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center text-emerald-500/50">Loading section...</div>}>
                <Experience />
                <Skills />
                <Projects />
                <GitHubActivity />
                <Services />
                <Education />
                <Blog />
                <ContactSection />
            </Suspense>
        </div>
    );
}

export default HomePage;
