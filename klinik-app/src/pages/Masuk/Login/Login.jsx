// Login.jsx
import React from 'react';
import './Login.css';
import Dokter from '../../../assets/dokter-hero.png';

const Login = () => {
    return (
        <div className="login-container">
            <div className="form-container">
                <h2>Selamat Datang!</h2>
                <p>Silahkan masuk terlebih dahulu!</p>
                <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="password" />
                </div>
                <button type="submit" className="login-btn">Masuk</button>
                </form>
                <p className="register-link">Belum punya akun? Silahkan daftar di sini</p>
            </div>
        </div>
    );
};

export default Login;