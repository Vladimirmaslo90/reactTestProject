import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
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
    this.setState({ value: this.state.value + 1 });
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
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
