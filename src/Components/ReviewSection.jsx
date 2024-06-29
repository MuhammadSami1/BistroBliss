import ReviewCard from "./ReviewCard";

const profiles = [
  {
    id: 1,
    title: "The best restaurant",
    profile:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    name: "John Doe",
    message:
      "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    address: "Los Angeles, CA",
  },
  {
    id: 2,
    title: "Simply delicious",
    profile:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    name: "Andy Smith",
    message:
      "Place exceeded my expectations on all fronts. The amibance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
    address: "San Diego, CA",
  },
  {
    id: 3,
    title: "One of a kind restaurant",
    profile:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    name: "Sophire Robson",
    message:
      "The culinary experience at place is first to none. The atmosphere is vibrant, the food was the highlight of our evening Highly recommended.",
    address: "San Francisco, CA",
  },
];

const ReviewSection = () => {
  return (
    <section className="bg-zinc-100">
      <div>
        <div className="text-center text-2xl md:text-4xl pt-20 pb-16 libre-baskerville-regular">
          What Our Customers Say
        </div>
        <div className="pb-28 flex flex-wrap gap-x-5 gap-y-10 items-center justify-center max-w-5xl md:px-3 mx-auto">
          {profiles.map((id) => (
            <ReviewCard
              key={id}
              title={id.title}
              profile={id.profile}
              name={id.name}
              address={id.address}
              message={id.message}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
