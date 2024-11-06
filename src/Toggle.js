import React, { useState } from 'react';

const Toggle = () => {
    const [visible, setVisible] = useState(true);

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>
                {visible ? 'Ocultar' : 'Mostrar'}
            </button>
            {visible && <div>Este es el contenido visible</div>}
        </div>
    );
};
export default Toggle;