import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                <>
                <p>
                    Subtotal (0 items): <strong>0</strong>
                    {/*Completar*/}
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> Esta compra tiene un regalo
                </small>
                </>
                )}
                decimalScale={2}
                value={0} //Completar
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>
                Confirmar compra 😃 
            </button>
        </div>
    )
}

export default Subtotal
