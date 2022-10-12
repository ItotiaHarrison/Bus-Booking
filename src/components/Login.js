import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

function Login({ setIsLoggedIn }, props ) {
    const history = useHistory();

    const [errorMessages, setErrorMessages] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [user, setUser] = useState({
        username: "",
        password: "",
        token: ""
    });

    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };


    function loginUser(event) {
        axios.post("http://localhost:3000/user/login", user).then((response) => {
            if (response.data.message === "Auth Successful!") {
                console.log(response.data);
                props.getUser(
                    response.data.user._id,
                    response.data.user.username,
                    response.data.token
                );
                props.changeAuthStatus();
                history.push("/");
            } else {
                console.log(response.data);
            }
        });

        setUser({
            email: "",
            password: "",
            token: ""
        });

        event.preventDefault();

    }



    // function handleSubmit(event) {
    //     event.preventDefault();

    //     setIsLoggedIn(true);
    //     history.push("/");

    //     var { uname, pass } = document.forms[0];
    //     const userData = database.find((user) => user.username === uname.value);

    //     if (userData) {
    //         if (userData.password !== pass.value) {
    //             setErrorMessages({ name: "pass", message: errors.pass });
    //         } else {
    //             setIsSubmitted(true);
    //         }
    //     } else {
    //         setErrorMessages({ name: "uname", message: errors.uname });
    //     }
    // };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );


    // Handle the form submission

    function handleChange(event) {
        const { name, value } = event.target;
        setUser((preValues) => {
            return {
                ...preValues, [name]: value
            };
        });
    }


    const renderForm = (
        <div className="form">

            <form >
                <div className="input-container">
                    <label>Username </label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="uname"
                        value={user.uname}
                        placeholder="Enter Username"
                        required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input
                        onChange={handleChange}
                        type="password"
                        name="pass"
                        value={user.pass}
                        placeholder="Enter Password"
                        minLength="6"
                        required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <button
                        onClick={loginUser}
                        type="submit"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );


    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>

            <Link to="/signup">
                <p>Don't have an account? Click here to create!</p>
            </Link>
        </div>
    )
}

export default Login;