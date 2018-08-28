import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {" "}
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}{" "}
      </ul>
    );
  }

  handleIncrement = () => {
    console.log();
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        {/* <span style {{ fontSize: 30 }} className="badge badge-primary m-2">{this.formatCount()} </span> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()} </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="bth btn-secondary btn-sm"
        >
          {" "}
          Increment{" "}
        </button>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
