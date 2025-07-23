import CountUp from "react-countup";

const stats = [
  { title: "Experienced", value: 15, suffix: "Years" },
  { title: "Rides", value: 75, suffix: "K+" },
  { title: "Happy Customers", value: 1.25, suffix: "Lk+" },
];

const Numbers = () => {
  return (
    <div className="relative py-10 bg-[url('/sea.jpg')] bg-cover text-white  bg-center text-center grid grid-cols-1 md:grid-cols-3  w-full mx-auto">
      <div className="absolute bg-gradient-to-b from-black/20 via-black/40 to-black/60 inset-0"></div>
      {stats.map((stat, idx) => (
        <div key={idx} className="text-xl md:text-2xl z-10 font-bold">
          <div>
            <CountUp end={stat.value} duration={2.5} />
            <span>{stat.suffix}</span>
          </div>
          <div className="text-lg font-semibold mt-1">{stat.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Numbers;
