import React from "react";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div className="row card">
        <span>My name is {this.props.name}</span> <br />
        <span>I played for {this.state.count} rounds</span>
        <button
          type="button"
          onClick={() => {
            this.props.btnClick(this.props.name);
            this.setState(oldstate => ({
              count: oldstate.count + 1
            }));
          }}
          disabled={this.props.playingNow ? "disabled" : ""}
        >
          {this.props.playingNow ? "This user is playing now" : "Play"}
        </button>
      </div>
    );
  }
}

export default Player;
