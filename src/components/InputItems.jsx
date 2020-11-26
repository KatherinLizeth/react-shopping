import React from 'react'



function InputItems(props) {

    let itemAtual = ''

    const handleChange = (event) => {
        itemAtual = event.target.value
    }

    const handleSubmit = () => {
        props.onSubmit(itemAtual)
    }


    return (
        <>
            <input
                onChange={handleChange}
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
