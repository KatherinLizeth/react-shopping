import React from 'react'



function InputItems(props) {


    const handleChange = (event) => {
        props.onChange(event.target.value)
    } 



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

export default InputItems
