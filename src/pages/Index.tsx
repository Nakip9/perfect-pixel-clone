import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ProductCarousel, solarPanels, batteries } from "@/components/ProductCarousel";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <div id="products">
        <ProductCarousel title="Premium Solar Panels" products={solarPanels} />
        <ProductCarousel title="Energy Storage Solutions" products={batteries} />
      </div>
      <div id="projects">
        <ProjectGallery />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
