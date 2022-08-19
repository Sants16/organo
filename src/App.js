import { useState } from 'react';
import Banner from './components/Banner'
import Formulario from './components/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores({...colaborador, colaborador}) //o ...colaborador seria como dizer 'pegue todas as informações já existentes do state colaborador mais tal coisa' como por exemplo nessa situação estamos setando o state colaborador como todas as informações já existentes nele mais o novo colaborador que será inserido
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={ colaborador => aoNovoColaboradorAdicionado(colaborador) }/>
    </div>
  );
}

export default App;
