
import './modal.css';
import { Link } from 'react-router-dom';

import { FiX, FiEdit2} from 'react-icons/fi';


export default function Modal({conteudo, close}){
  return(
    <div className="modal">
      <div className="container">
        <button className="close" onClick={ close }>
          <FiX size={23} color="#FFF" />
        </button>
          <h2>Extras</h2>

        <div className>

        
        </div>


      </div>
    </div>
  )
}