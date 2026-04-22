import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProductDemo from "@/components/ProductDemo";
import ProblemSolution from "@/components/ProblemSolution";
import Programs from "@/components/Programs";
import Rewards from "@/components/Rewards";
import HowItWorks from "@/components/HowItWorks";
import Walkthrough from "@/components/Walkthrough";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductDemo />
        <ProblemSolution />
        <Programs />
        <Rewards />
        <HowItWorks />
        <Walkthrough />
        <CaseStudies />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
