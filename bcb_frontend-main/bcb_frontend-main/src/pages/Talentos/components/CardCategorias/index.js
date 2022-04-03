const CardCategorias = ({nome, id}) => { // A constante CardCategorias recebe a função pelo =>
    return(
        <div className="form-group areas-card d-flex justify-content-center">
            <input name="area" type="radio" value={nome} id={id}/>{nome}
        </div>
    );
}

export default CardCategorias;