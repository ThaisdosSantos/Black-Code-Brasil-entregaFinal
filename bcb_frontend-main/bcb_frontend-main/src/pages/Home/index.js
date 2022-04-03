import React from "react";
import './style.css';
//import Header from '../../components/Header';
//import Footer from '../../components/Footer';
//import Inicio from "./components/Inicio";
//import InfoBlack from "./components/InfoBlack";
//import Tecnologias from "./components/Tecnologias";
//import PorqueContratar from "./components/PorqueContratar";
//import Conteudos from "./components/Conteudos";
//import Equipe from "./components/Equipe";
import Loader from "../../components/Loader";

import {lazy, Suspense} from 'react';
const Header = lazy(() => import('../../components/Header'));
const FooterNovo = lazy(() => import('../../components/FooterNovo'));
const Inicio = lazy(() => import('./components/Inicio'));
const InfoBlack = lazy(() => import('./components/InfoBlack'));
const Tecnologias = lazy(() => import('./components/Tecnologias'));
const PorqueContratar = lazy(() => import('./components/PorqueContratar'));
const Conteudos = lazy(() => import('./components/Conteudos'));
const Equipe = lazy(() => import('./components/Equipe'));

function Home() {
    return(
        <div>
            <Suspense fallback={<Loader/>}>
                <Header/>
                <div className="container-fluid">
                    <Inicio/>
                    <InfoBlack/>
                    <Tecnologias/>
                    <PorqueContratar/>
                    <Conteudos/>
                    <Equipe/>
                </div>
                <FooterNovo/>
            </Suspense>
        </div>
    );
}

export default Home;