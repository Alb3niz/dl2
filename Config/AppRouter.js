import React from 'react'
import {Scene, Router, Stack} from 'react-native-router-flux'
import Main from '../Components/Scenes/Main'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'


const AppRouter = () => {
  return (<Router getSceneStyle={() => ({elevation: 0, shadowOpacity: 0, borderBottomWidth: 0, shadowColor: 'transparent'})}>

    <Scene key="root" hideNavBar={true} transitionConfig={() => ({
        screenInterpolator: (props) => {
          switch (props.scene.route.params.direction) {
            case 'vertical':
              return CardStackStyleInterpolator.forVertical(props);
            case 'fade':
              return CardStackStyleInterpolator.forFade(props);
            case 'none':
              return CardStackStyleInterpolator.forInitial
            case 'horizontal':
            default:
              return CardStackStyleInterpolator.forHorizontal(props)
          }
        }
      })}>

      <Scene key='mainScene'
        direction='fade'
        gestureEnabled={false}
        panHandlers={null}
        component={Main}
        title='Main'
        hideNavBar='true'
        initial="initial"/>

    </Scene>

  </Router>)
}

export default AppRouter
