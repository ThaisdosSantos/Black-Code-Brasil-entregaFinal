import React from "react";
import './style.css';
import Header from '../../components/Header';
import FooterNovo from '../../components/FooterNovo';
import CardContratar from "./components/CardContratar";
import ContainerContratar from "./components/ContainerContratar";
import {contratar} from '../../json/contratar'; 
import '../Home/components/styleHome.css';

function Contratar() {
    return(
        <div>
            <Header/>
            <ContainerContratar>
                {
                    contratar.map(item =>
                        <CardContratar 
                            key = {item.Titulo}
                            imagem = {item.Imagem} 
                            titulo = {item.Titulo} 
                            texto = {item.Texto}
                        />
                    )
                }
            </ContainerContratar>
            <FooterNovo/>
        </div>
    );
}

export default Contratar;

/*
const CardContratar = ({imagem, titulo, texto}) => {
    return (
        <div class="card-contratar row cor-secundaria d-flex justify-content-center my-5">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
                <img id="img-hexagono" class="img-contratar align-self-center" src={imagem} alt="Card image cap"/>
            </div>
            <div class="card-body col-12 col-sm-12 col-md-6 col-lg-6">
                <h5 class="texto-principal text-left mt-5 mx-4 mb-3">{titulo}</h5>
                <p class="texto-terciario-contratar text-justify mx-4">{texto}</p>
            </div>
        </div>
    );
}
*/
/*
const ContainerContratar = ({children}) => {
    return (
        <div class="container-fluid">
            <div id="contratar">
                <div class="row d-flex justify-content-center contratar">
                    <div class="col-sm-9 col-md-8 col-lg-7 text-center my-5">
                        <h2 class="titulo-principal cor-terciaria">
                            <strong>// PORQUE CONTRATAR PESSOAS NEGRAS PARA SUA EMPRESA?</strong>
                        </h2>
                    </div>
                </div>
                <div class="container">
                    {
                        children
                    }   
                </div>
                <div class="row">
                    <div class="col-12 d-flex justify-content-center footer-contratar py-4">
                        <a class="btn btn-light titulo-principal my-5 px-5 py-3" asp-area="" asp-controller="Categories" asp-action="Categories">Quero contratar</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
*/
