//import Datos from "./components/Datos";
//import Lista from "./components/Lista";
//import BarraMenu from "./components/BarraMenu";

/*import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BarraMenu from "./components/Barra/BarraMenu";
import Hoteles from "./components/Paginas/Hoteles";
//import Rutas from "./routes/Rutas";


function App() {
  return (
    
   
    <div>
      <Router>
      <BarraMenu/>
      <Switch>
        <Route path="/" exact component={BarraMenu}/>
        <Route path="/hoteles" component={Hoteles}/>
      </Switch>
      </Router>
      
      </div>
    
  );
}

export default App;*/

// App.js

import React from 'react';
//import Rutas from './routes/Rutas';
import Home from './pages/Home';
import {BrowserRouter} from 'react-router-dom';
import Rutas from './routes/Rutas';
function App() {
  return (

    <div>
     <Rutas/>
    </div>
  
  );
}

export default App;
