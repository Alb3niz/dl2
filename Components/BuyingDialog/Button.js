import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {ResponsiveComponent, ResponsiveStyleSheet} from 'react-native-responsive-ui'

export default class Button extends ResponsiveComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {style} = this
    const {width, height} = this.state.window
    return <TouchableOpacity style={style.responsiveButton} onPress={this.props.onPress}>
      <LinearGradient style={style.linearGradient} colors={['#0f7dff', '#0161D1']}>
        <Text style={style.buttonText}>{this.props.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  }

  get style() {
    return ResponsiveStyleSheet.select([
      {
        query: {
          minHeight: 650
        },
        style: {
          responsiveButton: {
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            elevation: 3,
            borderRadius: 6,
            width: 120,
            height: 50,
            shadowColor: '#000000',
            shadowRadius: 10,
            shadowOffset: {
              width: 0,
              height: 5
            },
            shadowOpacity: 0.15,
            marginLeft: 18,
            marginRight: 18
          },
          buttonText: {
            alignSelf: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize: 19,
            fontWeight: '800',
            paddingTop: 10,
            paddingBottom: 10
          },
          linearGradient: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6
          }
        }
      }, {
        query: {
          maxHeight: 650
        },
        style: {
          responsiveButton: {
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            elevation: 3,
            borderRadius: 6,
            width: 100,
            height: 45,
            shadowColor: '#000000',
            shadowRadius: 10,
            shadowOffset: {
              width: 0,
              height: 5
            },
            shadowOpacity: 0.15,
            marginLeft: 18,
            marginRight: 18
          },
          buttonText: {
            alignSelf: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize: 16,
            fontWeight: '800',
            paddingTop: 10,
            paddingBottom: 10
          },
          linearGradient: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6
          }
        }
      }
    ])
  }
}
