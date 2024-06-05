import HeroMain from "./components/HeroBanner/HeroMain";
import FeaturesMain from "./components/Features/FeaturesMain";
import AdvantagesMain from "./components/Advantages/AdvantagesMain";
import CustomizableMain from "./components/Customizable/CustomizableMain";
import TestimonialMain from "./components/Testimonial/TestimonialMain";
import FaqMain from "./components/Faq/FaqMain";
import ReadyMain from "./components/Ready/ReadyMain";
import FooterMain from "./components/Footer/FooterMain";
import HeaderMain from "./components/Header/HeaderMain";

export default function Home() {
  return (
    <main>
      <HeaderMain />
      <HeroMain />
      <FeaturesMain />
      <AdvantagesMain />
      <CustomizableMain />
      <TestimonialMain />
      <FaqMain />
      <ReadyMain />
      <FooterMain />
    </main>
  );
}
