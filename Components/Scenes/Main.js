import React, {Component} from 'react'
import {View, KeyboardAvoidingView, TextInput, Text, ScrollView} from 'react-native'
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
      console.log('Drug: ',index, drug.name, drug.arrow)
      return <Drug key={index} drug={drug}/>
    }.bind(this))
  }

  render(){
    const {style} = this
    const {width, height} = this.state.window

    return(
      <KeyboardAvoidingView behavior="padding" enabled>
      <View style={style.mainView}>
        <ScrollView style={style.drugList}>
          {this.renderDrugList()}
        </ScrollView>
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
            height:'100%',
            width:'100%',
            backgroundColor:'skyblue',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
          },
          drugList:{
            borderWidth:1,
            borderColor:'black',
            flexDirection:'column',
            width:'100%',
            height:'50%'
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
