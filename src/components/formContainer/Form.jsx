import React, { useState } from "react";
import LoginForm from "../login/LoginForm";
import RegistrationForm from "../registration/RegistrationForm";
import "./Form.scss";

function Form() {
	const [slide, setSlide] = useState(false);
	let one = "";
	let two = "";
	let register = "register-hidden";
	let login = "login-shown";
	if (slide) {
		one = "left__left--one";
		two = "right__left--two";
		register = "register-shown";
		login = "login-hidden";
	}
	const toggleSlide = () => {
		setSlide(!slide);
	};

	return (
		<>
			<div className="left">
				<div className={`left__left ${one}`}>
					<div className="image-container"></div>
				</div>
				<div className="left__right-one"></div>
			</div>
			<div className="right">
				<div className={`right__left ${two}`}>
					<div className={`${login}`}>
						<LoginForm register={toggleSlide} />
					</div>
					<div className={`${register}`}>
						<RegistrationForm login={toggleSlide} />
					</div>
				</div>
				<div className="right__right-two"></div>
			</div>
		</>
	);
}

export default Form;
