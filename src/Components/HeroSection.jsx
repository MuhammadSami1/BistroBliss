import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <img
          src="./Images/mainpic.webp"
          alt="herosection"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <div
          className="absolute px-2 md:px-16 py-24"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
          }}
        >
          <div className="sm:pt-28 pb-2 sm:pb-4 text-white leading-tight text:lg sm:text-2xl lg:text-7xl max-w-lg libre-baskerville-regular">
            Best food for your taste
          </div>
          <div className="text-white text-xs sm:text-sm lg:text-lg sm:max-w-lg pt-2 sm:pt-4 tracking-wide font-semibold">
            <p>Discover delectable cuisine and unforgettable moments</p>
            <p className="sm:px-24">in our welcoming, culinary haven.</p>
          </div>
          <div className="flex sm:px-20 pt-2 sm:pt-10 sm:gap-10 gap-2">
            <button className="text-white rounded-3xl px-1 py-1 sm:px-6 sm:py-4 text-sm bg-red-800">
              <Link to="/contact">Book A Table</Link>
            </button>
            <button className="text-white rounded-3xl px-1 py-1 sm:px-6 sm:py-4 text-sm border border-white">
              <Link to="/menu">Explore Menu</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
