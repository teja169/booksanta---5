import React, { Component } from 'react';
import {View, StyleSheet, Text,TouchableOpacity} from 'react-navigation'
import { DrawerItems } from 'react-navigation-drawer';

import firebase from 'firebase' ;


export default class CustomSideBarMnu extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <View style={styles.DrawerItemsContainer}>
                    <DrawerItems {...this.props}/>
                </View>
                <View style={styles.logOutContainer}>
                    <TouchableOpacity style={styles.logOutContainer}
                    onPress ={() =>{
                        this.props.navigation.navigate('WelcomeScreen')
                        firebase.auth().signOut()
                    }}>
                        <Text>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

var styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:0.8
    },
    logOutContainer : {
      flex:0.2,
      justifyContent:'flex-end',
      paddingBottom:30
    },
    logOutButton : {
      height:30,
      width:'100%',
      justifyContent:'center',
      padding:10
    },
    logOutText:{
      fontSize: 30,
      fontWeight:'bold'
    }
  })
  