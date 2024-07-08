import Food from "../Data/Data";

const Interior = [
  {
    id: "1",
    img: "./Images/interior/interior1.webp",
  },
  {
    id: "2",
    img: "./Images/interior/interior2.webp",
  },
  {
    id: "3",
    img: "./Images/interior/interior3.webp",
  },
  {
    id: "4",
    img: "./Images/interior/interior4.webp",
  },
  {
    id: "5",
    img: "./Images/interior/interior5.webp",
  },
  {
    id: "6",
    img: "./Images/interior/interior6.webp",
  },
  {
    id: "7",
    img: "./Images/interior/interior7.webp",
  },
  {
    id: "8",
    img: "./Images/interior/interior8.webp",
  },
];

const Gallery = () => {
  return (
    <section className="bg-zinc-50 py-10">
      {/* Our Food */}
      <div>
        <div className="text-center text-4xl md:text-7xl text-black text-opacity-80 libre-baskerville-regular">
          Our Food
        </div>
        <div className="max-w-6xl mx-auto pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-3 place-items-center">
            {Food.filter((item) => item.category === "breakfast").map(
              (item) => (
                <div key={item.id}>
                  <img
                    src={item.img}
                    alt={item.img}
                    className="rounded-lg"
                    style={{ objectFit: "cover", height: "180px" }}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Our Interior */}
      <div className="pt-16 pb-10">
        <div className="text-center text-4xl md:text-7xl text-black text-opacity-80 libre-baskerville-regular">
          Our Interior
        </div>
        <div className="max-w-6xl mx-auto pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-3 place-items-center">
            {Interior.map((item) => (
              <div key={item.id}>
                <img
                  src={item.img}
                  alt={item.img}
                  className="rounded-lg"
                  style={{ objectFit: "cover", height: "180px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
