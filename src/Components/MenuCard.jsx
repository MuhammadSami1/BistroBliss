const MenuCard = ({ title, svg }) => {
  return (
    <div className="border border-gray-400 rounded-2xl max-w-64 mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="py-7">
          <div className="bg-zinc-300 rounded-full px-4 py-4">{svg}</div>
        </div>

        <div className="text-lg font-semibold pb-3">{title}</div>
        <p className="text-sm text-center px-6 text-gray-700">
          In the era of technology we look in the future with certainty and
          pride for our life.
        </p>
        <button className="text-red-700 font-medium text-sm pt-8 pb-6">
          Explore Menu
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
