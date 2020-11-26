import React from 'react'
import ListaCompras from './components/ListaCompras'
import InputItems from './components/InputItems'


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            listaCompras: [
                'Salchichon',
                'Peras',
                'Salsa de tomate'
            ]
        }
    }

    agregarItems = (item) => {
        this.setState(
            {
                listaCompras: [...this.state.listaCompras, item]
            }
        )

    }


    render() {
        return (
            <>
                <h1> Lista de compras</h1>
                <InputItems onSubmit={this.agregarItems} />
                <ListaCompras lista={this.state.listaCompras} />
                <hr />

            </>
        )
    }
}

export default App