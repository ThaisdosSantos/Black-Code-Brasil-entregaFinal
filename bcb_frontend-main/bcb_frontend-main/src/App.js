import React from "react";
import Home from './pages/Home';
import Materias from "./pages/Conteudos/Materias";
import Podcasts from "./pages/Conteudos/Podcasts";
import Contratar from "./pages/Contratar";
//import Cadastrar from "./pages/Cadastrar";
import Login from "./pages/Login";
import CadastroLogin from "./pages/CadastroLogin";
import Talentos from "./pages/Talentos";
//import Read from "./pages/Administrador/pages/Read";
//import Update from "./pages/Administrador/pages/Update";
//import Delete from "./pages/Administrador/pages/Delete";
import ApagarConta from "./pages/ApagarConta";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Profile } from "./pages/Profile";
import { UpdateUser } from './pages/UpdateUser';


function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route path="/materias" element={ <Materias/> } />
        <Route path="/podcasts" element={ <Podcasts/> } />
        <Route path="/contratar" element={ <Contratar/> } />
        <Route path="/talentos" element={ <Talentos/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/cadastroLogin" element={ <CadastroLogin/> } />
        <Route path="/cadastrar" element={ <Profile/> } />
        <Route path="/updateUser" element={ <UpdateUser/> } />
        <Route path="/apagarConta" element={ <ApagarConta/> } />
      </Routes>
    </BrowserRouter>
    // <div>
    //   {
    //     url === 'http://localhost:3000/Home' 
    //     ? <Home/>
    //     : url === 'http://localhost:3000/Materias' 
    //     ? <Materias/>
    //     : url === 'http://localhost:3000/Podcasts' 
    //     ? <Podcasts/>
    //     :url === 'http://localhost:3000/Contratar'
    //     ? <Contratar/>
    //     : url === 'http://localhost:3000/Talentos'
    //     ? <Talentos/>
    //     : url === 'http://localhost:3000/Login'
    //     ? <Login/>
    //     : url === 'http://localhost:3000/CadastroLogin'
    //     ? <CadastroLogin/>
    //     : url === 'http://localhost:3000/Cadastrar' 
    //     ? <Cadastrar/>
    //     : url === 'http://localhost:3000/Read'
    //     ? <Read/>
    //     : url === 'http://localhost:3000/Update'
    //     ? <Update/>
    //     : url === 'http://localhost:3000/Delete'
    //     ? <Delete/>
    //     : <Home/>
    //   }  
    // </div>
  );
}

export default App;