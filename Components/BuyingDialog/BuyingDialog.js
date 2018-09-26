import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {ResponsiveComponent, ResponsiveStyleSheet} from 'react-native-responsive-ui'

export default class BuyingDialog extends ResponsiveComponent {
  constructor(props){
    super(props)
  }

  render(){
    const {style} = this
    const {width, height} = this.state.window
    return (
      <TouchableOpacity style={style.dialogContainer} onPress={this.props.onPress}>
        <Text>This is a dialog</Text>
      </TouchableOpacity>
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
            borderRadius:6,
            width:'80%',
            flexDirection:'column',
            justifyContent:'space-evenly',
            alignItems:'center',
            position:'absolute',
            zIndex:1
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
