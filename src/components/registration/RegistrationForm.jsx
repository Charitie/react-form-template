import React from "react";
import "./RegistrationForm.scss";

function RegistrationForm({ login }) {
	return (
		<div className="form-container">
			<form className="form">
				<h2 className="form__title">Create Your Account</h2>
				<div>
					<div className="form__group">
						<input
							className="form__input"
							type="text"
							name="fullname"
							placeholder="Full Name"
							// value='hi'
							required
						/>
						<label className="form__label">Full Name</label>
					</div>
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
							type="text"
							pattern="^\+?([0-9]{3})\)?([0-9]{9})$"
							name="phone"
							placeholder="+254*********"
							required
						/>
						<label className="form__label">Phone Number</label>
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
						<input className="form__button" type="submit" value="Sign Up" />
						<p>
							Already have an account.
							<a onClick={() => login()} className="form__link" href="#!">
								Login here
							</a>
						</p>
					</div>
				</div>
			</form>
		</div>
	);
}

export default RegistrationForm;
