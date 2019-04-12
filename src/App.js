const Pet = props => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, props.name),
    React.createElement("h1", {}, props.animal),
    React.createElement("h1", {}, props.breed)
  );
};

class App extends React.Component {
  render() {
    return React.createElement(
      "div",
      {},
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Tin Tin !",
        animal: "Dog",
        breed: "Combai"
      })
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
