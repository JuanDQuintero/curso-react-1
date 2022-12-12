/**
 * Ejemplo Hooks:
 * -useState()
 * -useContext()
 */

import React, { useState, useContext } from 'react';


/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

const miContexto = React.createContext(null);

const Componente1 = () => {
    //Inicializamos un estado vacio que va  allenarse con los datos
    //dl contexto del padre
    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>

        </div>
    );
}


const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>
        </div>
    );
}


export default function MiComponenteContexto() {

    const estadoInicial = {
        token: '12345',
        sesion: 1
    }

    //Creamos el estado del componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion() {
        setSessionData(
            {
                token: 'JWT12345',
                sesion: sessionData.sesion +1
            }
        );
    }

  return (
    <miContexto.Provider value={sessionData}>
        {/**Todo lo que esta aquí dentro puede leer los datos de sessionData
        Además, si actualiza, los componentes aqui, tambien los actualiza */}
        <h1>***Ejemplo de useState y useContext***</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar Sesión</button>
    </miContexto.Provider>
  )
}



