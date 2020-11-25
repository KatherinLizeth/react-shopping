import React from 'react'

function MiPrimerComponente(props) {

    return (
        <>
            <ul>
                {/* dentro de las llaves {} puedo poner código Javascript */}
                {
                    props.lista.map((producto) =>
                        <li>{producto}</li>
                    )
                }
            </ul>
        </>
    )
}
export default MiPrimerComponente