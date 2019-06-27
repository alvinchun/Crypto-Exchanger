import React, { Component } from "react";
import CoinContainer from "./CoinContainer";
import axios from "axios";

const csrfToken = document.querySelector('[name="csrf-token"]').content;
axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

class App extends Component {
	render() {
		return <CoinContainer />;
	}
}

export default App;
