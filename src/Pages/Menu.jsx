const Menu = () => {
  return (
    <section className="bg-zinc-50">
      <div className="flex flex-col">
        <div className="text-center pt-10 pb-10">
          <div className="text-4xl md:text-7xl text-black text-opacity-80 libre-baskerville-regular">
            Our Menu
          </div>
          <p className="max-w-lg mx-auto pt-5 text-gray-600">
            We consider all the drivers of change gives you the components you
            need need to change to create a truly happens.
          </p>
        </div>

        {/* Button */}
        <div className="pb-20">
          <div className="flex justify-center items-center space-x-5 text-sm font-medium">
            <button className="MenuButton">All</button>
            <button className="MenuButton">Breakfast</button>
            <button className="MenuButton">Main Dishes</button>
            <button className="MenuButton">Drinks</button>
            <button className="MenuButton">Desserts</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
