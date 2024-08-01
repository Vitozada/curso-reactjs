import './index.scss'
import {Link} from 'react-router-dom'

export default function Eventos() {
    return(

        <div className='pagina-eventos pagina'   >
            <header className='cabecalho' >

            <Link to= '/'><i className='fa fa-arrow-left voltar'></i></Link>


                <h1>ReactJS | Eventos </h1>
                
            </header>

            <section  className='secao'  >   
            <h1>Entendendo eventos</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum voluptas cupiditate, quaerat maxime inventore minus neque quis atque velit magni quos quam et, veritatis iure nostrum suscipit nobis ab?</p>

        <input type="text" placeholder='digite something here' />


            <select>
            <option>Selecione </option>
            <option> Item A </option>
            <option> Item B </option>

            </select>
            <div className='grupo'>

            <input type="checkbox" /> Opção 1
            <input type="checkbox" /> Opção 2
            </div>

            <div className='grupo'>

                <div>
                <input type="radio"  name='gpo'/> Opção 1
                </div>

                <div>
                <input type="radio" name= 'gpo'/> Opção 2
                </div>

            </div>

            <button>Clique aqui</button>


            </section>

        </div>



    )
}