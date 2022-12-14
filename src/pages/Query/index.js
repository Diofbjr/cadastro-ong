
import './dashboard.css';
import { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';

import { format } from 'date-fns';



import firebase from '../../services/firebaseConnection';
import Modal from '../../components/Modal';

const listRef = firebase.firestore().collection('customers').orderBy('created', 'desc');

export default function Query(){
  const [users, setUsers] = useState([]);

  const [showPostModal, setShowPostModal] = useState(false);
  const [detail, setDetail] = useState();
  



  function findCadastros(){
    firebase.firestore().collection('customers')
    .get()
    .then(snapshot =>{  
      setUsers(snapshot.docs.map((doc) => ({...doc.data(),id: doc.id }) ))
    })
  }
  findCadastros()



  function togglePostModal(user){
    setShowPostModal(!showPostModal) //trocando de true pra false
    setDetail(user);
  }





  
  return(
    <div>
      <Header/>

      <div className="content">
        <Title name="Consulta cadastro">
          <FiSearch size={25} />
        </Title>
      <div className='container'>

      <table>
        <thead>
          <th scope='col'>Nome</th>
          <th scope='col'>CPF</th>
          <th scope='col'>Setor</th>
        </thead>
        <tbody>
        {users.map(user => {
          return(
            <tr key={user.id}>
              <td data-label='Nome'>{user.nomeCompleto}</td>
              <td data-label='CPF'>{user.cpf}</td>
              <td data-label='Setor'>{user.setor}</td>
            </tr>
          )
        })}
        </tbody>
      </table>



      </div>

      {showPostModal && (
        <Modal
          conteudo={detail}
          close={togglePostModal}
        />
      )}

      </div>

      
    </div>
  )
}