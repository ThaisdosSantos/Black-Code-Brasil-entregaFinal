const ContainerContratar = ({children}) => {
    return (
        <div className="container-fluid">
            <div id="contratar">
                <div className="row d-flex justify-content-center contratar">
                    <div className="col-sm-9 col-md-8 col-lg-7 text-center my-5">
                        <h2 className="titulo-principal cor-terciaria">
                            <strong>// PORQUE CONTRATAR PESSOAS NEGRAS PARA SUA EMPRESA?</strong>
                        </h2>
                    </div>
                </div>
                <div className="container">
                    {
                        children
                    }   
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center footer-contratar py-4">
                        <a className="btn btn-light titulo-principal my-5 px-5 py-3" asp-area="" asp-controller="Categories" asp-action="Categories">Quero contratar</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContainerContratar;