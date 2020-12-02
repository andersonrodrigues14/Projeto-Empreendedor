/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {style} from './StyleMinhasVacinas';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {delMinhasVacinas} from '../../store/actions/minhasVacinas';
import EdtMinhasVacinas from './EdtMinhasVacinas';

class MinhasVacinas extends Component {
  state = {
    showEdtMinhasVacina: false,
  }
  delete =() =>{
    this.props.onDltMinhasVacina({minhasVacinasId: this.props.minhasVacinasId});
  }
  render() {
    const admMinhasVacinas = this.props.adm ?
    <View style={style.editContainer}>
          <Image source={{uri:this.props.imagem}} style={style.imagem} />
          <Icon
            style={style.searchIconInfo}
            size={23}
            color="#35AAFF"
          />
          <Icon
            style={style.searchIconInfo}
            name="pencil-alt"
            size={20}
            color="#35AAFF"
            onPress={()=> this.setState({showEdtMinhasVacina: true})}
          />
          <Icon
            style={style.searchIconInfo}
            name="trash"
            size={20}
            color="#35AAFF"
            onPress={(this.delete)}
          />
        </View> :  <View style={style.editContainer}>
          <Image source={{uri:this.props.imagem}} style={style.imagem} />
          <Icon
            style={style.searchIconInfo2}
            size={23}
            color="#35AAFF"
          />
          <Icon
            style={style.searchIconInfo2}
            size={20}
            color="#35AAFF"
          />
          <Icon
            style={style.searchIconInfo2}
            size={20}
            color="#35AAFF"
          />
        </View>;
    return (
      <View style={style.container}>
        {admMinhasVacinas}
        <Text style={style.textTitulo}>{this.props.nome}</Text>
        <Text style={style.textStyle}>{this.props.texto}</Text>

        <View style={style.container}>
          <Text style={style.textStyle}>
            Data Aplicação: {this.props.dtAplicacao}
          </Text>
          <Text style={style.textStyle}>
            Data Renovação: {this.props.dtRenovacao}
          </Text>
        </View>
        <EdtMinhasVacinas isVisible={this.state.showEdtMinhasVacina} minhasVacinasEdt={this.props.minhasVacinasEdt} onCancel={()=> this.setState({showEdtMinhasVacina: false})}/>
      </View>
    );
  }
}


//retorna dados para a tela
const mapStateToProps = ({user}) => {
  return {
    adm: user.adm,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDltMinhasVacina: minhasVacinas => dispatch(delMinhasVacinas(minhasVacinas)),
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(MinhasVacinas);
