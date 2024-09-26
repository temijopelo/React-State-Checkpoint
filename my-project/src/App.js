import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      Person: {
        fullName: "John Doe",
        bio: "A software engineer who loves coding and open-source contributions.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Engineer",
      },
      shows: false,
      mountedTime: 0,
    };

    // To store the interval ID
    this.intervalId = null;
  }

  componentDidMount() {
    // Start the timer when the component is mounted
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000); // Update every 1 second
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.intervalId);
  }

  toggleProfile = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { Person, shows, mountedTime } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Person Profile</h1>

        {/* Toggle button */}
        <button
          onClick={this.toggleProfile}
          style={{ padding: "10px 20px", margin: "20px 0" }}
        >
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {/* Show profile details only if `shows` is true */}
        {shows && (
          <div>
            <img
              src={Person.imgSrc}
              alt={Person.fullName}
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
            <h2>{Person.fullName}</h2>
            <p>
              <strong>Profession:</strong> {Person.profession}
            </p>
            <p>{Person.bio}</p>
          </div>
        )}

        {/* Time since component was mounted */}
        <h4>Time since component mounted: {mountedTime} seconds</h4>
      </div>
    );
  }
}

export default App;
