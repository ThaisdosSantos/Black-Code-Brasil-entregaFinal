import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navigateTo } from "../../util/navigateTo";
import './style.css';
import UserLogin from "../../model/login";
import { loginService } from "../../services/login";
import { UserContext } from "../../context/userProvider";

function Login() {
    const navigate = useNavigate();

    const { user, setUser, setUserAtStorage, setIsLogged } = useContext(UserContext);

    const [userLogin, setUserLogin] = useState(new UserLogin());

    const handleChange = e =>{
        const { value } = e.target;
        setUserLogin({ ...userLogin, [e.target.name]: value });
    }

    const login = (e)=>{
        e.preventDefault();

        Promise.resolve(loginService(userLogin, setUser));
        setIsLogged(true);
    }

    useEffect(()=>{
        setUserAtStorage(user);
    });
    
    return(
        <section className="d-flex justify-content-center align-items-center altura">
            <main className="form-signin col-11 col-sm-8 col-md-6 col-lg-4 cor-form-login">
                <form className="text-white">
                    <h1 className="text-center my-5">Black Code Brasil</h1>
                    <h2 className="h3 mb-4 fw-normal">Login:</h2>

                    <div class="form-floating mb-2">
                        <label htmlFor="floatingInput">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            onChange={ (e)=> handleChange(e) }
                        />
                    </div>
                    <div className="form-floating mb-2">
                        <label htmlFor="floatingPassword">Senha</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={ (e)=> handleChange(e) }
                        />
                    </div>

                    <div className="checkbox mb-3">
                        <label className="mt-3">
                            <input type="checkbox" value="remember-me"/> Lembrar-me
                        </label>
                    </div>

                    <button
                        className="w-100 btn btn-lg"
                        // type="submit"
                        onClick={ (e)=> login(e) }
                    >
                        Login
                    </button>
                    <div className="d-flex justify-content-between mt-4">
                        <a href="" onClick={ ()=> navigateTo(navigate, '/cadastroLogin') } className="text-white ml-1">Cadastrar</a>
                        <a href="" onClick={ ()=> navigateTo(navigate, '/') } class="text-white mr-2">voltar</a>
                    </div>
                    <p class="mt-4 mb-3 text-muted text-center">© 2022</p>
                </form>
            </main>
        </section>
    );
}

export default Login;