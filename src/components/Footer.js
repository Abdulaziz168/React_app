import React from "react";
import 'C:/Users/1/Desktop/App/React Folder/second/my_app/src/style.css'


const Footer = () => {
    return (
        <React.StrictMode>
            <hr/>
            <div className="footer-dark ">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Web design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Hosting</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Abdulaziz React</h3>
                            <p>Today at Connect 2021, CEO Mark Zuckerberg introduced Meta, which brings together our apps and technologies under one new company brand. Meta’s focus will be to bring the metaverse to life and help people connect, find communities and grow businesses.</p>
                        </div>
                        <div className="col item social">
                            <a href="https://web.telegram.org/k/"><i className="bi bi-telegram"/></a>
                            <a href="https://www.snapchat.com/ru-RU"><i className="bi bi-snapchat"/></a>
                            <a href="https://www.instagram.com/"><i className="bi bi-instagram"/></a>
                            <a href="#"><i className="bi bi-meta"/></a>
                        </div>
                    </div>
                    <p className="copyright">Company Name © 2018</p>
                </div>
            </div>
        </React.StrictMode>)

};

export default Footer;