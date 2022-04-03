const ContainerCategorias = ({children}) =>{
    return(
        <div className="container-fluid">
            <div id="areas" className="pb-5">
                <section className="row d-flex justify-content-center">
                    <div className="col-lg-12 d-flex justify-content-center my-2">
                        <h1 className="titulo-principal cor-secundaria-texto my-5">
                            <strong>TALENTOS | CATEGORIAS</strong>
                        </h1>
                    </div>
                </section>

                <div className="container">
                    <form id="areas_talentos" asp-controller="Talentos" asp-action="ShowTalents">
                        <label for="area"></label>
                        <div className="card-container">
                            {

                            children

                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContainerCategorias;