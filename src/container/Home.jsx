import { Component, Fragment } from "react";
import Dashboard from "./Dashboard/Dashboard";

class Home extends Component {
  openSidebar = () => {
    const sidebarMobile = document.querySelector("#sidebar-mobile");
    sidebarMobile.classList.toggle("hidden");
  };

  render() {
    return (
      <Fragment>
        <Dashboard sidebarBtn={this.openSidebar} />
      </Fragment>
    );
  }
}

export default Home;
