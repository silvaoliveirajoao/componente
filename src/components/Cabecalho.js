import '../styles/cabecalho.css'
import Botao from './Botao'
import Usuario from './Usuario'

export default function Cabecalho() {
    return (
        <div className='corpo-cabecalho'>
        <Usuario />
        <Botao />
        </div>
    )
}