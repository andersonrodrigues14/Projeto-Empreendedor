/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, Image, Text} from 'react-native';
import ModalFamilyUser from '../Family/ModalFamilyUser';

//Import Styles
import {style} from './StyleProfile';

//Criar o component
class Profile extends Component {
  state = {
    showFamiliares: false,
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
            onPress={() => this.setState({showFamiliares: true})}
          />
        </View>
        <View style={style.editContainer}>
          <Image source={{uri: this.props.imagem}} style={style.imageUser} />
        </View>

        <Text style={style.textTituloUser}>{this.props.nome}</Text>

        <ModalFamilyUser
          isVisible={this.state.showFamiliares}
          userId={this.props.userId}
          onCancel={() => this.setState({showFamiliares: false})}
        />
      </View>
    );
  }
}

export default Profile;
