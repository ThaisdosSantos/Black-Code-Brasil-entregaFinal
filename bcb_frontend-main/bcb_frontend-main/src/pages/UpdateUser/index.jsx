import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userProvider';
import { updateUser } from '../../services/update';

import '../Cadastrar/components/Formulario/style.css';

export const UpdateUser = () => {
    const navigate = useNavigate();

    const { user, setUser, setUserAtStorage } = useContext(UserContext);

    const [userUpdate, setUserUpdate] = useState(user);

    const handleChange = e =>{
        const { value } = e.target;
        setUserUpdate({ ...userUpdate, [e.target.name]: value });
    }

    const update = ()=>{
        Promise.resolve(updateUser(userUpdate, setUser, user.id));
        console.log(user);
        setUserAtStorage(userUpdate);
        navigate("/cadastrar");
    }

  return(
    <div className="container-fluid background">
        <section>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-12 d-flex justify-content-center my-2">
                        <h1 className="titulo-principal cor-secundaria-texto my-5">
                            <strong>//Update</strong>
                        </h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="row background d-flex justify-content-center">
                <div className="row">
                    <div className="container">
                        <div className="col-12 cor-secundaria texto-cadastrar">
                            <form asp-action="Create" enctype="multipart/form-data" className="was-validated">
                                <div className="form-group">
                                    <label for="name" className="control-label">QUAL O SEU NOME?</label>
                                    <input
                                        name="name"
                                        id="Nome" 
                                        type="text" 
                                        placeholder="Digite seu nome completo" 
                                        className="form-control input-md mb-4" 
                                        required
                                        value={ userUpdate.name }
                                        onChange={ e => handleChange(e) }
                                    />
                                    <span asp-validation-for="name" className="text-danger"></span>
                                    <div className="valid-feedback">Preechimento válido</div>
                                    <div className="invalid-feedback">Campo Obrigatório</div>
                                </div>

                                {/* <div className="form-group">
                                    <label asp-for="Imagem" className="control-label">Anexo</label><br/>
                                    <input asp-for="Imagem" type="file" id="anexo" className="mb-4 form-control" accept="image/*" required/><br/>
                                    <span asp-validation-for="Imagem" className="text-danger"></span>
                                    <div className="valid-feedback">Preechimento válido</div>
                                    <div className="invalid-feedback">Campo Obrigatório</div>
                                </div> */}

                                <div className="form-group">
                                    <label for="job" className="control-label" for="">QUAL A SUA PROFISSÁO / NO QUE VOCÊ TRABALHA?</label>
                                    <select
                                        id="job" 
                                        name="job" 
                                        className="custom-select mb-4" 
                                        required 
                                        onChange={ e => handleChange(e) }
                                    >
                                        <option selected value={ userUpdate.job }>{ userUpdate.job !== "" ? userUpdate.job : "Escolha uma área" }</option>
                                        <option value="Artificial Inteligence">Artificial Inteligence</option>
                                        <option value="Business Intelligence">Business Inteligence</option>
                                        <option value="Cloud Computing">Cloud Computing</option>
                                        <option value="Computer Programming">Computer Programming</option>
                                        <option value="Data Science">Data Science</option>
                                        <option value="Devops">Devops</option>
                                        <option value="Information Security">Information Secury</option>
                                        <option value="IoT">IoT</option>
                                    </select>
                                    <span asp-validation-for="Profissao" className="text-danger"></span>
                                    <div className="valid-feedback">Preechimento válido</div>
                                    <div className="invalid-feedback">Campo Obrigatório</div>
                                </div>

                                <div className="form-group">
                                    <label for="location" className="control-label">QUAL A SUA LOCALIDADE?</label>
                                    <input
                                        name="location"
                                        id="location"
                                        type="text"
                                        placeholder="Digite a sua cidade/estado"
                                        className="form-control input-md mb-4" 
                                        required
                                        value={ userUpdate.location }
                                        onChange={ (e)=> handleChange(e) }
                                    />
                                    <span asp-validation-for="localidade" className="text-danger"></span>
                                    <div className="valid-feedback">Preechimento válido</div>
                                    <div className="invalid-feedback">Campo Obrigatório</div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label" for="telephone">QUAL O SEU TELEFONE?</label>
                                    <input 
                                        id="telephone" 
                                        name="telephone" 
                                        type="text" 
                                        placeholder="Digite o seu telefone" 
                                        className="form-control input-md mb-4" 
                                        required
                                        value={ userUpdate.telephone }
                                        onChange={ (e)=> handleChange(e) }
                                    />
                                    <span asp-validation-for="telephone" className="text-danger"></span>
                                    <div className="valid-feedback">Preechimento válido</div>
                                    <div className="invalid-feedback">Campo Obrigatório</div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label" for="email">QUAL O SEU E-MAIL?</label>
                                    <input 
                                        id="email" 
                                        name="email" 
                                        type="email" 
                                        placeholder="Digite o seu email" 
                                        className="form-control input-md mb-4" 
                                        required
                                        value={ userUpdate.email }
                                        onChange={ (e)=> handleChange(e) }
                                    />
                                    <span asp-validation-for="email" className="text-danger"></span>
                                    <div className="valid-feedback">Preechimento válido</div>
                                    <div className="invalid-feedback">Campo Obrigatório</div>
                                </div>

                                <div className="form-group">
                                    <label for="graduate" className="control-label">QUAL A SUA FORMAÇÃO?</label><br/>
                                    <select 
                                        name="graduate" 
                                        className="custom-select mb-4" 
                                        required 
                                        onChange={ (e)=> handleChange(e) }
                                    >
                                        <option selected value={ userUpdate.graduate }>{ userUpdate.graduate !== "" ? userUpdate.graduate : 'Defina a graduação' }</option>
                                        <option value="ensino fundamental incompleto">Ensino fundamental incompleto</option>
                                        <option value="Ensino fundamental completo">Ensino fundamental completo</option>
                                        <option value="ensino medio incompleto">Ensino médio incompleto</option>
                                        <option value="Ensino medio completo">Ensino médio completo</option>
                                        <option value="Ensino tecnico incompleto">Ensino técnico incompleto</option>
                                        <option value="Ensino tecnico completo">Ensino técnico completo</option>
                                        <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                                        <option value="Ensino superio completo">Ensino superio completo</option>
                                    </select>
                                    <span asp-validation-for="graduate" className="text-danger"></span>
                                    <div className="valid-feedback">Preechimento válido</div>
                                    <div className="invalid-feedback">Campo Obrigatório</div>
                                </div>

                                <div className="form-group">   
                                    <label className="control-label titulo-principal" for="about">SOBRE:</label><br/>
                                    <textarea 
                                        className="text-area-cadastro mb-4" 
                                        id="about" 
                                        name="about" 
                                        maxlength="280" 
                                        placeholder="Queremos te conhecer, fale um pouco mais sobre vc(280 caracteres)..."
                                        value={ userUpdate.about }
                                        onChange={ (e)=> handleChange(e) }
                                    >
                                    </textarea>
                                    <span asp-validation-for="about" className="text-danger"></span>
                                </div>     

                                    <h1 className="titulo-secundario my-3">EXPERIÊNCIA</h1>

                                <div className="form-group"> 
                                    <label className="control-label" for="local1">LOCAL?</label>
                                    <input 
                                        id="local" 
                                        name="local1" 
                                        type="text" 
                                        placeholder="Digite qual era o local" 
                                        className="form-control input-md mb-4"
                                        value={ userUpdate.local1 }
                                        onChange={ (e)=> handleChange(e) }
                                    />
                                    <span asp-validation-for="local1" className="text-danger"></span>
                                </div>    

                                <div className="form-group">
                                    <label className="control-label" name="funcao1">FUNÇÃO?</label>
                                    <input 
                                        id="funcao1" 
                                        name="funcao1" 
                                        type="text" 
                                        placeholder="Digite a sua cidade/estado" 
                                        className="form-control input-md mb-4"
                                        value={ userUpdate.funcao1 }
                                        onChange={ (e)=> handleChange(e) }
                                    />
                                    <span asp-validation-for="funcao1" className="text-danger"></span>
                                </div>    

                                <div className="form-group">
                                    <label className="control-label" for="atividade1">ATIVIDADES?</label>
                                    <input 
                                        id="atividade1" 
                                        name="atividade1" 
                                        type="text" 
                                        placeholder="Digite o seu telefone" 
                                        className="form-control input-md mb-4"
                                        value={ userUpdate.atividade1 }
                                        onChange={ (e)=> handleChange(e) }
                                    />
                                    <span asp-validation-for="atividade1" className="text-danger"></span>
                                </div>    

                                    <p className="borda-cadastro">.</p>

                                <div className="form-group">
                                    <label className="control-label" asp-for="local2">LOCAL?</label>
                                    <input 
                                        id="local" 
                                        name="local2" 
                                        type="text" 
                                        placeholder="Digite qual era o local" 
                                        className="form-control input-md mb-4"
                                        value={ userUpdate.local2 }
                                        onChange={ (e)=> handleChange(e) }
                                    />
                                    <span asp-validation-for="local2" className="text-danger"></span>
                                </div>

                                <div className="form-group">
                                    <label className="control-label" for="funcao2">FUNÇÃO?</label>
                                    <input 
                                        id="funcao2" 
                                        name="funcao2" 
                                        type="text" 
                                        placeholder="Digite a sua cidade/estado" 
                                        className="form-control input-md mb-4"
                                        value={ userUpdate.funcao2 }
                                        onChange={ (e)=> handleChange(e) }
                                    />
                                    <span asp-validation-for="funcao2" className="text-danger"></span>
                                </div>

                                <div className="form-group">
                                    <label className="control-label" asp-for="Atividade2">ATIVIDADES?</label>
                                    <input 
                                        id="atividade2" 
                                        name="atividade2" 
                                        type="text" 
                                        placeholder="Digite o seu telefone" 
                                        className="form-control input-md mb-4"
                                        value={ userUpdate.atividade2 }
                                        onChange={ (e)=> handleChange(e) }
                                    />
                                    <span asp-validation-for="atividade2" className="text-danger"></span>
                                </div>

                                <h1 className="titulo-secundario my-5">CURSOS</h1>

                                <div className="form-group">
                                    <label className="control-label" for="instituicao1">INSTITUIÇÃO?</label>
                                    <input 
                                        id="instituicao" 
                                        name="instituicao1" 
                                        type="text" 
                                        placeholder="Digite o nome da instituição formadora" 
                                        className="form-control input-md mb-4"
                                        value={ userUpdate.insituicao1 }
                                        onChange={ (e)=> handleChange(e) }
                                    />
                                    <span asp-validation-for="instituicao1" className="text-danger"></span>
                                </div>    

                                <div className="form-group">
                                    <label className="control-label" for="Carga_horaria1">CARGA HORÁRIA?</label>
                                    <input 
                                        id="carga_horaria1" 
                                        name="carga_horaria1" 
                                        type="text" 
                                        placeholder="Digite a carga horária" 
                                        className="form-control input-md mb-4"
                                        value={ userUpdate.carga_horaria1 }
                                        onChange={ (e)=> handleChange(e) }
                                    />
                                    <span asp-validation-for="carga_horaria1" className="text-danger"></span>
                                </div>    

                                <div className="form-group">
                                <label className="control-label" for="aprendeu1">O QUE APRENDEU?</label>
                                <textarea 
                                        className="text-area-cadastro mb-4"
                                        id="aprendeu1" 
                                        name="aprendeu1" 
                                        maxlength="280" 
                                        placeholder="Queremos te conhecer, fale um pouco mais sobre o que aprendeu..."
                                        value={ userUpdate.aprendeu1 }
                                        onChange={ (e)=> handleChange(e) }  
                                ></textarea>
                                    <span asp-validation-for="aprendeu1" className="text-danger"></span>
                                    <div className="invalid-feedback">Campo Obrigatório</div>
                                </div>  

                                    <p className="borda-cadastro">.</p>

                                <div className="form-group">
                                    <label className="control-label" for="Instituicao2">INSTITUIÇÃO?</label>
                                    <input
                                        id="instituicao2" 
                                        name="instituicao2" 
                                        type="text" 
                                        placeholder="Digite o nome da instituição formadora" 
                                        className="form-control input-md mb-4"
                                        value={ userUpdate.insituicao2 }
                                        onChange={ (e)=> handleChange(e) }
                                    />
                                    <span asp-validation-for="instituicao2" className="text-danger"></span>
                                </div>    

                                <div className="form-group">
                                    <label className="control-label" for="carga_horaria2">CARGA HORÁRIA?</label>
                                    <input 
                                        id="carga_horaria2" 
                                        name="carga_horaria2" 
                                        type="text" 
                                        placeholder="Digite a carga horária" 
                                        className="form-control input-md mb-4"
                                        value={ userUpdate.carga_horaria2 }
                                        onChange={ (e)=> handleChange(e) }
                                    />
                                    <span asp-validation-for="CargaHoraria2" className="text-danger"></span>
                                </div>    

                                <div className="form-group">
                                    <label className="control-label" for="aprendeu2">O QUE APRENDEU?</label>
                                    <textarea 
                                        className="text-area-cadastro mb-4"
                                        id="aprendeu2" 
                                        name="aprendeu2" 
                                        maxlength="280" 
                                        placeholder="Queremos te conhecer, fale um pouco mais sobre o que aprendeu..."
                                        value={ userUpdate.aprendeu2 }
                                        onChange={ (e)=> handleChange(e) }
                                    ></textarea>
                                    <span asp-validation-for="Aprendeu2" className="text-danger"></span>
                                </div>    

                                <div className="form-group">
                                    <label className="control-label" for="Habilidades">HABILIDADES:</label><br/>
                                    <textarea 
                                        className="text-area-cadastro mb-4"
                                        name="habilidades"
                                        id="habilidades"
                                        maxlength="280"
                                        placeholder="Exemplo: Html; Css; Javascript; Bootstrap"
                                        value={ userUpdate.habilidades }
                                        onChange={ (e)=> handleChange(e) }
                                    ></textarea>
                                    <span asp-validation-for="Habilidades" className="text-danger"></span>
                                </div>    

                                <div className="row">
                                    <div className="col-12 d-flex justify-content-center mb-5">
                                        <input 
                                            value="ENVIAR" 
                                            className="btn btn-light btn-lg texto-botao texto-secundario" 
                                            id="botao-enviar"
                                            onClick={ update }
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}