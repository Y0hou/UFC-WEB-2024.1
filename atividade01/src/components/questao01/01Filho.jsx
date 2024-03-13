const Filho = ({altura, peso}) => {
    const imc =  peso/(altura*altura);
    const faixaImc = (imc) => {
        if(imc < 18) return "Abaixo do peso";
        else if(imc > 25) return "Acima do peso";
        else return "Peso ideal";
    }

    return(
        <>
            <h3>IMC: {imc}</h3>
            <h3>{faixaImc(imc)}</h3>
        </>
    )
}

export default Filho;