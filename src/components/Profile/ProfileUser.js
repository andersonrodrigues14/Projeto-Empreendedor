/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {View, Image, TextInput} from 'react-native';

//Import Styles
import {style} from './StyleProfile';

//Criar o component
class ProfileUser extends Component {
  render() {
    return (
      <View style={style.InfoUser}>
        <View style={style.editContainerMenu}>
          <Icon style={style.searchIconInfo2} size={23} color="#35AAFF" />
          <Icon style={style.searchIconInfo2} size={20} color="#35AAFF" />
          <Icon style={style.searchIconInfo2} size={20} color="#35AAFF" />
        </View>
        <View style={style.editContainer}>
          <Image source={{uri: this.props.imagem}} style={style.imageUser} />
        </View>

        <TextInput style={style.input} placeholder="Nome" editable={false}>
          {this.props.nome}
        </TextInput>
        <TextInput style={style.input} placeholder="CPF" editable={false}>
          {this.props.cpf}
        </TextInput>
        <TextInput style={style.input} placeholder="N° SUS" editable={false}>
          {this.props.sus}
        </TextInput>
        <TextInput style={style.input} placeholder="EMAIL" editable={false}>
          {this.props.email}
        </TextInput>

        <View style={style.editContainer2}>
          <TextInput
            style={style.inputColunm}
            placeholder="Dt Nasc."
            editable={false}>
            {this.props.dtnascimento}
          </TextInput>
          <TextInput
            style={style.inputColunm}
            placeholder="Sangue"
            editable={false}>
            {this.props.sangue}
          </TextInput>
        </View>

        <TextInput style={style.input} placeholder="OBS" editable={false}>
          {this.props.obs}
        </TextInput>
      </View>
    );
  }
}

//retorna dados para a tela
const mapStateToProps = ({user}) => {
  return {
    adm: user.adm,
    nome: user.nome,
    email: user.email,
    imagem: user.imagem,
    id: user.id,
    cpf: user.cpf,
    sus: user.sus,
    dtnascimento: user.dtnascimento,
    sangue: user.sangue,
    obs: user.obs,
  };
};

export default connect(mapStateToProps)(ProfileUser);
