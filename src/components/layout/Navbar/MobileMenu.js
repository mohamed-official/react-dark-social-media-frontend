import { ImHome } from "react-icons/im";
import { HiUsers } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";

function MobileMenu({ isMenuOpen }) {
  return (
    <div
      className="block md:hidden px-4 py-3 text-white w-full bg-gray-800
      border-t border-opacity-70 border-slate-700"
    >
      <div className="flex items-center mb-3 pb-3 border-b border-slate-700">
        <img
          src="https://africaprime.com/wp-content/uploads/2020/04/ElonMusk.jpg"
          className="rounded-full w-8 h-8 cursor-pointer"
        />
        <h6 className="ml-5 cursor-pointer">Elon Musk</h6>
      </div>
      <div className="mobile-nav-icon">
        <ImHome size={20} />
        <h4 className="ml-5">Home</h4>
      </div>
      <div className="mobile-nav-icon">
        <HiUsers size={20} />
        <h4 className="ml-5">Friends</h4>
      </div>
      <div className="mobile-nav-icon">
        <CgProfile size={20} />
        <h4 className="ml-5">My Profile</h4>
      </div>
      <div className="mobile-nav-icon text-red-400 hover:text-red-400">
        <BiLogOut size={20} />
        <h4 className="ml-5">Logout</h4>
      </div>
    </div>
  );
}

export default MobileMenu;
