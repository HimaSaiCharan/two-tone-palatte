import { Component } from "react";
import "./App.css";

class Color extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div
        className={`color ${this.props.position}`}
        style={{ background: this.props.color }}
      >
        {this.props.name}
      </div>
    );
  }
}

class TwoTonePalatte extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="palatte-container"
        onClick={() => this.props.onClick(this.props.palatte)}
      >
        <div className="palatte">
          <Color color={this.props.palatte.colors[0]} key={0} position="left" />
          <Color
            color={this.props.palatte.colors[1]}
            key={1}
            position="right"
          />
        </div>
        <div className="color-codes">
          <p className="color-code">{this.props.palatte.colors[0]}</p>
          <p className="color-code">{this.props.palatte.colors[1]}</p>
        </div>
        <p className="palatte-name">{this.props.palatte.name}</p>
      </div>
    );
  }
}

class PalattesContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="palattes-container">
        {this.props.colorPalattes.map((palatte, i) => (
          <TwoTonePalatte
            palatte={palatte}
            key={i}
            onClick={this.props.onClick}
          />
        ))}
      </div>
    );
  }
}

class PalatteView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="palatte-view">
        {this.props.colors.map((color, i) => (
          <Color color={color} key={i} name={this.props.palatteName} />
        ))}
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palatteView: this.props.colorPalattes[0].colors,
    };
    this.updateView = this.updateView.bind(this);
  }

  updateView(palatte) {
    this.setState({ palatteView: palatte.colors });
  }

  render() {
    return (
      <div className="container">
        <PalattesContainer
          colorPalattes={this.props.colorPalattes}
          onClick={this.updateView}
        />
        <PalatteView
          colors={this.state.palatteView}
          name={this.state.palatteName}
        />
      </div>
    );
  }
}

export default App;
