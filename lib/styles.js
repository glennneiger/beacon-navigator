'use strict';

import {StyleSheet} from 'react-native';

module.exports = {};

module.exports.styles = StyleSheet.create({
  container:{
  },
  header: {
    backgroundColor: "#428bca"
  },
  headerIcon:{
    color:"#ffffff"
  },
  title: {
    color:"#ffffff",
    fontSize:20,
    fontFamily:"sans-serif-medium"
  },
  content:{
    margin:20
  },
  text:{
    textAlign: 'center'
  },
  pageHeading:{
    marginBottom:20
  },
  listHeader:{
    //backgroundColor: "#000"
  },
  listHeaderTitle: {
    //color:"#000",
    //fontFamily:"sans-serif",
    //fontWeight:"bold",
    //fontSize:16,
  },
  footer:{
    /* align child button on the right-side of the screen */
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  button:{
    height:40,
    marginRight:13,
    marginBottom:10,
    borderRadius:100
  }
});
