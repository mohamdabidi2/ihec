import "./auth.css"
import 'animate.css';
const Login = () => {
    return (
        <>
            <section className="login-page ">
                <div className="login-page-formulaire animate__animated animate__fadeInDown">
                    <img src="./resource/logo-no-background.png" className="login-page-logo"/>
                    <form action="" method="post">
                        <input placeholder="Username or Email" type="text" className="login-champs" />
                        <input placeholder="Password" type="password" className="login-champs" />
                        <div className="part-rem">
                            <div className="part-rem1">
                                <input type="checkbox" />
                                <p className="rem-me">REMEMBER ME</p>
                            </div>
                            <p className="forgot-Password">FORGOT PASSWORD</p>
                        </div>
                        <button type="submit" className="btn-login">Log In</button>
                        <p className="text-to-signup">Don't have an account yet ? <a href="">Sign Up</a></p>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Login;