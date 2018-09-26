import React, {Component} from 'react'
import {View, KeyboardAvoidingView, TextInput, Text, ScrollView} from 'react-native'
import {ResponsiveComponent, ResponsiveStyleSheet} from 'react-native-responsive-ui'
import DrugController from '../Controllers/DrugController'
import Drug from '../Drug/Drug'
import BuyingDialog from '../BuyingDialog/BuyingDialog'

export default class Main extends ResponsiveComponent {

  state = {
    dialogShown: false
  }

  componentDidMount(){
    // console.log('Dialog Shown is: ', this.state.dialogShown)
  }

  constructor(props) {
    super(props)
  }

  renderDialog(){
    if(this.state.dialogShown){
      return <BuyingDialog onPress={() => this.hideDialog()}/>
    }
  }

  showDialog(){
    this.setState({dialogShown: true})
    // console.log('Changing dialog to: ', this.state.dialogShown)
  }

  hideDialog(){
    this.setState({dialogShown: false})
    // console.log('Changing dialog to: ', this.state.dialogShown)
  }

  renderDrugList(){
    drugList = DrugController.drugList
    return drugList.map(function(drug, index){
      return <Drug key={index} drug={drug} onPress={() => this.showDialog()}/>
    }.bind(this))
  }

  render(){
    return(
      <KeyboardAvoidingView behavior="padding" enabled>
      <View style={styles.mainView}>
        {this.renderDialog()}
        <ScrollView style={styles.drugList}>
          {this.renderDrugList()}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
    )
  }
}

const styles = {
  mainView:{
    height:'100%',
    width:'100%',
    backgroundColor:'skyblue',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  },
  drugList:{
    flexDirection:'column',
    width:'100%',
    height:'50%'
  }
}
