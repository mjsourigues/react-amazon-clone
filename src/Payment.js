import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { useStateValue } from './StateProvider';

function Payment() {
    const [{basket,user}, dispatch] =useStateValue(); 

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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
