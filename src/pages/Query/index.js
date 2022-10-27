
import './dashboard.css';
import { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import firebase from '../../services/firebaseConnection';
import Modal from '../../components/Modal';

const listRef = firebase.firestore().collection('customers').orderBy('created', 'desc');

export default function Query(){
  const [chamados, setChamados] = useState([]);


  
  return(
    <div>
      <Header/>

      <div className="content">
        <Title name="Consulta cadastro">
          <FiSearch size={25} />
        </Title>

        {chamados.length === 0 ? (
          <div className="container dashboard">
            <span>Nenhum cadastro realizado...</span>

            <Link to="/customers" className="new">
              <FiPlus size={25} color="#FFF" />
              Novo cadastro
            </Link>
          </div>
        )  : (
          <>
            

        

          </>
        )}

      </div>

    </div>
  )
}