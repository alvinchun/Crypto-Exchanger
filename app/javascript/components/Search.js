import React, { Component } from "react";

export default class Search extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const searchResults = this.props.searchResults.map(curr => (
			<li
				className="currency-list-item"
				data-id={curr.id}
				className="currency-list-item"
				onClick={this.props.handleSelect}
			>
				<a className="currency" href="#">
					<span>{curr.name}</span>
				</a>
			</li>
		));
		return (
			<div>
				<h1>Cryptocurrency Exchange Caculator</h1>
				<form action="">
					<div>
						<label htmlFor="">Search for a Currency:</label>
						<br />
						<input
							onChange={this.props.handleChange}
							autoComplete="off"
							type="text"
							name="name"
							placeholder="Ex: Bitcoin, Litecoin, Ethereum..."
							value={this.props.name}
							className="field"
						/>
					</div>
					<div className="currency-list">{searchResults}</div>
				</form>
			</div>
		);
	}
}
