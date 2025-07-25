import ServiceAndRepair from "../components/services/ServiceAndRepair";
import Services from "../components/services/Services";

const Repair = () => {
  return (
    <div>
      <Services />
      <div className="bg-black">
        <ServiceAndRepair />
      </div>
    </div>
  );
};
export default Repair;
