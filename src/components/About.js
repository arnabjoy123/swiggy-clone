import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }
  componentDidUpdate() {
    console.log("Parent component did update");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        About
        <User name={"Arnab Das"} role={"Front end dev"} />
        <UserClass name={"Arnab Das Classy"} role={"Front end dev"} />
      </div>
    );
  }
}

export default About;
