import Banner from './components/Banner'
import CampoTexto from './components/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto text='Nome:' name='nome' placeholder='Digite o seu nome'/>
    </div>
  );
}

export default App;
