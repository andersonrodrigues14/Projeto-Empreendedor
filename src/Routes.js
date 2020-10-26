/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';


import Login from './components/Login/Login';
import Home from './components/Home/Home';
import CreateUser from './components/CreateUser/CreateUser';
import ListaCamapanha from './components/CampanhaVacinacao/ListCampanhaVacinacao';
import ListaVacina from './components/Vacina/ListVacina';
import ListaCalendario from './components/CalendarioVacinacao/ListCalendario';
import ListaMinhasVacinas from './components/MinhasVacinas/ListMinhasVacinas';
import ListaInformacaoDoenca from './components/InformacaoDoencas/ListInformacaoDoenca';
import ListaFamily from './components/Family/ListFamily';
import Profile from './components/Profile/ListProfile';
import Mais from './components/More/More';
import Senha from './components/Senha/senha';


export default function App() {
  return (
<Router>
    <Stack key="root">
    <Scene key="login" component={Login} title="Login" hideNavBar={true} />
    <Scene key="home" component={Home} title="Home"  hideNavBar={true}/>
    <Scene key="listaCampanha" component={ListaCamapanha} title="Campanha Vacinação" hideNavBar={true}/>
    <Scene key="createUser" component={CreateUser} title="Create User" hideNavBar={true}/>
    <Scene key="listaVacina" component={ListaVacina} title="Lista Vacinas" hideNavBar={true}/>
    <Scene key="listaCalendario" component={ListaCalendario} title="Lista Calendario" hideNavBar={true}/>
    <Scene key="listaMinhasVacinas" component={ListaMinhasVacinas} title="Lista Minhas Vacinas" hideNavBar={true}/>
    <Scene key="listafamily" component={ListaFamily} title="Familia" hideNavBar={true}/>
    <Scene key="listainformacaodoenca" component={ListaInformacaoDoenca} title="Informação Doença" hideNavBar={true}/>
    <Scene key="dados" component={Profile} title="Profile" hideNavBar={true}/>
    <Scene key="mais" component={Mais} title="Mais" hideNavBar={true}/>
    <Scene key="senha" component={Senha} title="Senha" hideNavBar={true}/>
   </Stack>
</Router>

  );
}
