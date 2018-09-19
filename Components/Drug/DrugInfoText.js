import React from 'react'
import {Text} from 'react-native'
import {ResponsiveComponent, ResponsiveStyleSheet} from 'react-native-responsive-ui'

export default class DrugInfoText extends ResponsiveComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {style} = this
    const {width, height} = this.state.window
    return <Text style={style.text} text={this.props.text}/>
  }

  get style() {
    return ResponsiveStyleSheet.select([
      {
        query: {
          minHeight: 650
        },
        style: {
          text: {
            fontSize:16
          }
        }
      }, {
        query: {
          maxHeight: 650
        },
        style: {
          text: {
            alignSelf: 'center',
            fontSize:14
          }
        }
      }
    ])
  }
}
