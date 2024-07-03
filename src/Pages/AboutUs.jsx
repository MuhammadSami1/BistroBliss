import ContactInformation from "../Components/ContactInformation";
import ReviewSection from "../Components/ReviewSection";
import image2 from "../../public/Images/Contactfood1.webp";

const AboutUs = () => {
  return (
    <>
      <ContactInformation image={image2} />
      <ReviewSection />
    </>
  );
};

export default AboutUs;
