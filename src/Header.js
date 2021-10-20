import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import {useStateValue} from './StateProvider';


function Header() {
    const [{basket}, dispatch]=useStateValue();
    console.log("cantidad de elementos:"+basket.length);
    return (
        <div className="header"> 
            <Link to="/">
                <img className="header__logo" src="https://cdn.worldvectorlogo.com/logos/amazon-com-light.svg" alt="Logo Amazon">
                </img>
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text">
                </input>
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionGuest">
                        Hola Invitado
                    </span>
                    <span className="header__optionLogin">
                        Loguearse
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionReturns">
                        Devoluciones
                    </span>
                    <span className="header__optionOrder">
                        Y Carrito
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionYour">
                        Tú
                    </span>
                    <span className="header__optionPrime">
                        Prime
                    </span>
                </div>

                    <Link to="./Checkout">  
                        <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__basketCount">{basket.length}</span>
                        </div>
                    </Link>
            </div>
        </div>
    )
}

export default Header

