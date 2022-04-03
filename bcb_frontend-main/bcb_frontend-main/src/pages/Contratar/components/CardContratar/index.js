const CardContratar = ({imagem, titulo, texto}) => {
    return (
        <div className="card-contratar row cor-secundaria d-flex justify-content-center my-5">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
                <img id="img-hexagono" className="img-contratar align-self-center" src={imagem} alt="Card image cap"/>
            </div>
            <div className="card-body col-12 col-sm-12 col-md-6 col-lg-6">
                <h5 className="texto-principal text-left mt-5 mx-4 mb-3">{titulo}</h5>
                <p className="texto-terciario-contratar text-justify mx-4">{texto}</p>
            </div>
        </div>
    );
}

export default CardContratar;