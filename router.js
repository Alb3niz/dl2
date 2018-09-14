import React, {Component} from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import AppRouter from './Config/AppRouter'

class router extends Component {
  componentDidMount() {
    console.disableYellowBox = true;
  }
  render() {
    return <SafeAreaView style={styles.safeArea}>
      <AppRouter/>
    </SafeAreaView>
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  }
})

export default router
