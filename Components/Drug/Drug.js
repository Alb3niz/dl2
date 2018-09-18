import React from 'react'
import {TextInput, View} from 'react-native'
import {ResponsiveComponent, ResponsiveStyleSheet} from 'react-native-responsive-ui'
import DrugIcon from './DrugIcon'
import DrugInfoText from './DrugInfoText'

export default class Drug extends ResponsiveComponent {

  constructor(props) {
    super(props)
  }

  render() {
    const {style} = this
    const {width, height} = this.state.window
    return <View style={style.container}>
      <View style={style.drugIcon}>
        <DrugIcon/>
      </View>

      <View style={style.drugName}>
        <DrugInfoText text={this.props.drugName}/>
      </View>

      <View style={style.drugPrice}>
        <DrugInfoText text={this.props.drugPrice}/>
      </View>

      <View style={style.drugPriceIcon}>
        <DrugInfoText text={this.props.drugPrice}/>
      </View>


    </View>
  }

  get style() {
    return ResponsiveStyleSheet.select([
      {
        query: {
          minHeight: 650
        },
        style: {
          container: {
            width:'100%',
            height:50,
            flexDirection:'row',
            justifyContent:'space-evenly',
            alignItems:'center'
          },
        }
      }, {
        query: {
          maxHeight: 650
        },
        style: {
          container: {
            width:'100%',
            height:50,
            flexDirection:'row',
            justifyContent:'space-evenly',
            alignItems:'center'
          },
        }
      }
    ])
  }
}
