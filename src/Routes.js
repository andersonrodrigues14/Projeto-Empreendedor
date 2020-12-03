/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import ListaCamapanha from './components/CampanhaVacinacao/ListCampanhaVacinacao';
import ListaVacina from './components/Vacina/ListVacina';
import ListaCalendario from './components/CalendarioVacinacao/ListCalendario';
import ListaMinhasVacinas from './components/MinhasVacinas/ListMinhasVacinas';
import ListaMinhasVacinasAdm from './components/MinhasVacinas/ListMinhasVacinasAdm';
import ListaInformacaoDoenca from './components/InformacaoDoencas/ListInformacaoDoenca';
import ListaFamily from './components/Family/ListFamily';
import ListaFamilyAdm from './components/Family/ListFamilyAdm';
import Profile from './components/Profile/ListProfile';
import Mais from './components/More/More';
import Senha from './components/Senha/senha';
import Cadastro from './components/Cadastro/Cadastro';
import EdtVacina from './components/Vacina/EdtVacina';
import User from './components/Profile/ListUser';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="login"
            component={Login}
            title="Login"
            hideNavBar={true}
            initial={true}
          />
          <Scene key="home" component={Home} title="Home" hideNavBar={true} />
          <Scene
            key="listaCampanha"
            component={ListaCamapanha}
            title="Campanha Vacinação"
            hideNavBar={true}
          />
          <Scene
            key="listaVacina"
            component={ListaVacina}
            title="Lista Vacinas"
            hideNavBar={true}
          />
          <Scene
            key="listaCalendario"
            component={ListaCalendario}
            title="Lista Calendario"
            hideNavBar={true}
          />
          <Scene
            key="listaMinhasVacinas"
            component={ListaMinhasVacinas}
            title="Lista Minhas Vacinas"
            hideNavBar={true}
          />
          <Scene
            key="listaMinhasVacinasadm"
            component={ListaMinhasVacinasAdm}
            title="Lista Minhas Vacinas Adm"
            hideNavBar={true}
          />
          <Scene
            key="listafamily"
            component={ListaFamily}
            title="Familia"
            hideNavBar={true}
          />
          <Scene
            key="listafamilyadm"
            component={ListaFamilyAdm}
            title="ListaFamilyAdm"
            hideNavBar={true}
          />
          <Scene
            key="listainformacaodoenca"
            component={ListaInformacaoDoenca}
            title="Informação Doença"
            hideNavBar={true}
          />
          <Scene
            key="dados"
            component={Profile}
            title="Profile"
            hideNavBar={true}
          />
          <Scene key="mais" component={Mais} title="Mais" hideNavBar={true} />
          <Scene
            key="senha"
            component={Senha}
            title="Senha"
            hideNavBar={true}
          />
          <Scene
            key="cadastro"
            component={Cadastro}
            title="Cadastro"
            hideNavBar={true}
          />
          <Scene key="edtvacina" component={EdtVacina} title="EdtVacina" />
          <Scene key="user" component={User} title="User" hideNavBar={true} />
        </Stack>
      </Router>
    );
  }
}
