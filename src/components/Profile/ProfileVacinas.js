/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {View, Image, Text} from 'react-native';
import ModalVacinasUser from '../MinhasVacinas/ModalVacinasUser';

//Import Styles
import {style} from './StyleProfile';

//Criar o component
class Profile extends Component {
  state = {
    showVacinas: false,
  };
  render() {
    return (
      <View style={style.InfoUser}>
        <View style={style.editContainerMenu}>
          <Icon
            style={style.searchIconInfo}
            //name="save"
            size={23}
            color="#35AAFF"
          />
          <Icon
            style={style.searchIconInfo}
            //name="pencil-alt"
            size={20}
            color="#35AAFF"
          />
          <Icon
            style={style.searchIconInfo}
            name="angle-right"
            size={30}
            color="#35AAFF"
            onPress={()=> this.setState({showVacinas: true})}
          />
        </View>
        <View style={style.editContainer}>
          <Image source={{uri: this.props.imagem}} style={style.imageUser} />
        </View>

        <Text style={style.textTituloUser} >
          {this.props.nome}
        </Text>
        <ModalVacinasUser isVisible={this.state.showVacinas}  userId={this.props.userId} onCancel={()=> this.setState({showVacinas: false})}/>
      </View>
    );
  }
}


export default Profile;
