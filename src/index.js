import React from "react";
import ReactDOM from "react-dom";

import "./WithLoading.css";
import "./styles.css";

const WithLoading = ({ isLoading, children }) => (
  <div>{isLoading ? <div class="lds-hourglass" /> : children}</div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    setTimeout(
      () =>
        this.setState({
          isLoading: false
        }),
      3000
    );
  }

  render() {
    return (
      <div>
        <WithLoading isLoading={this.state.isLoading}>
          <img
            src="https://discourse-user-assets.s3.amazonaws.com/original/3X/2/c/2c0182df368327449144363fe9dd4cb82256b5a7.jpg"
            alt=""
          />
        </WithLoading>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
