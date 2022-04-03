import React from "react";
//import Header from '../../components/Header';
//import Footer from '../../components/Footer';
//import Formulario from "./components/Formulario";
import Loader from "../../components/Loader";

import {lazy, Suspense} from 'react';
const Header = lazy(() => import('../../components/Header'));
const FooterNovo = lazy(() => import('../../components/FooterNovo'));
const Formulario = lazy(() => import('./components/Formulario'));

function Cadastrar() {
    return(
        <div>
            <Suspense fallback={<Loader/>}>
                <Header/>
                <Formulario/>
                <FooterNovo/>
            </Suspense>
        </div>
    );
}

export default Cadastrar;