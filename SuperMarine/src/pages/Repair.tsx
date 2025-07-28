import RentService from "../components/services/RentService";
import ServiceAndRepair from "../components/services/ServiceAndRepair";

const Repair = () => {
  return (
    <div>
      <RentService />
      <div className="bg-black">
        <ServiceAndRepair />
      </div>
    </div>
  );
};
export default Repair;
