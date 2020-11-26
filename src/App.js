import React, { useState } from 'react'
import ListaCompras from './components/ListaCompras'
import InputItems from './components/InputItems'


function App () {

    const [listaCompras, setListaCompras] = useState([])

  let agregarItems = (item) => {
        setListaCompras([...listaCompras, item])
    }

        return (
            <>
                <h1> Lista de compras</h1>
                <InputItems onSubmit={agregarItems} />
                <ListaCompras lista={listaCompras} />
                <hr />

            </>
        )
}

export default App