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
    index:'',
    icon:'',
    name:'',
    quantity:'',
    price:''
  }

  constructor(props) {
    super(props)
  }

  doSomething(index, amountToBuy, totalPrice){
    DrugController.buyDrug(index, amountToBuy, totalPrice)
    this.hideDialog()
  }

  renderDialog(drug, index){
    if(this.state.dialogShown){
      return <BuyingDialog
        index={this.selectedDrug.index}
        icon={this.selectedDrug.icon}
        name={this.selectedDrug.name}
        price={this.selectedDrug.price}
        quantity={this.selectedDrug.quantity}
        onBuyClicked={this.doSomething.bind(this)}
        onPress={() => this.hideDialog()}/>
    }
  }
  showDialog(drug, index){
    this.selectedDrug.index = index
    this.selectedDrug.icon = drug.icon
    this.selectedDrug.name = drug.name
    this.selectedDrug.quantity = drug.quantity
    this.selectedDrug.price = drug.price
    this.setState({dialogShown: true})
  }
  hideDialog(){
    this.setState({dialogShown: false})
    // console.log('Changing dialog to: ', this.state.dialogShown)
  }

  renderDrugList(){
    drugList = DrugController.drugList
    return drugList.map(function(drug, index){
      return <Drug key={index} drug={drug} onPress={() => this.showDialog(drug, index)}/>
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
        <ScrollView style={styles.stash}>

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
    backgroundColor:'#d3d3d3',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  },
  drugList:{
    backgroundColor:'#6890b4',
    flexDirection:'column',
    width:'100%',
    height:'40%'
  },
  stash:{
    backgroundColor:'#f0b1ff',
    flexDirection:'column',
    width:'100%',
    height:'40%'
  }
}
