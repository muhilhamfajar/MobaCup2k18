import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../../assets/css/owl.carousel.min.css'
import '../../assets/css/style.css'

class Daftar extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar team">
                    <a className="navbar-brand" href="#"><img src={require("../../assets/img/ts-2.png")} width="15%" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home
                        <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/team">Team</Link>
                            </li>
                            <li className="nav-item activeNavLanding">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="bg-grey">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 centered">
                                <div class="box-daftar">
                                    <h1>MASUK</h1>
                                    <p>Isi data kamu di bawah dengan lengkap dan mulai belajar bahasa pemrograman standar industri serta penyaluran kerja langsung bersama Arkademy.
                                </p>
                                    <div class="form-group">
                                        <form action="">
                                            <div class="input-group">
                                                <label htmlFor="email" class="label-tag">Email
                                    <span class="required">*</span>
                                                </label>
                                                <input required type="text" id="email" />
                                            </div>
                                            <div class="input-group">
                                                <label htmlFor="password" class="label-tag">Password
                                    <span class="required">*</span>
                                                </label>
                                                <input required type="text" id="password" />
                                            </div>
                                            <button class="button btn-oren btn-masuk">Masuk</button>
                                        </form>
                                    </div>
                                    <div class="bottom">
                                        <Link to='/daftar' class="register hidden-xs">Tidak punya akun?</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Daftar;