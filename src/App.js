import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Primera from './components/Primera';
import Segunda from './components/Segunda';
import Tercera from './components/Tercera';
import Cuarta from './components/Cuarta';
import Quinta from './components/Quinta';
import Sexta from './components/Sexta';
import Septima from './components/Septima';
import Octava from './components/Octava';
import Novena from './components/Novena';

import Navegacion from './components/Navegacion'
function App() {
  return (
      <Router>
        
        <div className="container">
          <h1 className="text-center mt-3 mb-3 text-white">Galería</h1>
        </div>
          <Route path="/Primera" component={Primera} />
          <Route path="/Segunda" component={Segunda} />
          <Route path="/Tercera" component={Tercera} />
          <Route path="/Cuarta" component={Cuarta} />
          <Route path="/Quinta" component={Quinta} />
          <Route path="/Sexta" component={Sexta} />
          <Route path="/Septima" component={Septima} />
          <Route path="/Octava" component={Octava} />
          <Route path="/Novena" component={Novena} />
          
          <Navegacion/>
      </Router>
  );
}

export default App;
