
import './index.scss';

import {Link} from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-App">
      <h1 className='titulo'>
        Estudos de react 
         <i className='fa fa-heart' ></i>
      </h1>
      <br/>
      <h2>isabella é gatinha</h2>
  <ul>

    <li><Link to='/contato'>Ir para brasil</Link></li>

  </ul>

    </div>
  );
}

 
