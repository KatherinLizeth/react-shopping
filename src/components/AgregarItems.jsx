import React from 'react'

const handleChange = ( event ) => {
    console.log(event.target.value)
} 


function AgregarItems() {
    return (
        <>
            <input
                onChange = { handleChange }
                type="text" />
            <button
                className="btn btn-primary"
                onClick={() => { console.log('ok') }}
            >
                Agregar item
            </button>
        </>
    )
}

export default AgregarItems
