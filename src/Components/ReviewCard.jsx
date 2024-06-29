const ReviewCard = ({ title, profile, name, address, message }) => {
  return (
    <div className="bg-zinc-200 max-w-xs mx-auto rounded-lg">
      <div className="px-8">
        <div className="pt-10 text-lg text-red-800 libre-baskerville-regular">
          {title}
        </div>
        <div className="py-7 text-sm text-gray-700">{message}</div>
        <div className="border border-gray-300"></div>
        <div className="flex items-center gap-5 py-7">
          <img
            src={profile}
            alt="profile"
            className="rounded-full"
            style={{ objectPosition: "cover", width: "60px", height: "60px" }}
          />
          <div className="text-sm">
            <div className="py-1">{name}</div>
            <div className="text-gray-700">{address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
