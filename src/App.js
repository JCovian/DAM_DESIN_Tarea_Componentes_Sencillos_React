import './App.css';
import React from 'react';
import Contador from './Contador';
import Formulario from './Formulario';
import Toggle from './Toggle';
import ToDoList from './ToDoList';
import Buscador from './Buscador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            <p>Ejercicio 1 - Contador</p>
            <Contador></Contador>
          </div>
          <div>
            <p>Ejercicio 2 - Formulario Simple</p>
            <Formulario></Formulario>
          </div>
          <div>
            <p>Ejercicio 3 - Toggle de visibilidad</p>
            <Toggle></Toggle>
          </div>
          <div>
            <p>Ejercicio 4 - Lista de Tareas (ToDo List)</p>
            <ToDoList></ToDoList>
          </div>
          <div>
            <p>Ejercicio 5 - Buscador de productos</p>
            <Buscador></Buscador>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;