import React, { useState } from 'react';

const Buscador = () => {
    const [productos] = useState([
        'Zanahoria',
        'Platano',
        'Naranja',
        'Pera',
        'Uva',
        'Manzana',
        'Limón',
        'Aguacate',
        'Lima',
        'Pitaya',
        'Piña',
        'Mango',
        'Lechuga',
        'Berza',
        'Puerro',
        'Tomate',
    ]);
    const [busqueda, setBusqueda] = useState('');

    const productosFiltrados = productos.filter((producto) =>
        producto.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar producto"
            />
            <ul>
                {productosFiltrados.map((producto) => (
                    <li>{producto}</li>
                ))}
            </ul>
        </div>
    );
};

export default Buscador;