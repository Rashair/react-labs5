/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Player from "./Player";

class GameMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOne: "One",
      nameTwo: "Two",
      playingNowOne: false,
      playingNowTwo: false
    };
    this.onPlayClick = this.onPlayClick.bind(this);
  }

  onPlayClick(name) {
    this.setState(oldstate => ({
      playingNowOne: name === oldstate.nameOne,
      playingNowTwo: name === oldstate.nameTwo
    }));
  }

  render() {
    return (
      <div className="mx-auto" style={{ width: "800px" }}>
        <Player
          name={this.state.nameOne}
          playingNow={this.state.playingNowOne}
          btnClick={this.onPlayClick}
        />
        <Player
          name={this.state.nameTwo}
          playingNow={this.state.playingNowTwo}
          btnClick={this.onPlayClick}
        />
        <form className="mt-5">
          <div className="form-group row">
            <label htmlFor="One" className="col-sm-2">
              User 1 name:
            </label>
            <div className="col-sm-8">
              <input
                className="form-control"
                id="One"
                value={this.state.nameOne}
                type="text"
                onChange={e => this.setState({ nameOne: e.target.value })}
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label htmlFor="Two" className="col-sm-2">
              User 2 name:
            </label>
            <div className="col-sm-8">
              <input
                className="form-control"
                id="Two"
                value={this.state.nameTwo}
                type="text"
                onChange={e => this.setState({ nameTwo: e.target.value })}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default GameMaster;
