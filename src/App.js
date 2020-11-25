import ListaCompras from './components/ListaCompras'
import InputItems from './components/InputItems'

let listaCompras =  [
    'Salchichon', 
    'Peras',
    'Salsa de tomate'
]

let listaCompras2 = [
    'Manzanas',
    'Aguacates',
]

const agregarItems = (item) => {
    console.log(item, 'desde app.js')
}

function App() {
    return (
        <>
            <h1> Lista de compras</h1>
            <InputItems onChange = { agregarItems } />
            <ListaCompras lista={listaCompras} />
            <hr/>
            <ListaCompras lista={listaCompras2} />

        </>
    )
}

export default App