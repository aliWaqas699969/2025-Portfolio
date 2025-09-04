import CaseStudiesSection from "./components/CaseStudiesSection";
import ContactSection from "./components/ContactSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectPlayground from "./components/ProjectPlayground";
import SkillsDashboard from "./components/SkillsDashboard";
import TestimonialsGithub from "./components/TestimonialsGithub";
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <>
    <Analytics />
      <Header />
      <Hero />
      <SkillsDashboard />
      <ProjectPlayground />
      <CaseStudiesSection />
      <ExperienceTimeline />
      <TestimonialsGithub />
      <ContactSection />
      <Footer />
    </>
  );
}
