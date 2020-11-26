import React, { useState } from 'react'
import ListaCompras from './components/ListaCompras'
import InputItems from './components/InputItems'
import Header from './components/Header'
import './App.css'


function App() {

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

export default App