import { Component, Fragment } from "react";
import banner from "../../assets/blogger.png";
import todayEarnings from "../../assets/today earnings.png";

// sticky top-0 hidden md:inline-block
const Dashboard = (props) => {
  return (
    <Fragment>
      {/* Sidebar mobile */}
      <div id="sidebar-mobile" className="w-72 h-screen bg-white fixed hidden lg:hidden">
        <ul className="pt-20 space-y-5">
          <li className="w-full h-10 bg-blue-800 rounded-xl">
            <a href="" className="block text-xl pt-1 pl-10 font-medium text-white">
              Dashboard
            </a>
          </li>
          <li className="w-full h-10 hover:bg-blue-800 focus:bg-blue-800 rounded-xl hover:text-white hover:font-medium">
            <a href="" className="block text-xl pt-1 pl-10">
              UI Element
            </a>
          </li>
          <li className="w-full h-10 hover:bg-blue-800 focus:bg-blue-800 rounded-xl hover:text-white hover:font-medium">
            <a href="" className="block text-xl pt-1 pl-10">
              Form Element
            </a>
          </li>
          <li className="w-full h-10 hover:bg-blue-800 focus:bg-blue-800 rounded-xl hover:text-white hover:font-medium">
            <a href="" className="block text-xl pt-1 pl-10">
              Charts
            </a>
          </li>
          <li className="w-full h-10 hover:bg-blue-800 focus:bg-blue-800 rounded-xl hover:text-white hover:font-medium">
            <a href="" className="block text-xl pt-1 pl-10">
              Tables
            </a>
          </li>
          <li className="w-full h-10 hover:bg-blue-800 focus:bg-blue-800 rounded-xl hover:text-white hover:font-medium">
            <a href="" className="block text-xl pt-1 pl-10">
              Icons
            </a>
          </li>
          <li className="w-full h-10 hover:bg-blue-800 focus:bg-blue-800 rounded-xl hover:text-white hover:font-medium">
            <a href="" className="block text-xl pt-1 pl-10">
              User Pages
            </a>
          </li>
          <li className="w-full h-10 hover:bg-blue-800 focus:bg-blue-800 rounded-xl hover:text-white hover:font-medium">
            <a href="" className="block text-xl pt-1 pl-10">
              Error pages
            </a>
          </li>
          <li className="w-full h-10 hover:bg-blue-800 focus:bg-blue-800 rounded-xl hover:text-white hover:font-medium">
            <a href="" className="block text-xl pt-1 pl-10">
              Documentation
            </a>
          </li>
        </ul>
      </div>

      {/* Header */}
      <div className="flex border-b-2 shadow-xl h-[55px] bg-white sticky top-0 z-10">
        <p className="text-2xl font-bold pl-20 pt-2 hidden md:block">Mydash</p>
        <button className="space-y-2 lg:pl-16 lg:hidden ml-10" onClick={props.sidebarBtn}>
          <div className="w-7 h-[2px] bg-black"></div>
          <div className="w-7 h-[2px] bg-black"></div>
          <div className="w-7 h-[2px] bg-black"></div>
        </button>
        <input type="text" className="w-[60%] bg-slate-200 pl-10 h-12 ml-9 lg:ml-20 mt-1  rounded-xl" placeholder="Search now" />
        <div className="w-12 h-12 ml-8 lg:ml-60 bg-slate-300 rounded-full mt-1"></div>
      </div>

      {/* Sidebar and Content */}
      <div className="lg:flex lg:overflow-hidden">
        {/* Sidebar */}
        <div id="sidebar-large" className="w-72 h-screen bg-white hidden md:block">
          <ul className="pt-5 space-y-5">
            <li className="w-full h-10 bg-blue-800 rounded-xl">
              <a href="" className="block text-xl pt-1 pl-10 font-medium text-white">
                Dashboard
              </a>
            </li>
            <li className="w-full h-10 hover:bg-blue-800 focus:bg-blue-800 rounded-xl hover:text-white hover:font-medium">
              <a href="" className="block text-xl pt-1 pl-10">
                UI Element
              </a>
            </li>
            <li className="w-full h-10 hover:bg-blue-800 focus:bg-blue-800 rounded-xl hover:text-white hover:font-medium">
              <a href="" className="block text-xl pt-1 pl-10">
                Form Element
              </a>
            </li>
            <li className="w-full h-10 hover:bg-blue-800 focus:bg-blue-800 rounded-xl hover:text-white hover:font-medium">
              <a href="" className="block text-xl pt-1 pl-10">
                Charts
              </a>
            </li>
            <li className="w-full h-10 hover:bg-blue-800 focus:bg-blue-800 rounded-xl hover:text-white hover:font-medium">
              <a href="" className="block text-xl pt-1 pl-10">
                Tables
              </a>
            </li>
            <li className="w-full h-10 hover:bg-blue-800 focus:bg-blue-800 rounded-xl hover:text-white hover:font-medium">
              <a href="" className="block text-xl pt-1 pl-10">
                Icons
              </a>
            </li>
            <li className="w-full h-10 hover:bg-blue-800 focus:bg-blue-800 rounded-xl hover:text-white hover:font-medium">
              <a href="" className="block text-xl pt-1 pl-10">
                User Pages
              </a>
            </li>
            <li className="w-full h-10 hover:bg-blue-800 focus:bg-blue-800 rounded-xl hover:text-white hover:font-medium">
              <a href="" className="block text-xl pt-1 pl-10">
                Error pages
              </a>
            </li>
            <li className="w-full h-10 hover:bg-blue-800 focus:bg-blue-800 rounded-xl hover:text-white hover:font-medium">
              <a href="" className="block text-xl pt-1 pl-10">
                Documentation
              </a>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="container lg:grid h-[400px] grid-cols-2 mt-10">
          {/* Section 1 */}
          <div className="lg:ml-10 mb-10 bg-blue-300 lg:h-[390px] rounded-xl">
            <img src={banner} alt="" className="w-[80%] mx-auto " />
          </div>
          {/* Section 2 */}
          <div className="lg:grid grid-cols-2 gap-4 lg:ml-4">
            <div id="booking" className="bg-[#7da0fa] mb-5 lg:w-72 h-40 rounded-xl">
              <p className="text-xl pt-3 pl-4 text-white font-medium">Today's booking</p>
              <p className="text-3xl pt-8 pl-4 text-red-600 font-medium">4006</p>
              <p className="text-xl pl-4 text-white font-medium">10.000%(30 days)</p>
            </div>

            <div id="booking" className="bg-[#7da0fa] mb-5 lg:w-72 h-40 rounded-xl">
              <p className="text-xl pt-3 pl-4 text-white font-medium">Today's booking</p>
              <p className="text-3xl pt-8 pl-4 text-red-600 font-medium">4006</p>
              <p className="text-xl pl-4 text-white font-medium">10.000%(30 days)</p>
            </div>
            <div id="booking" className="bg-[#7da0fa] mb-5 lg:w-72 h-40 rounded-xl">
              <p className="text-xl pt-3 pl-4 text-white font-medium">Today's booking</p>
              <p className="text-3xl pt-8 pl-4 text-red-600 font-medium">4006</p>
              <p className="text-xl pl-4 text-white font-medium">10.000%(30 days)</p>
            </div>
            <div id="booking" className="bg-[#7da0fa] mb-5 lg:w-72 h-40 rounded-xl">
              <p className="text-xl pt-3 pl-4 text-white font-medium">Today's booking</p>
              <p className="text-3xl pt-8 pl-4 text-red-600 font-medium">4006</p>
              <p className="text-xl pl-4 text-white font-medium">10.000%(30 days)</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
