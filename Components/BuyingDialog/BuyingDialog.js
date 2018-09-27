import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import {ResponsiveComponent, ResponsiveStyleSheet} from 'react-native-responsive-ui'

export default class BuyingDialog extends ResponsiveComponent {
  constructor(props){
    super(props)
  }

  render(){
    const {style} = this
    const {width, height} = this.state.window
    return (<View style={style.mainView}>
      <View style={style.backgroundBlocker} onPress={this.props.onPress}/>
      <TouchableOpacity style={style.dialogContainer} onPress={this.props.onPress}>
        <Image source={this.props.icon} style={{height:25, width:25}}/>
        <Text>{this.props.name}</Text>
        <Text>{this.props.price}</Text>
        <Text>{this.props.quantity}</Text>
      </TouchableOpacity>
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
            width: '100%',
            height:'100%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'absolute',
            borderRadius: 6,
            shadowColor: '#000',
            shadowRadius: 2,
            shadowOffset: {width: 0,height: 5},
            shadowOpacity: 0.1,
            elevation: 3,
            zIndex:10
          },
          backgroundBlocker: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'grey',
            opacity: 0.8
          },
          dialogContainer: {
            backgroundColor:'white',
            borderRadius:6,
            height:200,
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
