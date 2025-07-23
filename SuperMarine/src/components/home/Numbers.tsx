import CountUp from "react-countup";

const stats = [
  { title: "Experienced", value: 15, suffix: "Years" },
  { title: "Rides", value: 75, suffix: "K+" },
  { title: "Happy Customers", value: 1.25, suffix: "Lk+" },
];

const Numbers = () => {
  return (
    <div className="py-10 text-center grid grid-cols-1 md:grid-cols-3  bg-gray-100 w-full mx-auto">
      {stats.map((stat, idx) => (
        <div key={idx} className="text-xl md:text-2xl font-bold">
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
