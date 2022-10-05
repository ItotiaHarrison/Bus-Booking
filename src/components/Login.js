import React from 'react'

function Login() {
    return (
        <div>

            <form>
                <div>
                    <input type="text" name="username" placeholder="Username" />
                </div>

                <div>
                    <input type="password" name="password" placeholder="Password" />
                </div>
                <input type="submit" value="LOG IN" />
            </form>

            <div>
                <a href="https://" target="_blank">Forgot your password</a>
            </div>
            <div>
                <a href="https://" target="_blank">New to Swift? Create your account</a>
            </div>
        </div>
    )
}

export default Login;