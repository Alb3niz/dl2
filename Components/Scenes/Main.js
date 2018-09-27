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

  selectedDrug = {
    icon:'',
    name:'',
    quantity:'',
    price:''
  }

  componentDidMount(){
    // console.log('Dialog Shown is: ', this.state.dialogShown)
  }

  constructor(props) {
    super(props)
  }

  renderDialog(drug){
    if(this.state.dialogShown){
      return <BuyingDialog
        icon={this.selectedDrug.icon}
        name={this.selectedDrug.name}
        price={this.selectedDrug.price}
        quantity={this.selectedDrug.quantity}
        onPress={() => this.hideDialog()}/>
    }
  }

  showDialog(drug){
    this.selectedDrug.icon = drug.icon
    this.selectedDrug.name = drug.name
    this.selectedDrug.quantity = drug.quantity
    this.selectedDrug.price = drug.price
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
      return <Drug key={index} drug={drug} onPress={() => this.showDialog(drug)}/>
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
