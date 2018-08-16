import React, { Component } from "react";
import "./WithLoading.css";
const WithLoading = SimpleComponent => {
  return class WithLoading extends Component {
    constructor(props) {
      super(props);

      this.state = {
        time: 3
      };
    }
    redner() {
      return this.props.time === 3 ? (
        <div class="lds-hourglass" />
      ) : (
        <SimpleComponent {...this.props} />
      );
    }
  };
};
export default WithLoading;
