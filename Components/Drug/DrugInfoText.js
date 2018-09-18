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
    return <Text style={style.responsiveImage} text={this.props.text}/>
  }

  get style() {
    return ResponsiveStyleSheet.select([
      {
        query: {
          minHeight: 650
        },
        style: {
          responsiveImage: {
            alignSelf: 'center',
            width:65,
            height:65,
          }
        }
      }, {
        query: {
          maxHeight: 650
        },
        style: {
          responsiveImage: {
            alignSelf: 'center',
            width:50,
            height:50,
          }
        }
      }
    ])
  }
}
