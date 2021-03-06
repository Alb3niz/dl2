import React from 'react'
import {Image} from 'react-native'
import {ResponsiveComponent, ResponsiveStyleSheet} from 'react-native-responsive-ui'

export default class ArrowIcon extends ResponsiveComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {style} = this
    const {width, height} = this.state.window
    return <Image style={style.responsiveImage} source={this.props.source}/>
  }

  get style() {
    return ResponsiveStyleSheet.select([
      {
        query: {
          minHeight: 650
        },
        style: {
          responsiveImage: {
            width:25,
            height:25,
          }
        }
      }, {
        query: {
          maxHeight: 650
        },
        style: {
          responsiveImage: {
            width:15,
            height:15,
          }
        }
      }
    ])
  }
}
