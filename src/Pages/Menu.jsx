import { useState } from "react";
import Food from "../Data/Data";
import { useEffect } from "react";

const Menu = () => {
  const [item, setAllItem] = useState([]);
  const [mainColor, setMainColor] = useState({
    all: "MenuButton",
    breakfast: "MenuButton",
    maindishes: "MenuButton",
    drinks: "MenuButton",
    desserts: "MenuButton",
  });

  const changeColor = (button) => {
    setMainColor({
      all: "MenuButton",
      breakfast: "MenuButton",
      maindishes: "MenuButton",
      drinks: "MenuButton",
      desserts: "MenuButton",
      [button]: "MenuButton bg-red-800 text-white bg-opacity-80",
    });
  };
  useEffect(() => {
    showAllItems();
    changeColor("all");
  }, []);

  function showAllItems() {
    setAllItem(
      Food.sort(() => Math.random() - 0.5)
        .slice(0, 16)
        .map((item) => (
          <div key={item.id}>
            <img
              src={item.img}
              alt={item.img}
              className="rounded-t-lg"
              style={{ objectFit: "cover", height: "180px" }}
            />
            <div className="text-center border-2 border-t-0 rounded-b-lg">
              <div className="py-3 text-red-800 bg-opacity-90 text-lg font-semibold">{`$ ${item.price}`}</div>
              <div className="pb-3 font-medium">{item.name}</div>
              <div className="w-48 mx-auto text-xs leading-5 pb-7 text-gray-700">
                {item.description}
              </div>
            </div>
          </div>
        ))
    );
    changeColor("all");
  }

  const showCategoryItems = (category) => {
    setAllItem(
      Food.filter((item) => item.category === category)
        .slice(0, 16)
        .map((item) => (
          <div key={item.id}>
            <img
              src={item.img}
              alt={item.img}
              className="rounded-t-lg"
              style={{ objectFit: "cover", height: "180px" }}
            />
            <div className="text-center border-2 border-t-0 rounded-b-lg">
              <div className="py-3 text-red-800 bg-opacity-90 text-lg font-semibold">{`$ ${item.price}`}</div>
              <div className="pb-3 font-medium">{item.name}</div>
              <div className="w-48 mx-auto text-xs leading-5 pb-7 text-gray-700">
                {item.description}
              </div>
            </div>
          </div>
        ))
    );
    changeColor(category);
  };

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
        <div className="pb-16">
          <div className="flex justify-center items-center space-x-2 sm:space-x-5 text-sm font-medium">
            <button className={mainColor.all} onClick={showAllItems}>
              All
            </button>
            <button
              className={mainColor.breakfast}
              onClick={() => showCategoryItems("breakfast")}
            >
              Breakfast
            </button>
            <button
              className={mainColor.maindishes}
              onClick={() => showCategoryItems("maindishes")}
            >
              Main Dishes
            </button>
            <button
              className={mainColor.drinks}
              onClick={() => showCategoryItems("drinks")}
            >
              Drinks
            </button>
            <button
              className={mainColor.desserts}
              onClick={() => showCategoryItems("desserts")}
            >
              Desserts
            </button>
          </div>
        </div>

        {/* Display Items */}
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-5 pb-24">
          {item.length > 0 && item}
        </div>
      </div>
    </section>
  );
};

export default Menu;
