import React from "react";
import "./App.css";
import profilepic from "./pics/profilepic.jpg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Lawal omolola",
        bio: "The bulb trainee",
        imgSrc: profilepic,
        profession: "Software Engineer ",
      },
      show: false,
    };
  }
  sayHello = () => {
    return "hello " + this.state.person.fullName;
  };
  componentDidMount() {
    console.log(this.sayHello());
    this.interval = setInterval(this.sayHello, 1000);
  }
  componentWillMount() {
    clearInterval(this.interval);
  }
  toggleState = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        show: !prevState.show,
      };
    });
  };
  render() {
    const { fullName, profession, imgSrc: image, bio } = this.state.person;
    return (
      <div className="App">
        {this.state.show && (
          <div>
            <img src={image} alt="profilepic" />
            <h2>Full Name:{fullName}</h2>
            <p>Bio: {bio}</p>
            <p>profession: {profession}</p>
          </div>
        )}

        <button onClick={this.toggleState}>Toggle</button>
      </div>
    );
  }
}

export default App;
