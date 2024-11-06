import React, { useState } from 'react';

const ToDoList = () => {
    const [tareas, setTareas] = useState([
        { id: 1, texto: 'Tarea 1', completada: false },
        { id: 2, texto: 'Tarea 2', completada: false },
        { id: 3, texto: 'Tarea 3', completada: false },
    ]);

    const handle = (id) => {
        setTareas(
            tareas.map((tarea) =>
                //Cambia el estado de completada, es invocado por onChange del checkbox
                tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
            )
        );
    };

    return (
        <div>
            {tareas.map((tarea) => (
                <div key={tarea.id}>
                    <input
                        type="checkbox"
                        checked={tarea.completada}
                        onChange={() => handle(tarea.id)} //Al cambiar el estado le cambio el valor de completada
                    />
                    {tarea.completada ? <del>{tarea.texto}</del> : tarea.texto}
                </div>
            ))}
        </div>
    );
};

export default ToDoList;