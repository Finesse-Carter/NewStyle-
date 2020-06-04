import React from 'react'

 const Login = () => {
    return (
<>
<div>
            <div className="limiter">
        <div className="container-login100">
            <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">

                <span className="login100-form-title p-b-32">
                    Account Login
                </span>

                <form action="/login" className="login100-form validate-form flex-sb flex-w" method="post">
                    <div className="form-group">
                        <span className="txt1 p-b-11">

                            User Email
                        </span>
                        <input type="text" className="form-control input100" name="email"/>
                    </div>
                    <div className="form-group">
                        <span className="txt1 p-b-11">

                            <label>User Password</label>
                        </span>
                        <input type="password" className="form-control input100" name="password"/>
                    </div>

                    <button type="submit" className="btn btn-warning btn-lg login100-form-btn">
                    Login
                    </button>
                </form>
                <p>Need an account? <a href="/signup">Signup</a></p>
                <p>Or go <a href="/">home</a>.</p>

            </div>
            </div>
    </div>
        </div>
        </>
    )
}
export default Login