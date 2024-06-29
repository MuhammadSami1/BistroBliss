const ContactInformation = () => {
  return (
    <section className="bg-zinc-200">
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 sm:py-14 md:py-24 px-10 sm:px-20 md:px-28 gap-16">
        <div className="max-w-lg self-start relative">
          <img
            src="/Images/Contactfood.webp"
            alt="food"
            className="rounded-lg"
            style={{
              objectPosition: "cover",
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          />
          <div className="hidden sm:flex bg-black bg-opacity-85 absolute z-50 -bottom-10 -right-24 rounded-2xl">
            <div className="sm:px-10 px-5 py-7 max-w-sm">
              <div className="py-5 text-lg font-bold text-white">
                Come and visit us
              </div>
              <div className="text-sm text-gray-100">
                <div className="py-2">(+92)307-4031207</div>
                <div className="py-2">muhammadsami1242@gmail.com</div>
                <div className="py-2">
                  837 W.Marshall Lane Marshalltown, lA 505158, Los Angeles
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pt-20 md:px-16">
          <div className="sm:text-2xl md:text-4xl max-w-md md:leading-snug libre-baskerville-regular">
            We provide healthy food for your family.
          </div>
          <div className="text-sm">
            <p className="py-7 text-gray-800 font-medium">
              Our stroy began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in city rich culinary culture, we aim to honor
              our local roots while infusing a global palate.
            </p>
            <p className="text-gray-600">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
          </div>
          <div className="py-10 text-left">
            <button className="text-sm sm:px-4 px-2 py-2 sm:py-4 border border-black rounded-3xl">
              More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
