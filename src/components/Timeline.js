import '../styles/timeline.css'
import '../index.css'
import Cabecalho from './Cabecalho'
import Mensagens from './Mensagens'
import ImportDeImg from './ImportDeImg'
import Rodape from './Rodape'


export default function Timeline() {
    
    return (
        <div className='feed'>
          <Cabecalho />
          <Mensagens />
          <ImportDeImg />
          <Rodape />
        </div>
    )
}