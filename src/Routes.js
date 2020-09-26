/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';


import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import CreateUser from './components/CreateUser/CreateUser';
import ListaCamapanha from './components/CampanhaVacinacao/ListCampanhaVacinacao';
import ListaVacina from './components/Vacina/ListVacina';
import ListaCalendario from './components/CalendarioVacinacao/ListCalendario';
import ListaMinhasVacinas from './components/MinhasVacinas/ListMinhasVacinas';
import Familia from './components/Family/Family';
import Profile from './components/Profile/ListProfile';
import Mais from './components/More/More';

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
    <Scene key="familia" component={Familia} title="Familia" hideNavBar={true}/>
    <Scene key="dados" component={Profile} title="Profile" hideNavBar={true}/>
    <Scene key="mais" component={Mais} title="Mais" hideNavBar={true}/>
   </Stack>
</Router>

  );
}
