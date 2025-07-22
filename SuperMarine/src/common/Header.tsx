const Header = () => {
  return (
    <div className="transparent ">
      {/* desktop navbar */}
      <div className="flex justify-between max-w-7xl mx-auto py-5">
        <div>
          {/* <img src="" alt="logo" /> */}
          <h1 className="text-2xl font-bold" >Super Marine</h1>
        </div>
        <div className="rounded-full border content-center border-black">
          <ul className="flex gap-10 px-10 py-4">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Contact Us</li>
            <li>
              <button type="button">Book Now</button>
            </li>
          </ul>
        </div>
      </div>
      {/* mobile navbar */}
    </div>
  );
};
export default Header;
