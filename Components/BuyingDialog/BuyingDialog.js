import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {ResponsiveComponent, ResponsiveStyleSheet} from 'react-native-responsive-ui'

export default class BuyingDialog extends ResponsiveComponent {
  constructor(props){
    super(props)
  }

  render(){
    const {style} = this
    const {width, height} = this.state.window
    return (
      <View style={style.dialogContainer}>
        <Text>This is a dialog</Text>
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
          dialogContainer: {
            backgroundColor:'white',
            borderRadius:5,
            width:'80%',
            flexDirection:'column',
            justifyContent:'space-evenly',
            alignItems:'center',
          }
        }
      }, {
        query: {
          maxHeight: 650
        },
        style: {
          dialogContainer: {
            backgroundColor:'white',
            borderRadius:5,
            width:'80%',
            flexDirection:'column',
            justifyContent:'space-evenly',
            alignItems:'center',
          },
        }
      }
    ])
  }
}
