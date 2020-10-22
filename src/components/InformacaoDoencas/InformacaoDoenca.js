/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {style} from './StyleInformacao';

export default class InformacaoDoenca extends Component {
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
        <Text style={style.textTitulo}>{this.props.titulo}</Text>
        <Text style={style.textStyle}>{this.props.texto}</Text>

        <View style={style.container}>
          <Text style={style.textStyle}>
            Data da Publicação: {this.props.dataPublicacao}
          </Text>
        </View>
      </View>
    );
  }
}
