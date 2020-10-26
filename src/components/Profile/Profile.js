/* eslint-disable prettier/prettier */
//import
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {View, Image, TextInput} from 'react-native';

//Import Styles
import {style} from './StyleProfile';

//Criar o component
export default class Profile extends Component {
  render() {
    return (
      <View style={style.InfoUser}>

        <View style={style.editContainerMenu}>

        <Icon
            style={style.searchIconInfo}
            name="save"
            size={23}
            color="#35AAFF"
          />
          <Icon
            style={style.searchIconInfo}
            name="pencil-alt"
            size={20}
            color="#35AAFF"
          />
          <Icon
            style={style.searchIconInfo}
            name="trash"
            size={20}
            color="#35AAFF"
          />
        </View>

        <View style={style.editContainer}>
          <Image source={this.props.imagem} style={style.imageUser} />
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
