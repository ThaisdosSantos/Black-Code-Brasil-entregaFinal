import React, { useState, useContext }  from "react";
import './style.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/userProvider";
import { deleteUser} from "../../services/delete";


function ApagarConta(){
    const navigateTo = useNavigate();

    const { user, setUser, removeUserFromStorage, setIsLogged } = useContext(UserContext);

    const Userdelete = ()=>{
        removeUserFromStorage();
        deleteUser(user.id);
        navigateTo("/");
        setUser({});
        setIsLogged(false);
        console.log(user.id);
    }


    return(
        <section className="d-flex justify-content-center align-items-center altura">
            <main className="form-signin col-11 col-sm-8 col-md-6 col-lg-4 cor-form-cadastro d-flex flex-column align-items-center">
                <h5 className="mt-3">Deseja deletar sua conta? </h5>
                <div>
                    <button className="btn btn-success my-3 mx-2" onClick={ Userdelete }>Sim</button>
                    <a  className="btn btn-danger my-3 mx-2"  onClick={ ()=> navigateTo("/cadastrar") }>Não</a>
                </div>
            </main>
        </section>
    )

}
export default ApagarConta;