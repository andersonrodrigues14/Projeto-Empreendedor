/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  FlatList,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Calendario from './Calendario';
import Menu from '../Main/Main';
import {style} from './StyleListCalendario';
import AddCalendario from './AddCalendario';


class ListCalendario extends Component {
  state = {
    showAddCalendario: false,
  }

  render(){
    const addCalendario = this.props.adm ?
    <TouchableOpacity style={style.btnInsert} onPress={() => this.setState({showAddCalendario: true})}>
    <Text style={style.textInsert}>Adicionar Data</Text>
    </TouchableOpacity> : null;

    return (
      <KeyboardAvoidingView style={style.background}>
        <AddCalendario isVisible={this.state.showAddCalendario} onCancel={()=> this.setState({showAddCalendario: false})}/>
      <ImageBackground
        source={require('../../assets/fundo.png')}
        style={style.image}>
      <View style={style.containerLogo}>
        <Image
          source={require('../../assets/ListCalendario.png')}
          style={{width: 95, height: 90}}
        />
        <Text style={style.textTitulo}>Calendário de Vacinas</Text>
        </View>

        <View style={style.containerInfo}>
            {addCalendario}
            <TouchableOpacity style={style.btnFilter}>
              <Text style={style.textFilter}>Mês do Calendário</Text>
              <Icon
                name="angle-down"
                size={20}
                color="#020202"
              />
            </TouchableOpacity>
          </View>

      <View style={style.container}>
      <FlatList  data={this.props.calendario}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <Calendario key={item.id} {...item} />} />
      </View>
      <View>
        <Menu/>
      </View>
      </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

//retorna dados para a tela
const mapStateToProps = ({user,calendario}) => {
  return {
    adm : user.adm,
    calendario: calendario.calendario,
  };
};

export default connect(mapStateToProps)(ListCalendario);
