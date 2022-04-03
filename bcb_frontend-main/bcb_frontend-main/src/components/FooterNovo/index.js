import React from "react";
import './style.css';
import '../header_footer.css';

function FooterNovo() {
    return(
        <footer id="myFooter">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <a><img src="./img/logo/logo-completa.png" className="logo-footer mt-4" alt=""/></a>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2">
                        <h5>Links Rápidos</h5>
                        <ul>
                            <li><a href="http://localhost:3000/Home">Home</a></li>
                            <li><a href="http://localhost:3000/Materias">Matérias</a></li>
                            <li><a href="http://localhost:3000/Podcasts">Podcasts</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2">
                        <h5>Links Rápidos</h5>
                        <ul>
                            <li><a href="http://localhost:3000/Contratar">Contratar</a></li>
                            <li><a href="http://localhost:3000/Talentos">Talentos</a></li>
                            <li><a href="http://localhost:3000/Cadastrar">Cadastre-se</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2">
                        <h5>Apoiador</h5>
                        <ul>
                            <li><a target={"_blanck"} href="https://recodepro.org.br/">Recode Pro</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <div className="social-networks">
                            <a href="#" className="twitter"><i className="fa fa-github"></i></a>
                            <a href="#" className="facebook"><i className="fa fa-linkedin"></i></a>
                            <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                        </div>
                        <a href="#">
                            <button type="button" className="btn btn-default">Contato</button>
                        </a>
                    </div>
                </div>
        </div>
        <div className="footer-copyright">
            <p>© 2022 Copyright - Black Code Brasil</p>
        </div>
    </footer>
    );
}

export default FooterNovo;