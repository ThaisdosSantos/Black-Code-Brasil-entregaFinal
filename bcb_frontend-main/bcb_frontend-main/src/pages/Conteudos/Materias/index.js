import React from "react";
import '../style.css';
//import Header from "../../../components/Header";
//import Footer from "../../../components/Footer";
import Loader from "../../../components/Loader";

import {lazy, Suspense} from 'react';
const Header = lazy(() => import('../../../components/Header'));
const FooterNovo = lazy(() => import('../../../components/FooterNovo'));


function Materias() {
    return(
        <div>
            <Suspense fallback={<Loader/>}>
                <Header/>
                <div className="container-fluid">
                    <section className="row d-flex justify-content-center">
                        <div className="col-lg-12 d-flex justify-content-center my-2">
                            <h1 className="titulo-materias cor-terciaria-mais-clara my-5">
                                <strong>//MATÉRIAS</strong>
                            </h1>
                        </div>
                    </section>

                    <section className="row contratar">
                        <div className=" container mb-5">
                            <div className="row my-5">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <img className="img-materias-principais mt-5 my-sm-5 my-md-0 my-lg-0" src="./img/conteudo/mat/materia-3.jpeg" alt="testando"/>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <h3 className="titulo-materia-principal text-justify pt-3 pt-sm-3 pt-md-0 pt-lg-0">Porque as empresas devem invesgtir em diversidade</h3>
                                    <p className="texto-materia-principal text-justify">Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                        It has roots in a piece of classNameical Latin literature from 45 BC, 
                                        making it over 2000 years old. Richard McClintock, a Latin professor 
                                        at Hampden-Sydney College in Virginia, looked.</p>
                                    <button className="btn btn-outline-dark btn-sm btn-block texto-materia-principal">Leia Mais</button>
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col-sm-12 col-md-6 col-lg-6 mx-auto">
                                    <img className="img-materias-principais mt-5 my-sm-5 my-md-0 my-lg-0" src="./img/conteudo/mat/materia-3.jpeg" alt=""/>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <h3 className="titulo-materia-principal text-justify pt-3 pt-sm-3 pt-md-0 pt-lg-0">Porque as empresas devem invesgtir em diversidade</h3>
                                    <p className="texto-materia-principal text-justify ">Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                        It has roots in a piece of classNameical Latin literature from 45 BC, 
                                        making it over 2000 years old. Richard McClintock, a Latin professor 
                                        at Hampden-Sydney College in Virginia, looked.</p>
                                    <button className="btn btn-outline-dark btn-sm btn-block texto-materia-principal">Leia Mais</button>
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col-sm-12 col-md-6 col-lg-6 mx-auto">
                                    <img className="img-materias-principais mt-5 my-sm-5 my-md-0 my-lg-0" src="./img/conteudo/mat/materia-3.jpeg"  alt=""/>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <h3 className="titulo-materia-principal text-justify pt-3 pt-sm-3 pt-md-0 pt-lg-0">Porque as empresas devem invesgtir em diversidade</h3>
                                    <p className="texto-materia-principal text-justify">Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                        It has roots in a piece of classNameical Latin literature from 45 BC, 
                                        making it over 2000 years old. Richard McClintock, a Latin professor 
                                        at Hampden-Sydney College in Virginia, looked.</p>
                                    <button className="btn btn-outline-dark btn-sm btn-block texto-materia-principal">Leia Mais</button>
                                </div>
                            </div>
                            
                            <p className="borda cor-secundaria">.</p>
                            
                            <div className="row">
                                <div className="col-12 mt-5">
                                    <h1 className="titulo-secundario">LEIA TAMBÉM</h1>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 my-3">
                                    <h3 className="titulo-materia-secundaria  cor-terciaria-mais-clara">Mercado de Trabalho</h3>
                                    <h4 className="subtitulo-materia-secundaria text-justify">Empresas de tecnologia que investem em diversidade em suas equipes lucram 35% a mais por ano</h4>
                                    <p className="texto-materia-principal text-justify mt-lg-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                        quis nostrud exercitation ".</p>
                                    <img className="img-materias-secundarias mb-3" src="./img/conteudo/mat/materia-4.jpeg"  alt=""/>
                                    <button className="btn btn-outline-dark btn-sm btn-block texto-materia-principal">Leia Mais</button>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 my-3">
                                    <h3 className="titulo-materia-secundaria cor-terciaria-mais-clara">Dicas</h3>
                                    <h4 className="subtitulo-materia-secundaria text-justify">BCB lança dicas de como as empresas podem investir em inclusão sócio digital</h4>
                                    <p className="texto-materia-principal text-justify mt-lg-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                        quis nostrud exercitation ".</p>
                                    <img className="img-materias-secundarias mb-3" src="./img/conteudo/mat/fica-dica.png"  alt=""/>
                                    <button className="btn btn-outline-dark btn-sm btn-block texto-materia-principal">Leia Mais</button>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 my-3">
                                    <h3 className="titulo-materia-secundaria cor-terciaria-mais-clara">Diversidade</h3>
                                    <h4 className="subtitulo-materia-secundaria text-justify pb-lg-4">Como fomentar a diversidade em empresas de tecnologia?</h4>
                                    <p className="texto-materia-principal text-justify mt-lg-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                        quis nostrud exercitation ".</p>
                                    <img className="img-materias-secundarias mb-3" src="./img/conteudo/mat/materia-5.jpeg" alt=""/>
                                    <button className="btn btn-outline-dark btn-sm btn-block texto-materia-principal">Leia Mais</button>
                                </div>
                            </div> 
                        </div>
                    </section>
                </div>
                <FooterNovo/>
            </Suspense>
        </div>
    );
}

export default Materias;