import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navigateTo } from "../../util/navigateTo";
import './style.css';

import { registerService } from '../../services/register';
import User from "../../model/user";

function CadastroLogin() {
    const navigate = useNavigate();

    

    const [userRegister, setUserRegister] = useState(new User);

    const handleChange = e =>{
        const { value } = e.target;
        setUserRegister({ ...userRegister, [e.target.name]: value });
    }

    const register = (e)=>{
        e.preventDefault();

        Promise.resolve(registerService(userRegister));
        console.log('rgister funcionando');
        console.log(userRegister);
    }

    return(
        <section className="d-flex justify-content-center align-items-center altura">
            <main className="form-signin col-11 col-sm-8 col-md-6 col-lg-4 cor-form-cadastro">
                <form className="text-white">
                    <h1 className="text-center my-5">Black Code Brasil</h1>
                    <h2 className="h3 mb-4 fw-normal">Cadastrar:</h2>

                    <div className="form-floating mb-2">
                        <label htmlFor="floatingInput">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="floatingName" 
                            placeholder="name"
                            onChange={ (e)=> handleChange(e) }
                        />
                    </div>

                    <div className="form-floating mb-2">
                        <label htmlFor="floatingInput">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="floatingInput"
                            placeholder="name@example.com"
                            onChange={ (e)=> handleChange(e) }
                        />
                    </div>
                    <div className="form-floating mb-2">
                        <label htmlFor="floatingPassword">Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
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
                        onClick={ (e)=> register(e) }
                    >
                        Login
                    </button>
                    <div className="d-flex justify-content-between mt-4">
                        <a onClick={ ()=> navigateTo(navigate, '/login')} className="text-white ml-1">Login</a>
                        <a onClick={ ()=> navigateTo(navigate, '/')} className="text-white mr-2">voltar</a>
                    </div>
                    <p className="mt-4 mb-3 text-muted text-center">© 2022</p>
                </form>
            </main>
        </section>
    );
}

export default CadastroLogin;