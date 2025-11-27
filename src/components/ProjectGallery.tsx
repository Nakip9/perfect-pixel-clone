import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    title: "Solar Farm Complex",
    location: "Desert Valley",
    description: "250MW utility-scale solar installation",
    image: project1,
  },
  {
    id: 2,
    title: "Residential Installation",
    location: "Suburban Hills",
    description: "Premium rooftop solar system",
    image: project2,
  },
  {
    id: 3,
    title: "Commercial Building",
    location: "City Center",
    description: "Integrated solar facade solution",
    image: project3,
  },
];

export const ProjectGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + projects.length) % projects.length;
    
    if (diff === 0) {
      return {
        x: 0,
        scale: 1.2,
        rotateY: 0,
        zIndex: 30,
        opacity: 1,
      };
    } else if (diff === 1 || diff === -(projects.length - 1)) {
      return {
        x: "40%",
        scale: 0.9,
        rotateY: -25,
        zIndex: 20,
        opacity: 0.6,
      };
    } else {
      return {
        x: "-40%",
        scale: 0.9,
        rotateY: 25,
        zIndex: 20,
        opacity: 0.6,
      };
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powering communities with innovative solar solutions
          </p>
          <div className="w-20 h-1 bg-gradient-solar mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="relative h-[600px] flex items-center justify-center perspective-1000">
          {/* Background blur effect */}
          <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 blur-3xl scale-150"
                style={{
                  backgroundImage: `url(${projects[currentIndex].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </AnimatePresence>
          </div>

          {/* Cards */}
          <div className="relative w-full max-w-7xl h-full flex items-center justify-center">
            {projects.map((project, index) => {
              const style = getCardStyle(index);
              const isActive = index === currentIndex;

              return (
                <motion.div
                  key={project.id}
                  className="absolute w-80 h-96 cursor-pointer"
                  initial={false}
                  animate={style}
                  transition={{
                    duration: 0.8,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0, 
                        y: isActive ? 0 : 20 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-1 bg-primary" />
                        <span className="text-sm text-primary font-semibold uppercase tracking-wider">
                          {project.location}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation */}
          <Button
            onClick={handlePrev}
            variant="outline"
            size="icon"
            className="absolute left-4 md:left-20 z-50 w-14 h-14 rounded-full bg-card/80 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={handleNext}
            variant="outline"
            size="icon"
            className="absolute right-4 md:right-20 z-50 w-14 h-14 rounded-full bg-card/80 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};
