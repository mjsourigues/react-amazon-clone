import React, { useState } from 'react';
import "./Login.css";
import {Link} from "react-router-dom";


function Login() {
    const [email, setEmail] = useState();
    const [pasword, setPasword] = useState();
    //IINICIO DE SESION EN FIREBASE
    const singIn=e=>{
        e.preventDefault();
        //VER LOGIN FIREBASE
    }

    //REGISTRAR USR EN FIREBASE
    const register=e=>{
        e.preventDefault();
        //VER REGISTRAR USR EN FIREBASE
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://logodownload.org/wp-content/uploads/2014/04/amazon-logo-2.png"></img>
            </Link>
            <div className="login__container">
                <h1>Sing in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>

                    <h5>Contraseña</h5>
                    <input type="password" value={pasword} onChange={e=>setPasword(e.target.value)}/>

                    <button type="submit" onClick={singIn} className="login__singInButton">Acceder</button>
                </form>
                    <p>Bienvenido a Amazon Clone! Amazon Clone le ofrecen funciones de sitio web y otros productos y servicios similares a cuando visita o compra en Amazon.com. Al utilizar los Servicios de AmazonClone, usted acepta, en su nombre y en el de todos los miembros de su hogar y otras personas que utilicen cualquier Servicio con su cuenta, algunas condiciones que jamás va a leer realmente</p>

                <button onClick={register} className="login__registerButton">Crear cuenta en Amazon Clone</button>
            </div>
        </div>
    )
}

export default Login
