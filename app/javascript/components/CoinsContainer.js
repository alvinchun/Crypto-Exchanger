import React, { Component } from "react";
import Search from "./Search";
import Calculate from "./Calculation";
import axios from "axios";

export default class CoinContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			portfolio: [],
			search_results: [],
			active_currency: null,
			amount: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	}
	handleChange(e) {
		axios
			.post("http://localhost:3000/search", {
				search: e.target.value
			})
			.then(data => {
				// debugger;
				// console.log(data);
				this.setState({
					search_results: [...data.data.currencies]
				});
			})
			.catch(data => {
				debugger;
			});
		console.log(this.state.search_results);
	}

	handleSelect(e) {
		e.preventDefault();
		debugger;
	}
	render() {
		return (
			<>
				<Search
					handleSelect={this.handleSelect}
					searchResults={this.state.search_results}
					handleChange={this.handleChange}
				/>
				<Calculate />
			</>
		);
	}
}
