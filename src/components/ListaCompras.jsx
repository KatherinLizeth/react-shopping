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
        </>
    )
}
export default MiPrimerComponente