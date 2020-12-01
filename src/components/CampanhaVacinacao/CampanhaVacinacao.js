/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {delCamapanha} from '../../store/actions/campanha';
import {style} from './StyleCampanha';
import { Actions } from 'react-native-router-flux';
import EdtCampanha from './EdtCampanha';

class CamapanhaVacinacao extends Component {
  state = {
    showEdtCampanha: false,
  }

  delete =() =>{
    this.props.onDltCampanha({campanhaId: this.props.campanhaId});
    Actions.home();
  }
  render() {
    const admCampanha = this.props.adm ?
    <View style={style.editContainer}>
          <Image source={{uri: this.props.imagem}} style={style.imagem} />
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
            onPress={()=> this.setState({showEdtCampanha: true})}
          />
          <Icon
            style={style.searchIconInfo}
            name="trash"
            size={20}
            color="#35AAFF"
            onPress={(this.delete)}
          />
        </View> :  <View style={style.editContainer}>
          <Image source={{uri: this.props.imagem}} style={style.imagem} />
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
            style={style.searchIconInfo}
            size={20}
            color="#35AAFF"
          />
        </View>;

    return (
      <View style={style.container}>
        {admCampanha}
        <Text style={style.textTitulo}>{this.props.nome}</Text>
        <Text style={style.textStyle}>{this.props.texto}</Text>

        <View style={style.container}>
          <Text style={style.textStyle}>
            Data de Inicio: {this.props.dtInicio}
          </Text>
          <Text style={style.textStyle}>
            Data de cadastro: {this.props.dtCadastro}
          </Text>
        </View>
        <EdtCampanha isVisible={this.state.showEdtCampanha} campanhaEdt={this.props.campanhaEdt} onCancel={()=> this.setState({showEdtCampanha: false})}/>
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
    onDltCampanha: campanha => dispatch(delCamapanha(campanha)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(CamapanhaVacinacao);
