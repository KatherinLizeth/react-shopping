import React from 'react'

function MiPrimerComponente() {

    let productos = [
        'Manzanas',
        'Peras',
        'Piñas'
    ]

    return (
        <>
            <h1> Lista de compras</h1>
            <ul>
                {/* dentro de las llaves {} puedo poner código Javascript */}
                {
                    productos.map((producto) =>
                        <li>{producto}</li>
                    )
                }
            </ul>
            <input
                autoCorrect="texto corregido"
                type="text" />
            <button
                className="btn btn-primary"
                onClick={() => { console.log('ok') }}
            >
                Guardar Lista
            </button>
        </>
    )
}
export default MiPrimerComponente