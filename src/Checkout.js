import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();


    return (
        <div className="checkout">
           <div className="checkout__left">
                <img className="checkout__add" src="https://cap.org.ar/wp-content/uploads/2018/08/Copate_Asociate2018-324x160.jpg" alt="publicidad"></img>

                <div>
                    <h3>Hola {user.email}</h3>
                    <h2 className="checkout__title">
                        Tu carrito de compras
                    </h2>
                    {basket.map(item =>(
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

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
