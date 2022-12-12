/**
 * Ejemplo uso usestate
 * Crear componente de tipo funcion y accerder a su estado
 * privado a traves de un hook, y además poder modificarlo
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {

    // valor inicial para un contador
    const valorInicial = 0;

    //vloar inicial para persona
    const personaInicial = { 
        nombre : 'Martin',
        email: 'martin@imaginagroup.com'
    }

    /**
     * Queremos el VALORINICIAL y PERSONAINICIAL sean
     * parte del estado del componente para gestionar su cambio
     * y que éste se vea reflejado en la vista del componente
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(ValorInicial)
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el estado privado del contador
     */

    function incrementarContador() {
        // ? funcionParacambiar(nuevoValor)
        setContador(contador+1);
    }

    function actualizarPersona(nombre) {
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@imagina.com'
            }
        )

        
    }

    return (
        <div>
            <h1>***Ejemplo de useState()***</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la Persona:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>

            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;
