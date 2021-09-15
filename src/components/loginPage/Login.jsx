import React from "react";
import "./Login.css";
import bgImage from "../../assests/pic.png";

function Login() {
	return (
		<div className="row login">
			<div className="col-md-5 login-form">
				<h1>Take control of how you revise for your exam </h1>
				<form class="row g-3">
					<div class="col-12">
						<label for="staticEmail2" class="visually-hidden">
							Email
						</label>
						<input
							type="email"
							class="form-control"
							id="staticEmail2"
							value="email@example.com"
							placeholder="Email"
						/>
					</div>
					<div class="col-12">
						<label for="inputPassword2" class="visually-hidden">
							Password
						</label>
						<input
							type="password"
							class="form-control"
							id="inputPassword2"
							placeholder="Password"
						/>
					</div>
					<div class="col-12 button-section">
						<a href="#!" className="forgot-password-link">
							Forgot password?
						</a>
						<button type="submit" class="btn btn-primary mb-3 login-btn">
							Login
						</button>
					</div>
					<hr />
					<div className="col-12 redirect-btn">
						<button className="btn btn-primary mb-3 new-user-btn">
							I am a new user
						</button>
					</div>
				</form>
			</div>
			<div className="col-md-7  login-bg-image">
				<img src={bgImage} alt="background" />
			</div>
		</div>
	);
}

export default Login;
