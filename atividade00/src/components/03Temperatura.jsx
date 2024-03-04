const Temperatura = () => {

    const celciusToFarenheit = (c) =>{
        return ((c/5)*9) + 32 
    }

    const farenheitToCelcius = (f) => {
        return ((f-32)/9) * 5
    }

    const kelvin = (k) => {
        return {Farenheit: ((k - 273)/5)*9 + 32, 
                celcius: k - 273}
    }
    
    return (
        <div>
            <h3>Celsius para Farenheit: {celciusToFarenheit(40).toFixed(2)}</h3>
            <h3>Farenheit para Celsius: {farenheitToCelcius(230).toFixed(2)}</h3>
            <h3>Kelvin para Farenheit: {kelvin(78).Farenheit.toFixed(2)}</h3>
            <h3>Kelvin para Celsius: {kelvin(78).celcius.toFixed(2)}</h3>
            <h3>Stringfy: {JSON.stringify(kelvin(78))}</h3>
        </div>
    )
}

export default Temperatura