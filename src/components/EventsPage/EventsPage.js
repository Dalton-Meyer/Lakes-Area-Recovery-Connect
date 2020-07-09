import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// this is the header component that displays on every page

class Events extends Component {
  render() {
    return (
        <div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{

    }
}
export default connect(mapStateToProps)(Events);