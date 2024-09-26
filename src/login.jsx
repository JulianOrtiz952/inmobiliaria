import React, { useState } from "react";
import './Login.css'; // Importamos el archivo de CSS

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Email:", email, "Password:", password);
        // Lógica de autenticación aquí
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="login-btn">Send</button>
                </form>
                <p className="signup-link">Or not have account?</p>
            </div>
        </div>
    );
};

export default Login;
