import React, { useState } from 'react';

//Definiendo estilos en constantes
//Estilos para usuario logueado
const loggedStyle = {
    color: 'white'
}

//Estilos para usuario no logueado
const unLoggedStyle = {
    color: 'tomato',
    fontWight: 'bold'
}

const GreetingStyled = (props) => {

    //Generamos un estado para el componente
    //y as+i controlar si el usuarioestá logueado o no

    const [logged, setLogged] = useState(false);

    // const greetingUsuer = () => (<p>Hola, {props.name}</p>)
    // const pleaseLogin = () => (<p>Please Login</p>)

    return (
        <div style={logged ? loggedStyle : unLoggedStyle}>
            { logged ? (<p>Hola, {props.name}</p>) : (<p>Please Login</p>)}
            <button onClick={() => {
                console.log('Botón pulsado');
                setLogged(!logged);
            }}>{
                logged ? 'Logout' : 'Login'
            }</button>
        </div>
    );
}

export default GreetingStyled;
