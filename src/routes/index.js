import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Home from '../pages/Home';
import Sobre from '../pages/Components/Sobre';
import Servicos from '../pages/Components/Servicos';
import Galeria from '../pages/Components/Galeria';
import Agendamento from '../pages/Components/Agendamento';
import Localizacao from '../pages/Components/Localisacao';

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
