import React from 'react';
import "./login.css"
import {FaUserAlt} from 'react-icons/fa';
import {AiFillLock} from 'react-icons/ai';

const login = () => {

    return (
        <div className="parent">
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="/login" method="POST" className="sign-in-form">
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <div className="icon"><FaUserAlt/></div>
                                <input type="text" name="log_email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                            <div className="icon"><AiFillLock/></div>
                                <input
                                    type="password"
                                    name="log_password"
                                    placeholder="Password"
                                />
                            </div>
                            <input type="submit" value="Login" className="btn solid" />
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Join the Technology Unifying,The Largest Community in
                                India-Farmers
                            </p>
                            <button className="btn transparent" id="sign-up-btn">Sign up</button>
                        </div>
                        <img src="img/log.svg" className="image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default login;