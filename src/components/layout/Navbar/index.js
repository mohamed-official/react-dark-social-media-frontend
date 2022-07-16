import {
  MdOutlineNotificationsNone,
  MdMailOutline,
  MdOutlineSearch,
} from "react-icons/md";
import { FiHeart, FiPlusCircle, FiMenu } from "react-icons/fi";
import { Menu } from "@headlessui/react";
import AccountDropDown from "./AccountDropDown";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <Menu>
      <nav className="flex justify-between items-center px-4 lg:px-8 py-3 bg-gray-900 text-white">
        {/* Left Section { icons } */}
        <div className="flex items-center w-1/2">
          <h4 className="text-3xl cursor-pointer hover:text-gray-300">App</h4>
          <div className="flex ml-10 md:ml-24 lg:ml-36">
            <div className="nav-icon hover:bg-red-700 ml-0">
              <FiHeart size={20} />
            </div>
            <div className="active-nav-icon nav-icon">
              <MdOutlineNotificationsNone size={20} />
            </div>
            <div className="nav-icon">
              <MdMailOutline size={20} />
            </div>
            <div className="nav-icon">
              <FiPlusCircle size={20} />
            </div>
          </div>
        </div>
        {/* Right Section { Search & Avatar } */}
        <div className="hidden md:flex justify-end items-center w-1/2">
          <div className="relative mr-8">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <MdOutlineSearch size={25} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="w-64 lg:w-80 px-4 py-3 pl-12 text-md rounded-full border focus:ring-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
          <div>
            <Menu.Button>
              <img
                src="https://africaprime.com/wp-content/uploads/2020/04/ElonMusk.jpg"
                className="rounded-full w-14 h-14 cursor-pointer"
              />
            </Menu.Button>
          </div>
        </div>
        {/* Mobile Menu Icon */}
        <div
          className="block md:hidden p-2 cursor-pointer rounded-full hover:bg-gray-700 transition-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FiMenu size={20} />
        </div>
      </nav>
      {/* Avatar Drop Down */}
      <AccountDropDown />
      {/* Mobile Menu */}
      {mobileMenuOpen && <MobileMenu />}
    </Menu>
  );
}

export default Navbar;
