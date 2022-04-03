import React from "react";
import './style.css';
import Header from '../../components/Header';
import FooterNovo from '../../components/FooterNovo';
import CardCategorias from "./components/CardCategorias";
import ContainerCategorias from "./components/ContainerCategorias";
import { categorias } from '../../json/categorias';

function Talentos() {
    return(
        <div>
            <Header/>
            <ContainerCategorias>
                {
                    categorias.map(item =>
                        <CardCategorias 
                            key = {item.Id} 
                            id = {item.Id}
                            nome = {item.Name}
                        />
                    )
                }
            </ContainerCategorias>
            <FooterNovo/>
        </div>
    );
}

export default Talentos;

/*
const CardCategorias = ({nome, id}) => { // A constante CardCategorias recebe a função pelo =>
    return(
        <div class="form-group areas-card d-flex justify-content-center">
            <input name="area" type="radio" value={nome} id={id}/>{nome}
        </div>
    );
}
*/
/*
const ContainerCategorias = ({children}) =>{
    return(
        <div class="container-fluid">
            <div id="areas" class="pb-5">
                <section class="row d-flex justify-content-center">
                    <div class="col-lg-12 d-flex justify-content-center my-2">
                        <h1 class="titulo-principal cor-secundaria-texto my-5">
                            <strong>TALENTOS | CATEGORIAS</strong>
                        </h1>
                    </div>
                </section>

                <div class="container">
                    <form id="areas_talentos" asp-controller="Talentos" asp-action="ShowTalents">
                        <label for="area"></label>
                        <div class="card-container">
                            {

                            children

                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
*/
