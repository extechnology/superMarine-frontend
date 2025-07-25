import RentalVehicles from "../components/services/RentalVehicles";
import Services from "../components/services/Services";

const RentalService = () => {
  return (
    <div>
      <div>
        <Services />
      </div>
      <div className="bg-black">
        <RentalVehicles />
      </div>
    </div>
  );
};
export default RentalService;
