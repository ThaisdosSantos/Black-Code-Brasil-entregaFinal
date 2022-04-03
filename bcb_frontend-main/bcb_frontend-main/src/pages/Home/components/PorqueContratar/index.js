import React from "react";
import { useNavigate } from "react-router-dom";
import { navigateTo } from "../../../../util/navigateTo";
import '../styleHome.css';

function PorqueContratar() {
    const navigate = useNavigate();
    return(
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8 titulo-pq-investir text-center">
                        <h1 className="titulo-principal cor-terciaria">
                            <strong>//PORQUE INVESTIR EM DIVERSIDADE E CONTRATAR PESSOAS NEGRAS (?);</strong>
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11 col-sm-12 col-md-12 col-lg-7 text-white texto-pq-investir text-justify">
                        <p className="titulo-terciario">
                            <span className="cor-terciaria-texto">&lt;P</span> Empresas que investem em diversidade aumentam a competitividade no mercado e melhoram
                            sua performance financeira<span className="cor-terciaria-texto">/&gt;</span>;
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 my-5">
                        <div className="row g-1">
                            <img className="col-sm-12 col-md-12 col-lg-6 col-xl-6 img-tamanho" src="./img/home/diversidade.jpg" alt=""/>
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 text-white">
                                <h3 className="titulo-terciario text-justify ml-3 my-4">1. <span className="cor-terciaria">&lt;h2</span> Ambientes de trabalho mais feliz <span className="cor-terciaria">&gt;</span> = &lt; <span className="cor-terciaria-texto">Retenção de Talentos</span> &gt;; </h3>
                                <p className="texto-terciario texto-ambientes-de-trabalho text-justify ml-4">
                                    <span className="cor-terciaria">&lt;P</span> uma saúde organizacional mais sólida quanto em resultados: empresas que adotam a diversidade têm uma probabilidade
                                    significativamente maior de alcançar uma performance financeira superior à de seus pare24s que não o fazem<span className="cor-terciaria">/&gt;</span>.
                                </p>
                                <div className="row">
                                    <div className="col-12 container-button">
                                        <button className="button-veja-mais titulo-terciario my-5" onClick={ ()=> navigateTo(navigate, "/contratar") }>Veja Mais</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 my-5">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 text-white mt-4">
                                <h3 className="titulo-terciario text-justify mt-2">2.<span className="cor-terciaria">&lt;h2</span> Alta nível de Inovação e Colaboração<span className="cor-terciaria">/&gt;</span> = &lt;<span className="cor-terciaria-texto">Alta performance</span>&gt;; </h3>
                                <p className="texto-terciario texto-ambientes-de-trabalho text-justify mt-4 ">
                                    <span className="cor-terciaria">&lt;P</span> Essas pessoas têm a probabilidade de : <span className="cor-terciaria-texto">152%</span> maior de afirmar que podem propor novas ideias e tentar novas formas de fazer as coisas/&gt;.<br/><br/>
                                    <span className="cor-terciaria-texto">77%</span> maior de concordar que a organização aplica ideias externas para melhorar sua performance<span className="cor-terciaria">/&gt;</span>.
                                </p>
                                <div className="row">
                                    <div className="col-12 container-button">
                                        <button className="button-veja-mais titulo-terciario my-5" onClick={ ()=> navigateTo(navigate, "/contratar") }>Veja Mais</button>
                                    </div>
                                </div>
                            </div>
                            <img className="col-sm-12 col-md-12 col-lg-6 col-xl-6 contraste-img img-tamanho" src="./img/home/colaboracao.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 container-button">
                        <button className="button-saiba-mais titulo-terciario" onClick={ ()=> navigateTo(navigate, "/contratar") }>Saiba Mais</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PorqueContratar;