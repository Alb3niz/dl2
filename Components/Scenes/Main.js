import React, {Component} from 'react'
import {View, KeyboardAvoidingView, TextInput, Text} from 'react-native'
import {ResponsiveComponent, ResponsiveStyleSheet} from 'react-native-responsive-ui'
import DrugController from '../Controllers/DrugController'
import Drug from '../Drug/Drug'

export default class Main extends ResponsiveComponent {

  constructor(props) {
    super(props)
  }

  renderDrugList(){
    drugList = DrugController.drugList
    return drugList.map(function(drug, index){
      return <Drug key={index} drugIcon={drug.icon} drugName={drug.name} drugQuantity={drug.quantity} drugPrice={drug.price} arrow={drug.arrow}/>
    }.bind(this))
  }

  render(){
    const {style} = this
    const {width, height} = this.state.window

    return(
      <KeyboardAvoidingView behavior="padding" enabled>
      <View style={style.mainView}>
        <View style={style.drugList}>
          {this.renderDrugList()}
        </View>
      </View>
    </KeyboardAvoidingView>
    )
  }

  get style() {
    return ResponsiveStyleSheet.select([
      {
        query: {
          minHeight: 650
        },
        style: {
          mainView:{
            height:'50%',
            width:'100%',
            backgroundColor:'skyblue',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
          },
          drugList:{
            justifyContent:'flex-start',
            flexDirection:'column',
            width:'100%',
            alignItems:'center'
          }
        }
      }, {
        query: {
          maxHeight: 650
        },
        style: {
          mainView:{
            height:'50%',
            width:'100%',
            backgroundColor:'powderblue'
          },
          drugList:{

          }
        }
      }
    ])
  }
}
