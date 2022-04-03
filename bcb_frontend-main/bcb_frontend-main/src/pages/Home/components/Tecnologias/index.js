import React from "react";
import '../styleHome.css';

function Tecnologias() {
    return(
        <section>
            <aside className="row contratar container-titulo-contratar">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-10">
                                <h1 className="titulo-secundario text-center my-5">
                                    <strong>Nossos profissionais estão conectados com as principais tendências na área de tecnologia</strong>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <article className="row contratar container-nossos-profisionais">
                <div className="container margem-top-container">
                    <div className="row g-3 d-flex justify-content-center">
                        <div className="col-8 col-sm-6 col-md-6 col-lg-3 my-4">
                            <div className="card my-5">
                                <div className="row">
                                    <div className=" col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center">
                                        <img className="card-img-top img-poligono" src="./img/home/icone-servicos-1.png" alt="Card image"/>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title titulo-card">Dev Full Stack</h4>
                                    <p className="card-text">
                                        PEQUENO RESUMO
                                        Curabitur sed iaculis dolor. Maecenas imperdiet ante eget hendrerit posuere. Nunc urna dolor
                                    </p>
                                    <a href="#" className="btn btn-block cor-secundaria cor-botao-quero-contratar">Quero contratar</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 col-sm-6 col-md-6 col-lg-3 my-4">
                            <div className="card my-5">
                                <div className="row">
                                    <div className=" col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center">
                                        <img className="card-img-top img-poligono" src="./img/home/icone-servicos-2.png" alt="Card image"/>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title titulo-card">Dev Front End</h4>
                                    <p className="card-text">
                                        PEQUENO RESUMO
                                        Curabitur sed iaculis dolor. Maecenas imperdiet ante eget hendrerit posuere. Nunc urna dolor
                                    </p>
                                    <a href="#" className="btn btn-block cor-secundaria cor-botao-quero-contratar">Quero contratar</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 col-sm-6 col-md-6 col-lg-3 my-4">
                            <div className="card my-5">
                                <div className="row">
                                    <div className=" col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center">
                                        <img className="card-img-top img-poligono" src="./img/home/icone-servicos-3.png" alt="Card image"/>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title titulo-card">Dev Back end</h4>
                                    <p className="card-text">
                                        PEQUENO RESUMO
                                        Curabitur sed iaculis dolor. Maecenas imperdiet ante eget hendrerit posuere. Nunc urna dolor
                                    </p>
                                    <a href="#" className="btn btn-block cor-secundaria cor-botao-quero-contratar">Quero contratar</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 col-sm-6 col-md-6 col-lg-3 my-4">
                            <div className="card my-5">
                                <div className="row">
                                    <div className=" col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center">
                                        <img className="card-img-top img-poligono" src="./img/home/icone-servicos-4.png" alt="Card image"/>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title titulo-card">Dev Jogos</h4>
                                    <p className="card-text">
                                        PEQUENO RESUMO
                                        Curabitur sed iaculis dolor. Maecenas imperdiet ante eget hendrerit posuere. Nunc urna dolor
                                    </p>
                                    <a href="#" className="btn btn-block cor-secundaria cor-botao-quero-contratar">Quero contratar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <svg className="mask">
                <clipPath id="svgMask">
                    <path d="M119.39 10.1144C124.139 7.54709 129.861 7.54709 134.61 10.1144L180.24 34.7856L224.421 61.967C229.019 64.7955 231.88 69.7516 232.031 75.1474L233.48 127L232.031 178.853C231.88 184.248 229.019 189.204 224.421 192.033L180.24 219.214L134.61 243.886C129.861 246.453 124.139 246.453 119.39 243.886L73.76 219.214L29.579 192.033C24.9814 189.204 22.1201 184.248 21.9692 178.853L20.52 127L21.9692 75.1474C22.1201 69.7516 24.9814 64.7955 29.579 61.967L73.76 34.7856L119.39 10.1144Z" fill="#C4C4C4" />
                </clipPath>
            </svg>
        </section>
    );
}

export default Tecnologias;