import React from "react";
import '../styleHome.css';
import { useNavigate } from 'react-router-dom';
import { navigateTo } from "../../../../util/navigateTo";

function Inicio() {
    const navigate = useNavigate();

    return(
        <section>
            <section>
                <div className="row">
                    <div className="col-12 linha-1"></div>
                </div>
                <div className="row">
                    <div className="col-12 linha-2">
                        <div className="container my-4 texto-principal">
                            1 &nbsp; &nbsp;//Olá Mundo!
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 linha-3">
                        <div className="container my-4 texto-principal">
                            2 &nbsp;<span className="cor-secundaria-texto text-justify">Somos a BCB</span> <span className="cor-terciaria-mais-clara">=</span> &lt;<span className="cor-terciaria-texto">Black Code Brasil</span>&gt;;
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 linha-4">
                        <div className="container my-2 texto-principal">
                            3 &nbsp;Amamos <span className="cor-secundaria-texto text-justify">inclur</span> pessoas negras no mundo da <span className="cor-terciaria-mais-clara">Tecnologia</span> e <span className="cor-terciaria-mais-clara">Programação</span> = &lt;<span className="cor-terciaria-texto">Inclusão</span>&gt;;
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 linha-5">
                        <div className="container my-4 texto-principal">
                            4 &nbsp;<span className="cor-secundaria-texto text-justify">Temos os melhores talentos</span> para sua empresa crescer com mais <span className="cor-terciaria">DIVERSIDADE</span> e <span className="cor-terciaria-texto">INCLUSÃO</span> no seu time (!);
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 linha-6"></div>
                </div>
                <div className="row">
                    <div className="col-12 linha-7"></div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="col-11 col-sm-8 col-md-7 col-lg-6 linha-8 d-flex justify-content-around">
                            <span className="cor-terciaria titulo-terciario my-4 mx-4">Conheça o nosso banco de talentos</span>
                            <button className="button titulo-terciario" onClick={ ()=> navigateTo(navigate, "/talentos") }><a className = "cor-secundaria text-decoration-none" asp-area="" asp-controller="Categories" asp-action="Categories">Vamos Lá</a></button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 linha-9"></div>
                </div>
            </section>
        </section>
    );
}

export default Inicio;