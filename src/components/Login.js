import React from 'react'

function Login() {
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="username" placeholder="Username" />
                </div>

                <div>
                    <input type="password" name="password" placeholder="Password" />
                </div>
                <button>LOG IN</button>
            </form>

            <div>
                <a href="https://" >Forgot your password</a>
            </div>
            <div>
                <a href="https://" >New to Swift? Create your account</a>
            </div>
        </div>
    )
}

export default Login;