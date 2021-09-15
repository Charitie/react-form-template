import { useState } from "react";
import "./App.scss";
import Form from "./components/formContainer/Form";
import LoginForm from "./components/login/LoginForm";
import Login from "./components/loginPage/Login";
import RegistrationForm from "./components/registration/RegistrationForm";

function App() {
	return (
		<div className="main-page">
			{/* <Form /> */}
			<Login />
		</div>
	);
}

export default App;
