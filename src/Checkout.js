import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    return (
        <div className="checkout">
           <div className="checkout__left">
                <img className="checkout__add" src="https://cap.org.ar/wp-content/uploads/2018/08/Copate_Asociate2018-324x160.jpg" alt="publicidad"></img>

                <div>
                    <h2 className="checkout__title">
                        Tu carrito de compras
                    </h2>
                    {/*Item del carrito */}
                    {/*Item del carrito */}
                    {/*Item del carrito */}
                    {/*Item del carrito */}
                    {/*Item del carrito */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
