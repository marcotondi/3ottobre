import React from "react";

// Page --> Header - {left - right} --> {Countdown -  botton}
function ButtonEvent(props) {
  return (
    <>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-2">
          <div
            title="Add to Calendar"
            className="addeventatc is-size-6 is-size-7-touch"
          >
            Add to Calendar
            <span className="start">10/03/2020 10:30 AM</span>
            <span className="end">10/03/2020 12:30 PM</span>
            <span className="timezone">Rome/Italy</span>
            <span className="title">Marco & Melania</span>
            <span className="description">http://3ottobre.it</span>
            <span className="location">
              Largo Castello, 26, 73010 Lequile LE
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function ClockFace(props) {
  return (
    <>
      <div className="tile is-parent is-3">
        <article className="tile is-child box notification has-text-centered is-danger ">
          <div className="box has-background-warning">
            <p className="title"> {props.time} </p>
            <p className="subtitle is-size-5 is-size-6-touch">
              {" "}
              {props.label}{" "}
            </p>
          </div>
        </article>
      </div>
    </>
  );
}

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deadline: this.props.deadline, //new Date(2020, 9, 3, 10, 30, 0, 0)
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let t = Date.parse(this.state.deadline) - Date.parse(new Date());

    this.setState({
      seconds: Math.floor((t / 1000) % 60),
      minutes: Math.floor((t / 1000 / 60) % 60),
      hours: Math.floor((t / (1000 * 60 * 60)) % 24),
      days: Math.floor(t / (1000 * 60 * 60 * 24)),
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="tile is-ancestor">
            <ClockFace time={this.state.days} label={"Days"} />
            <ClockFace time={this.state.hours} label={"Hours"} />
            <ClockFace time={this.state.minutes} label={"Minutes"} />
            <ClockFace time={this.state.seconds} label={"Seconds"} />
          </div>

          {/* <ButtonEvent /> */}
        </div>
      </>
    );
  }
}

export default Countdown; // Don’t forget to use export default!
