import "./auth.css"
import 'animate.css';
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <section className="login-page ">
                <div className="login-page-formulaire animate__animated animate__fadeInDown">
                <img src="./resource/logo-no-background.png" className="login-page-logo"/>

                    <form method="post">
                        <input placeholder="Full Name" type="text" className="login-champs" />
                        <input placeholder="Username" type="text" className="login-champs" />
                        <input placeholder="Email" type="email" className="login-champs" />
                        <input placeholder="Phone" type="tel" className="login-champs" />
                        <input placeholder="Password" type="password" className="login-champs" />
                      <select className="login-champs niveau" name="" id="">
                        <option value="" className="niveau-option">2éme Eco</option>
                        <option value="" className="niveau-option">3éme Eco</option>
                        <option value="" className="niveau-option">Bac Eco</option>
                      </select>
            <Link to="/" >
             <button type="submit" className="btn-login">Register</button>
            </Link>
                       
                        <p className="text-to-signup">Already have an account  <a href="">Log In</a></p>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Register;