import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import {ResponsiveComponent, ResponsiveStyleSheet} from 'react-native-responsive-ui'
import Slider from 'react-native-slider'
import Button from './Button'
import DrugController from '../Controllers/DrugController'

export default class BuyingDialog extends ResponsiveComponent {

  constructor(props) {
    super(props)
  }

  values = {
    quantityToBuy: 0,
    drugPrice: this.props.price,
    get priceToPay(){return this.drugPrice * this.quantityToBuy}
  }

  quantityToBuy = 0

  render() {
    const {style} = this
    const {width, height} = this.state.window

    return (<View style={style.mainView}>

      <TouchableOpacity style={style.backgroundBlocker} onPress={this.props.onPress}/>

      <View style={style.dialogContainer}>

        <View style={style.one}>
          <Image source={this.props.icon} style={{height: 25,width: 25}}/>
          <Text>{this.props.name}</Text>
        </View>

        <View style={style.two}>
          <Text>Available: {this.props.quantity}</Text>
          <Text>Price: {this.props.price}</Text>
        </View>

        <View style={style.three}>
          <Slider
            value={this.values.quantityToBuy}
            trackStyle={style.sliderTrackStyle}
            thumbStyle={style.sliderThumbStyle}
            minimumTrackTintColor='#eecba8'
            minimumValue={0}
            maximumValue={this.props.quantity}
            step={1}
            onValueChange={quantityToBuy => {
              this.values.quantityToBuy = quantityToBuy
              this.setState({change: true})
            }}/>
          </View>

          <View style={style.four}>
            <Text>To Buy: {this.values.quantityToBuy}</Text>
            <Text>To Pay: {this.values.priceToPay}</Text>
          </View>

          <View style={style.five}>
            <Button
              text='Buy'
              onPress={this.props.onBuyClicked}/>
          </View>

      </View>
    </View>)
  }
  get style() {
    return ResponsiveStyleSheet.select([
      {
        query: {
          minHeight: 650
        },
        style: {
          mainView: {
            width: '100%',
            height: '100%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'absolute',
            borderRadius: 6,
            elevation: 3,
            zIndex: 10
          },
          one:{
            backgroundColor:'powderblue',
            width:'50%',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly',
          },
          two:{
            backgroundColor:'skyblue',
            width:'80%',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly',
          },
          three:{
            backgroundColor:'powderblue',
            width:'80%',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly',
          },
          four:{
            backgroundColor:'skyblue',
            width:'80%',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly',
          },
          backgroundBlocker: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'grey',
            opacity: 0.8
          },
          dialogContainer: {
            backgroundColor: 'white',
            borderRadius: 6,
            height: 200,
            width: '80%',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            position: 'absolute',
            zIndex: 1
          },
          sliderTrackStyle: {
            height: 10,
            width: 150,
            borderRadius: 3,
            backgroundColor: '#d0d0d0'
          },
          sliderThumbStyle: {
            width: 10,
            height: 20,
            borderRadius: 5,
            backgroundColor: '#eb6e1b'
          }
        }
      }, {
        query: {
          maxHeight: 650
        },
        style: {
          mainView: {
            width: '100%',
            height: '100%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'absolute',
            borderRadius: 6,
            elevation: 3,
            zIndex: 10
          },
          one:{
            backgroundColor:'powderblue',
            width:'50%',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly',
          },
          two:{
            backgroundColor:'skyblue',
            width:'80%',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly',
          },
          three:{
            backgroundColor:'powderblue',
            width:'80%',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly',
          },
          four:{
            backgroundColor:'skyblue',
            width:'80%',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly',
          },
          backgroundBlocker: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'grey',
            opacity: 0.8
          },
          dialogContainer: {
            backgroundColor: 'white',
            borderRadius: 6,
            height: 200,
            width: '80%',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            position: 'absolute',
            zIndex: 1
          },
          sliderTrackStyle: {
            height: 10,
            width: 150,
            borderRadius: 3,
            backgroundColor: '#d0d0d0'
          },
          sliderThumbStyle: {
            width: 10,
            height: 20,
            borderRadius: 5,
            backgroundColor: '#eb6e1b'
          }
        }
      }
    ])
  }
}
