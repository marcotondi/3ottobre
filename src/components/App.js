import React from "react";
import Header from "./Header";
import Countdown from "./Countdown";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    const deadline = new Date(2021, 8, 17, 10, 30, 0, 0);
    let time = Date.parse(deadline) - Date.parse(new Date());

    this.state = {
      deadline: deadline,
      show: time >= 0,
    };
  }

  render() {
    return (
      <section className="section">
        <Header />

        <p className="subtitle is-size-3-desktop is-size-4-mobile has-text-centered ">
          <p>coming soon...</p>
        </p>

        {this.state.show && <Countdown deadline={this.state.deadline} />}
      </section>
    );
  }
}

export default App;
