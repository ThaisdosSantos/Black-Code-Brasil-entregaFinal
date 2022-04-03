import React, { useContext } from "react";
import '../header_footer.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/userProvider";
import { useState } from "react/cjs/react.development";

function Header() {
    const navigateTo = useNavigate();

    const { user, setUser, removeUserFromStorage, isLogged, setIsLogged } = useContext(UserContext);

    const logout = ()=>{
        removeUserFromStorage();
        navigateTo("/");
        setUser({});
        setIsLogged(false);
        console.log('logging out');
    }

    return(
        <header className="cor-fundo-header-footer">
            <nav className="navbar navbar-expand-md navbar-toggleable-md navbar-dark box-shadow cor-fundo-header-footer">
                <div className="container-fluid link-header-footer">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-lg-flex justify-content-md-between justify-content-lg-between align-items-center">
                        <a className="navbar-brand mt-3 mt-sm-3 mt-md-0 mt-lg-0 mb-4 mb-sm-4 mb-md-0 mb-lg-0 ml-0 ml-sm-0 ml-md-5 ml-lg-5" asp-area="" asp-controller="Home" asp-action="Index" onClick={ ()=> navigateTo("/") }><img className="logo-header" src="./img/logo/logo-completa.png" alt=""/></a>
                        <ul className="navbar-nav flex-grow-1 ">
                            <li className="nav-item texto-header">
                                <a className="nav-link" onClick={ ()=> navigateTo("/") }><span className="cor-secundaria-texto hover-link ml-3 ml-sm-3 ml-md-0 ml-lg-0">Home</span></a>
                            </li>
                            <li>
                                <div className="dropdown hover-link">
                                    <button id="botao-menu" type="button" className="btn btn-link cor-secundaria-texto texto-header hover-link dropdown-toggle text-decoration-none" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Conteúdos
                                    </button>
                                    <div className="dropdown-menu cor-fundo-dropdown" aria-labelledby="dropdownMenuButton">
                                        <a className="nav-link hover-link" onClick={ ()=> navigateTo("/materias") }>Matérias</a>
                                        <a className="nav-link hover-link" onClick={ ()=> navigateTo("/podcasts") }>Podcasts</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item texto-header hover-link">
                                <a className="nav-link" onClick={ ()=> navigateTo("/contratar") }><span className="cor-secundaria-texto hover-link ml-2 ml-sm-2 ml-md-0 ml-lg-0 pl-1 pl-sm-1 pl-md-0 pl-lg-0">Contratar</span></a>
                            </li>
                            <li className="nav-item texto-header hover-link">
                                <a className="nav-link" onClick={ ()=> navigateTo("/talentos") }><span className="cor-secundaria-texto hover-link ml-2 ml-sm-2 ml-md-0 ml-lg-0 pl-1 pl-sm-1 pl-md-0 pl-lg-0">Talentos</span></a>
                            </li>
                        </ul>
                        <li>
                            <div className="dropdown hover-link mr-5 pr-4 mb-3">
                                <button id="botao-menu" type="button" className="btn btn-link cor-secundaria-texto texto-header hover-link text-decoration-none" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className="logo-user" src="./img/cadastrar/user.png" alt=""/>
                                </button>
                                <div className="dropdown-menu cor-fundo-dropdown" aria-labelledby="dropdownMenuButton">
                                    { isLogged ? 
                                        //false
                                    <> 
                                        <a className="nav-link hover-link" onClick={ ()=> navigateTo("/cadastrar")}>Perfil</a>
                                        <a
                                            className="nav-link hover-link"
                                            onClick={ logout }
                                        >
                                            Sair
                                        </a>
                                    </>
                                        
                                        :
                                        // true
                                        <a className="nav-link hover-link" onClick={ ()=> navigateTo("/login")}>Acessar</a>
                                    }
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;