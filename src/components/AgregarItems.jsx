import React from 'react'

function AgregarItems() {
    return (
        <>
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

export default AgregarItems
