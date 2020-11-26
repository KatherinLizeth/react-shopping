import React, { useState } from 'react'
import './styles/InputItems.css'



function InputItems(props) {

    const [itemActual, setItemActual] = useState('')

    const handleChange = (event) => {
        setItemActual(event.target.value)
    }

    const handleSubmit = () => {
        props.onSubmit(itemActual)
        setItemActual('')

    }


    return (
        <>
            <input
                onChange={handleChange}
                className="form-control"
                value={itemActual}
                type="text" />
            <button
                className="btn btn-primary"
                onClick={handleSubmit}
            >
                Agregar item
            </button>
        </>
    )
}

export default InputItems
