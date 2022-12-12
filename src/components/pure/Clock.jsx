import React, { useEffect, useState } from 'react'

const Clock = (props) => {
  //let timer = ;
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(interval);
  }, []);
  
  const tick = () => <h2>Hora Actual: {time}</h2>

  return (
    <div>
      <h1>Hello, world!</h1>
      {tick()}
      <h3>{props.nombre} {props.apellidos}</h3>
      <h1>Edad: {props.edad}</h1>
    </div>
  );
}




export default Clock;