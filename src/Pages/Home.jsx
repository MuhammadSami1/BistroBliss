import ContactInformation from "../Components/ContactInformation";
import HeroSection from "../Components/HeroSection";
import MainMenu from "../Components/MainMenu";
import ReviewSection from "../Components/ReviewSection";
import image1 from "/Images/Contactfood.webp";

const Home = () => {
  return (
    <>
      <HeroSection />
      <MainMenu />
      <ContactInformation image={image1} />
      <ReviewSection />
    </>
  );
};

export default Home;
