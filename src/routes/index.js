import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Home from '../pages/Home';
import Sobre from '../pages/Componentes/Sobre';
import Servicos from '../pages/Componentes/Servicos';
import Galeria from '../pages/Componentes/Galeria';
import Agendamento from '../pages/Componentes/Agendamento';
import Localizacao from '../pages/Componentes/Localisacao';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/Sobre" component={Sobre} />
      <MyRoute exact path="/Servicos" component={Servicos} />
      <MyRoute exact path="/Galeria" component={Galeria} />
      <MyRoute exact path="/Agendamento" component={Agendamento} />
      <MyRoute exact path="/Localizacao" component={Localizacao} />
    </Switch>
  );
}
