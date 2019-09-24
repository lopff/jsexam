import React from "react";
import ReactDOM from "react-dom";
import App, { Item, search } from "../react/index";

class AnswerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", data: [] };
  }
  changeValue = async name => {
    this.setState({ value: name });
    if (name.trim() === "") {
      this.setState({ data: [] });
      return;
    }
    try {
      const result = await search(name);
      this.setState({ data: result });
    } catch (e) {
      this.setState({ data: [] });
    }
  };
  render() {
    return (
      <div>
        <div>Hi, I want to buy {this.state.value}</div>
        <input onChange={e => this.changeValue(e.target.value)} />
        <div>
          {this.state.data.map(({ price, name, id }) => (
            <Item price={price} name={name} key={id} />
          ))}
        </div>
      </div>
    );
  }
}

try {
  ReactDOM.render(<App />, document.getElementById("app"));
} catch (e) {
  console.log(e);
}
ReactDOM.render(<AnswerApp />, document.getElementById("answer"));
