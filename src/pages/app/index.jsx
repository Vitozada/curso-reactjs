
import './index.scss';

import {Link} from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-App pagina">
      <header className='cabecalho'>
      <h1 className='titulo'>
        Estudos de react 
         <i className='fa fa-heart' ></i>
      </h1>
      </header>

      
      <br/>
    

    <section className='secao'>

      <h1>
    Estudando ReactJS
      </h1>

      <input type="text" placeholder='Digite aqui'/>
      <br /><br />

      <ul>

    <li><Link to='/contato'>Ir para brasil</Link></li>
    <li><Link to='/eventos'>Ir para eventos</Link></li>

      </ul>
    </section>

  
    </div>
  );
}

 
