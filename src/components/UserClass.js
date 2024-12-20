import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "Dummy",
    };
    console.log(`${this.state.user} constructor`);
  }

  async componentDidMount() {
    const json = await fetch("https://api.github.com/users/arnabjoy123");
    const data = await json.json();

    this.setState({
      user: data.login,
      followers: data.followers,
      publicRepos: data.public_repos,
    });
    console.log(`${this.state.user} component did mount`);
  }

  componentDidUpdate() {
    console.log(`So component ${this.state.user} did finally update`);
  }

  render() {
    console.log(`${this.state.user} render`);
    return (
      <>
        <div className="user-card">
          <h1>{this.state.user}</h1>
          <h2>Followers: {this.state.followers}</h2>
          <p>Public repos: {this.state.public_repos}</p>
        </div>
      </>
    );
  }
}

export default UserClass;
