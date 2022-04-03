import React from "react";
import '../styleHome.css';

function Conteudos() {
    return(
        <section className="row contratar">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="titulo-principal text-center cor-terciaria-mais-clara mt-5">
                            <strong>//CONTEÚDOS</strong>
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11 col-sm-10 col-md-10 col-lg-9 text-justify texto-conteudo">
                        <p className="titulo-terciario">
                            <span className="cor-terciaria mr-1">&lt;</span>Promovemos debates permanentes sobre a importância das empresas contratarem pessoas negras para suas equipes e implementarem
                            a cultura da diversidade em todos os setores de suas organizações. Em nossas publicações divulgamos entrevistas com especialias,
                            pesquisas e informações sobre diversidade nas empresas<span className="cor-terciaria">/&gt;</span>.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1 className="titulo-principal">//Matérias</h1>
                    </div>
                </div>
                <div className="row g-3 mt-4">
                    <div className="col-sm-6 col-md-4 col-lg-4 my-3">
                        <h3 className="titulo-secundario cor-terciaria-mais-clara">CATEGORIA</h3>
                        <p className="texto-secundario mt-4">Brasil perde R$ 1 Trilhão por remuneração desigual a Negros e Pardos</p>
                        <div className="card text-center">
                            <img className="card-img-top largura-img-conteudo" src="./img/home/fundo-filtro(pagina-2-cortada).png" alt="Card image"/>
                            <div className="card-body text-center">
                                <a href="#" className="btn btn-link cor-terciaria-mais-clara titulo-terciario">Saiba Mais</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 my-3">
                        <h3 className="titulo-secundario cor-terciaria-mais-clara">CATEGORIA</h3>
                        <p className="texto-secundario mt-4">Brasil perde R$ 1 Trilhão por remuneração desigual a Negros e Pardos</p>
                        <div className="card text-center">
                            <img className="card-img-top largura-img-conteudo" src="./img/home/fundo-filtro(pagina-2-cortada).png" alt="Card image"/>
                            <div className="card-body">
                                <a href="#" className="btn btn-link cor-terciaria-mais-clara titulo-terciario">Saiba Mais</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 my-3">
                        <h3 className="titulo-secundario cor-terciaria-mais-clara">CATEGORIA</h3>
                        <p className="texto-secundario mt-4">Brasil perde R$ 1 Trilhão por remuneração desigual a Negros e Pardos</p>
                        <div className="card text-center">
                            <img className="card-img-top largura-img-conteudo" src="./img/home/fundo-filtro(pagina-2-cortada).png" alt="Card image"/>
                            <div className="card-body text-center">
                                <a href="#" className="btn btn-link cor-terciaria-mais-clara titulo-terciario">Saiba Mais</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button className="button-materias texto-secundario text-decoration-none"><a className = "cor-secundaria">VER TODAS AS MATÉRIAS</a></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1 className="titulo-principal">//Podcasts</h1>
                    </div>
                </div>
                <div className="row g-3 mt-4">
                    <div className="col-sm-6 col-md-4 col-lg-4 my-3">
                        <h3 className="titulo-secundario cor-terciaria-mais-clara">CATEGORIA</h3>
                        <p className="texto-secundario mt-4">Brasil perde R$ 1 Trilhão por remuneração desigual a Negros e Pardos</p>
                        <div className="card text-center">
                            <img className="card-img-top largura-img-conteudo" src="./img/home/fundo-filtro(pagina-2-cortada).png" alt="Card image"/>
                            <div className="card-body text-center">
                                <a href="#" className="btn btn-link cor-terciaria-mais-clara titulo-terciario">Saiba Mais</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 my-3">
                        <h3 className="titulo-secundario cor-terciaria-mais-clara">CATEGORIA</h3>
                        <p className="texto-secundario mt-4">Brasil perde R$ 1 Trilhão por remuneração desigual a Negros e Pardos</p>
                        <div className="card text-center">
                            <img className="card-img-top largura-img-conteudo" src="./img/home/fundo-filtro(pagina-2-cortada).png" alt="Card image"/>
                            <div className="card-body text-center">
                                <a href="#" className="btn btn-link cor-terciaria-mais-clara titulo-terciario">Saiba Mais</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 my-3">
                        <h3 className="titulo-secundario cor-terciaria-mais-clara">CATEGORIA</h3>
                        <p className="texto-secundario mt-4">Brasil perde R$ 1 Trilhão por remuneração desigual a Negros e Pardos</p>
                        <div className="card text-center">
                            <img className="card-img-top largura-img-conteudo" src="./img/home/fundo-filtro(pagina-2-cortada).png" alt="Card image"/>
                            <div className="card-body text-center">
                                <a href="#" className="btn btn-link cor-terciaria-mais-clara titulo-terciario">Saiba Mais</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button className="button-podcasts texto-secundario"><a className = "cor-secundaria text-decoration-none">OUVIR TODOS OS PODCASTS</a></button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Conteudos;