import React, { useState } from "react";
import RegistrationForm from "../registration/RegistrationForm";
import photo from "../../assests/side-photo.jpg";
import "./Form.scss";
import LoginForm from "../login/LoginForm";

function Form() {
	const [slide, setSlide] = useState(false);
	let one = "";
	let two = "";
	let register = "register-hidden";
	let login = "login-shown";
	let action = "reg";
	if (slide) {
		one = "left__left--one";
		two = "right__left--two";
		register = "register-shown";
		login = "login-hidden";
		action = "login";
	}
	const toggleSlide = () => {
		setSlide(!slide);
	};

	const toggleRegisterInputForm = () => {
		setSlide(true);
	};
	const toggleLoginInputForm = () => {
		setSlide(false);
	};
	console.log(slide);
	return (
		<>
			<div className="right">
				<div className={`right__left ${two}`}>
					<div className="image-container">
						<img
							src={photo}
							alt="side robot"
							className="image-container__image"
						/>
					</div>
				</div>
				<div className="right__right-two"></div>
			</div>
			<div className="left">
				<div className={`left__left ${one}`}>
					<div className={`${login}`}>
						<LoginForm register={toggleSlide} />
					</div>
					<div className={`${register}`}>
						<RegistrationForm login={toggleSlide} />
					</div>
				</div>
				<div className="left__right-one"></div>
			</div>
		
			<button className="toggle-btn" onClick={toggleSlide}>
				{action}
			</button>
		</>
	);
}

export default Form;
