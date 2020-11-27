import { BrowserRouter, Route } from 'react-router-dom' 
import './App.css'
import PageListaCompras from './pages/PageListaCompras'
import Products from './pages/Products'


function App() {
    return (
        <BrowserRouter>
            <Route path="/productos" component={Products}  />
            <Route path="/lista-compras" component={PageListaCompras}  />
        </BrowserRouter>
    )
}

export default App