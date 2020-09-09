/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {style} from './StyleCalendario';

export default class Calendario extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.editContainer}>
          <Image source={this.props.imagem} style={style.imagem} />
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
        <Text style={style.textTitulo}>{this.props.nome}</Text>
        <Text style={style.textStyle}>{this.props.texto}</Text>

        <View style={style.container}>
          <Text style={style.textStyle}>
            Data da Vacina: {this.props.dtVacina}
          </Text>
        </View>
      </View>
    );
  }
}
