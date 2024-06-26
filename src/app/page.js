import HeroMain from "./components/HeroBanner/HeroMain";
import FeaturesMain from "./components/Features/FeaturesMain";
import AdvantagesMain from "./components/Advantages/AdvantagesMain";
import CustomizableMain from "./components/Customizable/CustomizableMain";
import TestimonialMain from "./components/Testimonial/TestimonialMain";
import FaqMain from "./components/Faq/FaqMain";
import ReadyMain from "./components/Ready/ReadyMain";
import FooterMain from "./components/Footer/FooterMain";
import HeaderMain from "./components/Header/HeaderMain";

// Default Home component rendering all the sections of the website
export default function Home() {
  return (
    <main>
      {/* Render the header section */}
      <HeaderMain />
      {/* Render the hero/banner section */}
      <HeroMain />
      {/* Render the features section */}
      <FeaturesMain />
      {/* Render the advantages section */}
      <AdvantagesMain />
      {/* Render the customizable section */}
      <CustomizableMain />
      {/* Render the testimonial section */}
      <TestimonialMain />
      {/* Render the FAQ section */}
      <FaqMain />
      {/* Render the ready section */}
      <ReadyMain />
      {/* Render the footer section */}
      <FooterMain />
    </main>
  );
}
