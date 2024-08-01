import './index.scss'

import {Link} from 'react-router-dom';

export default function Contato() {

return(
    <div className='pagina-contato, pagina'  >
        <header className='cabecalho'>

        <Link to= '/' > 
        <i className='fa fa-arrow-left voltar'></i>
        </Link>
       
        <h1 className='titulo'>Brasil</h1>
        </header>
        
        <section className='secao'>
    
        <img className='icone' src='/assets/images/Brasil.avif' alt=''/>
        </section>

        
       
    </div>
)
}