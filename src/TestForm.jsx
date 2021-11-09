import { Component } from "react";

class TestForm extends Component {
	constructor() {
		super();
		this.state = {
			userName: "",
			passWord: "",
		};
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		const { userName, passWord } = this.state;
		console.log(`state : username ${userName} - Password : ${passWord} `);
		//  const {}
		return (
			<div>
				<form>
					<input
						type="text"
						name="userName"
						value={userName}
						onChange={this.handleChange}
					/>
					<br />
					<input
						type="password"
						name="passWord"
						value={passWord}
						onChange={this.handleChange}
					/>
					<p />
					<input type="submit" value="Login" />
				</form>
			</div>
		);
	}

	handleChange(event) {
		const { name, value } = event.target;
		console.log(name, value);

		this.setState({
			[name]: value,
		});
	}
}

export default TestForm;
