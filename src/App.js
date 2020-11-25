import ListaCompras from './components/ListaCompras'
import AgregarItems from './components/AgregarItems'

let listaCompras =  [
    'Salchichon', 
    'Peras',
    'Salsa de tomate'
]

let listaCompras2 = [
    'Manzanas',
    'Aguacates',
]


function App() {
    return (
        <>
            <h1> Lista de compras</h1>
            <AgregarItems />
            <ListaCompras lista={listaCompras} />
            <hr/>
            <ListaCompras lista={listaCompras2} />

        </>
    )
}

export default App