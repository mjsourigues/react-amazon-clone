import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{basket,user}, dispatch] =useStateValue();
    
    const stripe= useStripe();
    const elements= useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [clientSecret,setClientSecret] = useState(true);

    useEffect(()=>{
        //GENERAR CLAVE STRIPE SECRETA PARA PERMITIR EL PAGO
    }, {basket})

    const handleSubmit=async (event)=>{
        //REALIZAR EL SUBMIT 
        event.preventDefault();
        setProcessing(true);
        //const payload = await stripe
    }

    const handleChange=event=>{
        //Escuchar los cambios en los numeros de la tarjeta
        //Y mostrar cualquier error que el cliente ingrese
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Carrito (<Link to="/checkout">{basket.length} items</Link>)
                </h1>

                {/* Payment section - delivery adrress */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Direccion de entrega</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user.email}</p>
                        <p>Calle falsa 123</p>
                        <p>Buenos Aires, Argentina</p>
                    </div>
                </div>

                {/* Payment section - Review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Revision de items y entrega</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item=>(
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                         ))}
                    </div>
                </div>
                {/* Payment section - Payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h2>Forma de pago</h2>
                    </div>
                    <div className="payment__details">
                        {/* PAGO ONLINE */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>
                                        Total de la compra: ({value})
                                    </h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Procesando</p> : "Confirmar"}</span>
                            </button>
                            </div>
                            {/*Errores en numeros tarjeta*/}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
