import { Component, Fragment } from "react";
import banner from "../../assets/blogger.png";
import todayEarnings from "../../assets/today earnings.png";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        {/* Header */}
        <div className="flex border-b-2 shadow-xl h-[50px] space-x-10">
          <p className="text-2xl font-bold pl-4 pt-1">Mydash</p>
          <button className="space-y-2">
            <div className="w-7 h-[2px] bg-black"></div>
            <div className="w-7 h-[2px] bg-black"></div>
            <div className="w-7 h-[2px] bg-black"></div>
          </button>
          <div className="">
            <span></span>
          </div>
        </div>

        {/* Section */}
        <div className="lg:flex flex-wrap">
          <div id="img-thumb section-1" className="rounded-xl bg-slate-300 lg:w-[30%] shadow-xl mt-10">
            <img src={banner} alt="banner" className="w-[80%] mx-auto" />
          </div>
          <div
            id="section-2"
            className="lg:grid lg:ml-10 gap-4 grid-cols-2
          ">
            <div id="booking" className="bg-[#7da0fa] mt-10 lg:w-96 h-52 rounded-xl relative overflow-hidden">
              <p className="text-2xl pt-3 pl-4 text-white font-medium">Today's booking</p>
              <p className="text-4xl pt-8 pl-4 text-red-600 font-medium">4006</p>
              <p className="text-2xl pl-4 text-white font-medium">10.000%(30 days)</p>
              <img src={todayEarnings} alt="todayEarnings" className="w-[60%] absolute top-0 -right-9" />
            </div>
            <div id="booking" className="bg-[#7da0fa] mt-10 lg:w-96 h-52 rounded-xl relative overflow-hidden">
              <p className="text-2xl pt-3 pl-4 text-white font-medium">Today's booking</p>
              <p className="text-4xl pt-8 pl-4 text-red-600 font-medium">4006</p>
              <p className="text-2xl pl-4 text-white font-medium">10.000%(30 days)</p>
              <img src={todayEarnings} alt="todayEarnings" className="w-[60%] absolute top-0 -right-9" />
            </div>
            <div id="booking" className="bg-[#7da0fa] mt-10 lg:w-96 h-52 rounded-xl relative overflow-hidden">
              <p className="text-2xl pt-3 pl-4 text-white font-medium">Today's booking</p>
              <p className="text-4xl pt-8 pl-4 text-red-600 font-medium">4006</p>
              <p className="text-2xl pl-4 text-white font-medium">10.000%(30 days)</p>
              <img src={todayEarnings} alt="todayEarnings" className="w-[60%] absolute top-0 -right-9" />
            </div>
            <div id="booking" className="bg-[#7da0fa] mt-10 lg:w-96 h-52 rounded-xl relative overflow-hidden">
              <p className="text-2xl pt-3 pl-4 text-white font-medium">Today's booking</p>
              <p className="text-4xl pt-8 pl-4 text-red-600 font-medium">4006</p>
              <p className="text-2xl pl-4 text-white font-medium">10.000%(30 days)</p>
              <img src={todayEarnings} alt="todayEarnings" className="w-[60%] absolute top-0 -right-9" />
            </div>
          </div>
        </div>
        <div className="mb-96"></div>
      </Fragment>
    );
  }
}
export default Dashboard;
