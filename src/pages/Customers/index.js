
import { useState } from 'react';
import './customers.css';
import Title from '../../components/Title';
import Header from '../../components/Header';
import firebase from '../../services/firebaseConnection';
import { FiUser } from 'react-icons/fi';

import { toast } from 'react-toastify';

export default function Customers() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [etnia, setEtnia] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [nomeMae, setNomeMae] = useState('');
  const [nis, setNis] = useState('');
  const [pis, setPis] = useState('');
  const [genero, setGenero] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [contatoEmail, setContatoEmail] = useState('');
  const [contato, setContato] = useState('');
  const [contatoEmergencia, setContatoEmergencia] = useState('');
  const [cep, setCep] = useState('');
  const [cidadeReside, setCidadeReside] = useState('');
  const [bairroReside, setBairroReside] = useState('');
  const [endereco, setEndereco] = useState('');
  const [casaNumero, setCasaNumero] = useState('');
  const [setor, setSetor] = useState('');
  const [programaSocial, setprogramaSocial] = useState('');
  const [renda, setRenda] = useState('');
  const [membrosFamilia, setMembrosFamilia] = useState('');





  async function handleAdd(e) {
    e.preventDefault();

    if (nomeCompleto !== '' && rg !== '' && cpf !== '' && dataNascimento !== '' && etnia !== '' && genero !== '' && estadoCivil !== '' && escolaridade !== '' && nacionalidade !== '' && estado !== '' && cidade !== '' && nomeMae !== '' && nis !== '' && pis !== '' && contatoEmail !== '' && contato !== '' && contatoEmergencia !== '' && cep !== '' && cidadeReside !== '' && bairroReside !== '' && endereco !== '' && casaNumero !== '' && setor !=='' && programaSocial !=='' && renda !== '' && membrosFamilia !=='') {
      await firebase.firestore().collection('customers')
        .add({
          nomeCompleto: nomeCompleto,
          rg: rg,
          cpf: cpf,
          dataNascimento: dataNascimento,
          etnia: etnia,
          genero: genero,
          estadoCivil: estadoCivil,
          escolaridade: escolaridade,
          nacionalidade: nacionalidade,
          estado: estado,
          cidade: cidade,
          nomeMae: nomeMae,
          nis: nis,
          pis: pis,
          contatoEmail: contatoEmail,
          contato: contato,
          contatoEmergencia: contatoEmergencia,
          cep:cep,
          cidadeReside: cidadeReside,
          bairroReside: bairroReside,
          endereco: endereco,
          casaNumero:casaNumero,
          setor: setor,
          programaSocial: programaSocial,
          renda: renda,
          membrosFamilia: membrosFamilia
        })
        .then(() => {
          setNomeCompleto('');
          setRg('');
          setCpf('');
          setDataNascimento('');
          setEtnia('');
          setGenero('');
          setEstadoCivil('');
          setEscolaridade('');
          setNacionalidade('');
          setEstado('');
          setCidade('');
          setNomeMae('');
          setNis('');
          setPis('');
          setContatoEmail('');
          setContato('');
          setContatoEmergencia('');
          setCep('');
          setCidadeReside('');
          setBairroReside('');
          setEndereco('');
          setCasaNumero('');
          setSetor('');
          setprogramaSocial('');
          setRenda('');
          setMembrosFamilia('');

          toast.info('Docente cadastrada com sucesso!');
        })
        .catch((error) => {
          console.log(error);
          toast.error('Erro ao cadastrar essa docente.');
        })
    } else {
      toast.error('Preencha todos os campos!')
    }

  }








  return (
    <div>
      <Header />
      
      <div className="content">
        <Title name="Cadastramento">
          <FiUser size={25} />
        </Title>
        
        <div className="container">
          <form className="form-profile customers" onSubmit={handleAdd}>
            <label>Nome Completo</label>
            <input type="text" placeholder="Nome Completo" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} />

            <label>RG</label>
            <input type="text" placeholder="Registro Geral" value={rg} onChange={(e) => setRg(e.target.value)} />

            <label>CPF</label>
            <input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />

            <label>Data de Nascimento</label>
            <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />

            <label>Etnia</label>
            <select value={etnia} onChange={(e) => setEtnia(e.target.value)}>
              <option value="" selected disabled>-----------</option>
              <option value="Branca">Branca</option>
              <option value="Indigena">Indigena</option>
              <option value="Negra">Negra</option>
              <option value="Parda">Parda</option>
            </select>

            <label>G??nero</label>
            <select value={genero} onChange={(e) => setGenero(e.target.value)}>
              <option value="" selected disabled>-----------</option>
              <option value="Homem Cis">Homem cis</option>
              <option value="Mulher Cis">Mulher cis</option>
              <option value="Homem Trans">Homem trans</option>
              <option value="Mulher Cis">Mulher trans</option>
              <option value="N??o Bin??rio">N??o Bin??rio</option>
            </select>

            <label>Estado Civil</label>
            <select value={estadoCivil} onChange={(e) => setEstadoCivil(e.target.value)}>
              <option value="" selected disabled>--------</option>
              <option value="Casada(o)">Casada(o)</option>
              <option value="Divorciada(o)">Divorciada(o)</option>
              <option value="Solteira(o)">Solteira(o)</option>
              <option value="Viuva(o)">Viuva(o)</option>
            </select>

            <label for="">Escolaridade:</label>
            <select value={escolaridade} onChange={(e) => setEscolaridade(e.target.value)}>
              <option value="" selected disabled>------------------------</option>
              <option value="Educa??ao Infantil">Educa????o Infantil</option>
              <option value="Ensino Fundamental Incompleto">Ensino Fundamental Incompleto</option>
              <option value="Ensino Fundamental Completo">Ensino Fundamental Completo</option>
              <option value="Ensino Fundamental Completo">Ensino M??dio Incompleto</option>
              <option value="Ensino M??dio Completo">Ensino M??dio Completo</option>
              <option value="Gradua????o Completa">Gradua????o Completa</option>
              <option value="Gradua????o Incompleta">Gradua????o Incompleta</option>
              <option value="P??s-Gradua????o Incompleta">P??s-Gradua????o Incompleta</option>
              <option value="P??s-Gradua????o Completa">P??s-Gradua????o Completa</option>
              <option value="Mestrado Incompleto">Mestrado Incompleto</option>
              <option value="Mestrado Completo">Mestrado Completo</option>
              <option value="Doutorado Incompleto">Doutorado Incompleto</option>
              <option value="Doutorado Completo">Doutorado Completo</option>
            </select>



            <label>Nacionalidade</label>
            <input type="text" placeholder="Pa??s que nasceu" value={nacionalidade} onChange={(e) => setNacionalidade(e.target.value)} />

            <label>Estado</label>
            <input type="text" placeholder="Estado que nasceu" value={estado} onChange={(e) => setEstado(e.target.value)} />

            <label>Cidade</label>
            <input type="text" placeholder="Cidade que nasceu" value={cidade} onChange={(e) => setCidade(e.target.value)} />

            <label>Nome da M??e</label>
            <input type="text" placeholder="Nome da m??e" value={nomeMae} onChange={(e) => setNomeMae(e.target.value)} />

            <label>NIS</label>
            <input type="text" placeholder="N?? NIS" value={nis} onChange={(e) => setNis(e.target.value)} />

            <label>PIS</label>
            <input type="text" placeholder="N?? PIS" value={pis} onChange={(e) => setPis(e.target.value)} />





            <label>E-mail</label>
            <input type="text" placeholder="email@email.com" value={contatoEmail} onChange={(e) => setContatoEmail(e.target.value)} />

            <label>Contato</label>
            <input type="text" placeholder="(xx)xxxxx-xxxx" value={contato} onChange={(e) => setContato(e.target.value)} />

            <label>N?? de Emergencia</label>
            <input type="text" placeholder="(xx)xxxxx-xxxx" value={contatoEmergencia} onChange={(e) => setContatoEmergencia(e.target.value)} />

            <label>CEP</label>
            <input type="text" placeholder="xxxxx-xxx" value={cep} onChange={(e) => setCep(e.target.value)} />

            <label>Cidade</label>
            <input type="text" placeholder="Cidade que mora" value={cidadeReside} onChange={(e) => setCidadeReside(e.target.value)} />

            <label>Bairro</label>
            <input type="text" placeholder="Bairro que mora" value={bairroReside} onChange={(e) => setBairroReside(e.target.value)} />

            <label>Endere??o</label>
            <input type="text" placeholder="Endere??o que reside" value={endereco} onChange={(e) => setEndereco(e.target.value)} />

            <label>N?? da Casa</label>
            <input type="text" placeholder="N??" value={casaNumero} onChange={(e) => setCasaNumero(e.target.value)} />

            <label>Setor:</label>
            <select value={setor} onChange={(e) => setSetor(e.target.value)}>
              <option value="">--------</option>
              <option value="Aluna">Aluna</option>
              <option value="Coordena????o">Coordena????o</option>
              <option value="Doador(a)">Doador(a)</option>
              <option value="Financeiro">Financeiro</option>
              <option value="Psic??loga(o)">Psic??loga(o)</option>
              <option value="Recursos Humanos">Recursos Humanos</option>
              <option value="Servi??os Gerais">Servi??os Gerais</option>
              <option value="Volunt??ria(o)">Volunt??ria(o)</option>
            </select>

        <label>Programa Social:</label>
        <select value={programaSocial} onChange={(e) => setprogramaSocial(e.target.value)}>
            <option value="">-------------</option>
            <option value="Auxilio Brasil">Auxilio Brasil</option>
            <option value="Bolsa Fam??lia">Bolsa Fam??lia</option>
            <option value="Bolsa Verde">Bolsa Verde</option>
            <option value="Carteira de Idoso">Carteira de Idoso</option>
            <option value="Nenhum">Nenhum</option>
            <option value="Tarifa Social">Tarifa Social</option>
        </select>

        <label>Membros da F??milia</label>
        <input type="text" placeholder="N?? de membros com quem mora" value={membrosFamilia} onChange={(e) => setMembrosFamilia(e.target.value)} />

        <label for="">Renda:</label>
        <select value={renda} onChange={(e) => setRenda(e.target.value)}>
          <option value="">--------------------</option>
          <option value="At?? 1 sal??rio m??nimo">At?? 1 sal??rio m??nimo</option>
          <option value="At?? 2 sal??rio m??nimo">At?? 2 sal??rios m??nimos</option>
          <option value="At?? 3 sal??rio m??nimo">At?? 3 sal??rios m??nimos</option>
          <option value="Mais de 4 sal??rios m??nimos">Mais de 4 sal??rios m??nimos</option>
        </select>


            <button type="submit">Cadastrar</button>

          </form>
        </div>

      </div>

    </div>
  )
}