import React, { useState } from 'react'
import Header from '../components/Header'
import InputItems from '../components/InputItems'
import ListaCompras from '../components/ListaCompras'



const PageListaCompras = () => {

    const [listaCompras, setListaCompras] = useState([])

    let agregarItems = (item) => {
        setListaCompras([...listaCompras, item])
    }

    return (
        <>
            <Header />
            <div className="container">
                <h1> Lista de compras</h1>
                <InputItems onSubmit={agregarItems} />
                <ListaCompras lista={listaCompras} />
                <hr />
            </div>

        </>
    )
}

export default PageListaCompras
