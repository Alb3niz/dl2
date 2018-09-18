import React, {Component} from 'react'
import {View} from 'react-native'
import {ResponsiveComponent, ResponsiveStyleSheet} from 'react-native-responsive-ui'
import DrugController from '../Controllers/DrugController'

export default class Main extends ResponsiveComponent {
  render(){
    const {style} = this
    const {width, height} = this.state.window
    console.log('Drug List is: ', DrugController.drugList)

    return(

      <View style={style.mainView}>

      </View>
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
            backgroundColor:'powderblue'
          },
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
        }
      }
    ])
  }
}
