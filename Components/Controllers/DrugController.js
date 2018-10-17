import React, {Component} from 'react'
import {View, Alert} from 'react-native'

var DrugController = {
  drugList:[
    {icon:require('../../Images/Drugs/test.png'), name:'Cocaine', quantity:12, price:20, arrow:require('../../Images/Drugs/test-arrow.png')},
    {icon:require('../../Images/Drugs/test.png'), name:'Heroin', quantity:200, price:30, arrow:require('../../Images/Drugs/test-arrow.png')},
    {icon:require('../../Images/Drugs/test.png'), name:'Peyote', quantity:489, price:7, arrow:require('../../Images/Drugs/test-arrow.png')},
    {icon:require('../../Images/Drugs/test.png'), name:'PCP', quantity:32, price:1400, arrow:require('../../Images/Drugs/test-arrow.png')},
    {icon:require('../../Images/Drugs/test.png'), name:'Kat', quantity:234, price:10700, arrow:require('../../Images/Drugs/test-arrow.png')},
  ],

  setQuantityToBuy(amount){
    console.log('AMOUNT I BOUGHT: ', amount)
  },

  buyDrug(i, quantityBought){
    //rest the amount of drug bought
    this.drugList[i].price = (this.drugList[i].quantity - quantityBought)

    //add it to the stash
  },
}

export default DrugController
