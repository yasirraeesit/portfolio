import HeroSection from "../../components/homepage/hero-section";
import AboutSection from "../../components/homepage/about";
import Experience from "../../components/homepage/experience";
import Skills from "../../components/homepage/skills";
import Projects from "../../components/homepage/projects";
import GitHubActivity from "../../components/homepage/github-activity";
import Services from "../../components/homepage/services";
import Education from "../../components/homepage/education";
import Blog from "../../components/homepage/blog";

function HomePage() {
    return (
        <div suppressHydrationWarning>
            <HeroSection />
            <AboutSection />
            <Experience />
            <Skills />
            <Projects />
            <GitHubActivity />
            <Services />
            <Education />
            <Blog />
        </div>
    );
}

export default HomePage;
