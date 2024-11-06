import React, { useState } from 'react';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');

    const sendHandle = (e) => {
        e.preventDefault();
        setMensaje(`Bienvenido, ${nombre}!`);
    };

    return (
        <div>
            <form onSubmit={sendHandle}>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Introduce tu nombre"
                />
                <button type="submit">Enviar</button>
            </form>
            {mensaje && <h2>{mensaje}</h2>}
        </div>
    );
};

export default Formulario;