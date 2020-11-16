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

import Campanha from './CampanhaVacinacao';
import Menu from '../Main/Main';
import {style} from './StyleListCampanha';
import AddCampanha from './AddCampanha';

class ListCamapanha extends Component {
  state = {
    showAddCampanha: false,
  }
  render(){
    const addCampanha = this.props.adm ?
    <TouchableOpacity style={style.btnAdicionar} onPress={() => this.setState({showAddCampanha: true})}>
      <View style={style.containerInfoRow}>
        <Text style={style.textRegister}>Adicionar Campanha</Text>
      </View>
    </TouchableOpacity> : null;
    return (
      <KeyboardAvoidingView style={style.background}>
        <AddCampanha isVisible={this.state.showAddCampanha} onCancel={()=> this.setState({showAddCampanha: false})}/>
      <ImageBackground
        source={require('../../assets/fundo.png')}
        style={style.image}>
      <View style={style.containerLogo}>
        <Image
          source={require('../../assets/ListCampanha.png')}
          style={{width: 100, height: 95}}
        />
        <Text style={style.textTitulo}>Campanha de Vacinação</Text>
        </View>

        <View style={style.containerInfo}>
        {addCampanha}

            <TouchableOpacity
              style={style.btnRegister}
             >
               <Icon
                name="globe"
                size={40}
                color="#fff"
              />
              <View style={style.containerInfoRow}>
              <Text style={style.textRegister}>Fique por dentro das</Text>
                <Text style={style.textRegister}>campanhas que estão</Text>
                <Text style={style.textRegister}>acontecendo!</Text>
              </View>
            </TouchableOpacity>
          </View>

      <View style={style.container}>
      <FlatList  data={this.props.campanha}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <Campanha key={item.id} {...item} />} />
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
const mapStateToProps = ({user,campanha}) => {
  return {
    adm : user.adm,
    campanha: campanha.campanha,
  };
};


export default connect(mapStateToProps)(ListCamapanha);
