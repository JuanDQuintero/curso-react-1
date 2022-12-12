import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Clock from './components/pure/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent></TaskListComponent> */}
        {/*<ContactListComponent></ContactListComponent> */}
        {/* <Ejemplo1></Ejemplo1>  */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteContexto></MiComponenteContexto> */}
        {/* Todo lo que hay aquí, es tratado como props.children */}
        {/* <Ejemplo4 nombre='Martin'>
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name='Martin'></GreetingStyled> */}
        <Clock nombre='Martín' apellidos='San José' edad={0}/>
      </header>
    </div>
  );
}

export default App;
