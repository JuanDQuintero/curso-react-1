/**
 * Ejemplo de uso de :
 * -useState()
 * -useRef()
 * -useEffect()
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {
    //Vamos a crear dos contador distintos
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Vamos  acrear una referencia para asociar una variable con un elemento del DOM
    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1+1);
    }

    function incrementar2() {
        setContador2(contador2+1);
    }

    /**
     * Trabando con UseEffect
     * ? Caso1: Ejecutar siempre un snnipet de código:
     * cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que esté dentro del useEffect
     */

    // useEffect(() => {
    //     console.log('Cambio en el estao del componente');
    //     console.log('Mostrando referencia del dom');
    //     console.log(miRef);
    // });

    /**
     * ? Caso2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1
     * cada vez que haya cambio en cotnador 1, se ejecuta lo que diga el useeffect
     * En caso de que cambie el caontador2, no habrá ejecución
     */

    // useEffect(() => {
    //     console.log('CAMBIO ESTADO CONTADOR1');
    //     console.log('Mostrando referencia del dom');
    //     console.log(miRef);
            
    //     };
    // }, [contador1]);

    /**
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1
     * cada vez que haya cambio en cotnador 1, se ejecuta lo que diga el useeffect
     * cada vez que haya cambio en cotnador 2, se ejecuta lo que diga el useeffect
     */

     useEffect(() => {
        console.log('CAMBIO ESTADO CONTADOR1');
        console.log('Mostrando referencia del dom');
        console.log(miRef);
        }, [contador1, contador2]);
    return (
        <div>
            <h1>*** Ejemplo de useState, useRef y useEffect***</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>

            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>

            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>

            </div>
        </div>
    );
}

export default Ejemplo2;
