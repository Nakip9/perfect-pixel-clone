import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import solarPanel1 from "@/assets/solar-panel-1.jpg";
import solarPanel2 from "@/assets/solar-panel-2.jpg";
import battery1 from "@/assets/battery-1.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface Product {
  id: string;
  name: string;
  brand: string;
  power: string;
  image: string;
  efficiency?: string;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

export const ProductCarousel = ({ title, products }: ProductCarouselProps) => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          <div className="w-20 h-1 bg-gradient-solar mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation
            className="product-swiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="pb-12">
                <Card className="group relative overflow-hidden bg-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {product.efficiency && (
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                        {product.efficiency}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-secondary font-medium mb-2">
                      {product.brand}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {product.power}
                      </span>
                      <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style>{`
        .product-swiper {
          padding: 2rem 0;
        }
        .product-swiper .swiper-slide {
          width: 320px;
          max-width: 90vw;
        }
        .product-swiper .swiper-button-next,
        .product-swiper .swiper-button-prev {
          color: hsl(var(--primary));
          background: hsl(var(--card));
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid hsl(var(--border));
        }
        .product-swiper .swiper-button-next:after,
        .product-swiper .swiper-button-prev:after {
          font-size: 20px;
        }
        .product-swiper .swiper-pagination-bullet {
          background: hsl(var(--primary));
          opacity: 0.5;
        }
        .product-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

// Predefined product data
export const solarPanels: Product[] = [
  {
    id: "1",
    name: "Vertex N 715W",
    brand: "Premium Series",
    power: "715W",
    image: solarPanel1,
    efficiency: "23.2%",
  },
  {
    id: "2",
    name: "Vertex S 650W",
    brand: "Premium Series",
    power: "650W",
    image: solarPanel2,
    efficiency: "22.8%",
  },
  {
    id: "3",
    name: "Vertex N 700W",
    brand: "Premium Series",
    power: "700W",
    image: solarPanel1,
    efficiency: "23.0%",
  },
  {
    id: "4",
    name: "Vertex N 620W",
    brand: "Standard Series",
    power: "620W",
    image: solarPanel2,
    efficiency: "22.5%",
  },
];

export const batteries: Product[] = [
  {
    id: "1",
    name: "PowerStack 100",
    brand: "Energy Storage",
    power: "10.0kWh",
    image: battery1,
  },
  {
    id: "2",
    name: "PowerRack HV",
    brand: "Energy Storage",
    power: "15.4kWh",
    image: battery1,
  },
  {
    id: "3",
    name: "PowerBox Pro",
    brand: "Energy Storage",
    power: "5.12kWh",
    image: battery1,
  },
  {
    id: "4",
    name: "PowerBrick",
    brand: "Energy Storage",
    power: "2.56kWh",
    image: battery1,
  },
];
