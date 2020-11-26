import React from 'react'

function MiPrimerComponente(props) {

    return (
        <>
            <ul>
                {
                    props.lista.map((producto, idx) => 
                        <li key={idx}> {producto}</li>
                    )
                }
                
            </ul>
            <button>Eliminar ultimo item</button>
        </>
    )
}
export default MiPrimerComponente