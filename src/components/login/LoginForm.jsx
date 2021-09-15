import React from "react";
import "./LoginForm.scss";

function LoginForm({ register }) {
	return (
		<div className="form-container">
			<form className="form">
				<h2 className="form__title">Login To Your Account</h2>
				<div>
					<div className="form__group">
						<input
							className="form__input"
							type="email"
							name="email"
							placeholder="Email"
							required
						/>
						<label className="form__label">Email</label>
					</div>

					<div className="form__group">
						<input
							className="form__input"
							type="password"
							name="password"
							placeholder="Password"
							minLength={6}
							required
						/>
						<label className="form__label">Password</label>
					</div>
					<div className="form__group">
						<input className="form__button" type="submit" value="Login" />
						<p>
							Don't have an account.
							<a onClick={register} className="form__link" href="#!">
								Register here
							</a>
						</p>
					</div>
				</div>
			</form>
		</div>
	);
}

export default LoginForm;
