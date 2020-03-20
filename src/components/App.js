import React from "react";
import Header from "./Header";
import Countdown from "./Countdown";
import "./App.css";

class Page extends React.Component {
  constructor(props) {
    super(props);

    const deadline = new Date(2020, 9, 3, 10, 30, 0, 0);
    let time = Date.parse(deadline) - Date.parse(new Date());

    this.state = {
      deadline: deadline,
      show: time >= 0
    };
  }

  render() {
    return (
      <section className="section">
        <Header />

        {this.state.show && <Countdown deadline={this.state.deadline} />}
      </section>
    );
  }
}

export default Page;
