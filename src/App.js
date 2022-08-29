import { useState } from 'react';
import Banner from './components/Banner'
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#a60157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7eb'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]) //o ...colaborador seria como dizer 'pegue todas as informações já existentes do state colaborador mais tal coisa' como por exemplo nessa situação estamos setando o state colaborador como todas as informações já existentes nele mais o novo colaborador que será inserido
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={ colaborador => aoNovoColaboradorAdicionado(colaborador) }/>

      {times.map((time) => <Time 
                              key={time.nome} 
                              nome={time.nome} 
                              corPrimaria={time.corPrimaria} 
                              corSecundaria={time.corSecundaria} 
                              colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                            /> )}

    </div>
  );
}

export default App;
