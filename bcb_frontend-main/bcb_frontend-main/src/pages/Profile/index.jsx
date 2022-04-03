import React, { useContext } from 'react';
import { UserContext } from '../../context/userProvider';
import Header from '../../components/Header';

import { useNavigate } from 'react-router-dom';

import './style.css';
import '../Home/components/styleHome.css';
import FooterNovo from '../../components/FooterNovo';
import { navigateTo } from '../../util/navigateTo';

export const Profile = () => {
    const { user } = useContext(UserContext);

    const listaHabilidade = user.habilidades.split(';');

    const navigate = useNavigate();

  return (
    <>
        <Header/>
        <div id="talento-info">
            <div className="row info-header">
                <div className="col-12 col-sm-12 col-md-4 col-lg-5">
                    <div className="container dados img my-4 ml-md-4 d-flex justify-content-center">
                        <img
                            src={ user.img !== "" ? user.img : "https://russocorretora.com.br/images/foto-perfil-generica.jpg" }
                            alt="Imagem de perfil" 
                        />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                    <div className="container my-4 d-flex flex-column justify-content-center align-items-center
                    d-lg-flex flex-lg-column justify-content-lg-center align-items-lg-start
                    d-md-flex flex-md-column justify-content-md-center align-items-md-start ml-md-5">
                        <h2 className="titulo-info cor-secundaria mt-lg-5 mt-md-5">{ user.name }</h2>
                        <div className=" cor-secundaria  ">
                            <span className="destaque-info">Profissão:</span><span className="texto-info "> { user.job }</span><br/>
                            <span className="destaque-info">Local:</span><span className="texto-info"> { user.location }</span><br/>
                            <span className="destaque-info">Telefone:</span><span className="texto-info"> { user.telephone }</span><br/>
                            <span className="destaque-info">E-mail:</span><span className="texto-info"> { user.email }</span><br/>
                            <span className="destaque-info">Formação:</span><span className="texto-info"> { user.graduate }</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                    className='update'
                    onClick={ ()=> navigateTo(navigate, "/updateUser") }
                    style={{marginRight: '10px'}}
                >
                    Atualizar perfil
                </button>
                {<button
                    className='update'
                    onClick={ ()=>  navigateTo(navigate, "/apagarConta") }  
                    style={{marginRight: '10px'}}              
                >   
                    Deletar perfil
                </button> 
                }                         
            </div>
            <div className="row cor-principal contratar">
                <div className="container my-5">
                    <div className="col-12">
                        <h1 className="titulo-principal">SOBRE</h1>
                    </div>
                    <div className="col-12">
                        <p className="text-terciario text-justify">
                            { user.about }
                        </p>
                    </div>
                </div>
            </div>

            <div className="row experiencia">
                <div className="container mt-5">
                    <div className="col-12">
                        <h1 className="titulo-principal">EXPERIÊNCIAS</h1><br/>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 pb-5 " style={{ marginLeft: "3%" }}>
                            <span className="texto-secundario">LOCAL:</span><span className="text-terciario "> { user.local1 }</span><br/><br/>
                            <span className="texto-secundario">FUNÇÃO:</span><span className="text-terciario "> { user.funcao1 }</span><br/><br/>
                            <span className="texto-secundario">ATIVIDADES:</span><span className="text-terciario "> { user.atividade1 }</span><br/>
                            {/* <p style={{ color: "#FFD79C" }} className="borda pb-5">.</p> */}
                        </div>

                        <div className="col-12 text-terciario pb-5 " style={{ marginLeft: "3%" }}>
                            <span className="texto-secundario">LOCAL:</span><span className="text-terciario "> { user.local2 }</span><br/><br/>
                            <span className="texto-secundario">FUNÇÃO:</span><span className="text-terciario "> { user.funcao2 }</span><br/><br/>
                            <span className="texto-secundario">ATIVIDADES:</span><span className="text-terciario "> { user.atividade2 }</span><br/>
                            {/* <p style={{ color: "#FFD79C" }} className="borda pb-5">.</p> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row curso">
                <div className="container mt-5">
                    <div className="col-12">
                        <h1 className="titulo-principal">CURSOS</h1><br/>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 pb-5 " style={{ marginLeft: "3%" }}>
                            <span className="texto-secundario">INSTITUIÇÃO:</span>
                            <span className="text-terciario "> { user.instituicao1 }</span><br/><br/>
                            <span className="texto-secundario">CARGA HORÁRIA:</span>
                            <span className="text-terciario "> { user.carga_horaria1 } h</span><br/><br/>
                            <span className="texto-secundario">O QUE APRENDEU:</span>
                            <span className="text-terciario text-justify"> { user.aprendeu1 }</span><br/>
                            {/* <p style={{ color: "rgba(174, 241, 255, 1)" }} className="borda pb-5">.</p> */}
                        </div>

                        <div className="col-12 text-terciario pb-5 " style={{ marginLeft: "3%" }}>
                            <span className="texto-secundario">INSTITUIÇÃO:</span>
                            <span className="text-terciario "> { user.instituicao2 }</span><br/><br/>
                            <span className="texto-secundario">CARGA HORÁRIA:</span>
                            <span className="text-terciario "> { user.carga_horaria2 } h</span><br/><br/>
                            <span className="texto-secundario">O QUE APRENDEU:</span>
                            <span className="text-terciario text-justify"> { user.aprendeu2 }</span><br/>
                            {/* <p style={{ color: "rgba(174, 241, 255, 1)" }} className="borda pb-5">.</p> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row cor-principal contratar">
                <div className="container my-5">
                    <div className="col-12">
                        <h1 className="titulo-principal">HABILIDADES</h1>
                    </div>
                    <div className="col-12">
                        <ul className="text-terciario ml-4 ">
                            { listaHabilidade.map( item => <li>{ item }</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <FooterNovo/>
    </>
  )
}