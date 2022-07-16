import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function AccountDropDown() {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="z-50 bg-gray-900 origin-top-right absolute right-3 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <Menu.Item>
            <a
              href="#"
              className="navbar-dropdown-item border-b-2 border-slate-700"
            >
              Elon Musk
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#" className="navbar-dropdown-item">
              Profile
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#" className="navbar-dropdown-item text-red-400">
              Logout
            </a>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  );
}

export default AccountDropDown;
