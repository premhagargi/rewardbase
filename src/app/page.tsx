import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProductDemo from "@/components/ProductDemo";
import ProblemSolution from "@/components/ProblemSolution";
import Programs from "@/components/Programs";
import Rewards from "@/components/Rewards";
import HowItWorks from "@/components/HowItWorks";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProductDemo />
        <ProblemSolution />
        <Programs />
        <Rewards />
        <HowItWorks />
        <CaseStudies />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
