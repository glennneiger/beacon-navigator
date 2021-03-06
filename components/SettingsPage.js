import React from 'react';
import {Text} from 'react-native';
import {Container, Header, Content, Button, Icon, Title, List, ListItem, Radio} from 'native-base';

import {styles} from "../lib/styles";

const SettingsPage = React.createClass({
  getInitialState: function(){
    return {
      modes:[
        {
          id: "detection",
          name:"Detection Mode",
          selected: true,
          homeRouteName: "Home"
        },
        //{
        //  id: "auto-detect",
        //  name:"Auto-detection Mode",
        //  selected: true,
        //  homeRouteName: "Auto"
        //},
        {
          id: "journey",
          name:"Journey Mode",
          selected: false,
          homeRouteName: "Journeys"
        }
      ]
    }
  },
  componentWillMount: function(){  console.log("MENU WILL MOUNT")  },
  componentDidMount: function(){  console.log("MENU DID MOUNT")  },
  componentWillReceiveProps: function(nextProps){  console.log("MENU WILL RECEIVE PROPS")  },
  componentWillUpdate: function(nextProps, nextState){  console.log("MENU WILL UPDATE")  },
  componentDidUpdate: function(prevProps, prevState){  console.log("MENU DID UPDATE")  },
  componentWillUnmount: function(){  console.log("MENU WILL UNMOUNT")  },

  render: function(){
    var component = this;

    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Button transparent onPress={this.handleSettingsButtonPress}>
            <Icon name="ios-home" style={styles.headerIcon}/>
          </Button>
          <Title></Title>
        </Header>

        <Content style={styles.content}>
          <Text style={styles.pageHeading}>Please select a use case ...</Text>
          <List>
            {
              this.state.modes.map(function(mode){
                return (
                  <ListItem key={mode.id} onPress={function(){  component.handleRadioSelect(mode)  } /* need this wrapper function to prevent inner function from being executed on render */}>
                    <Radio selected={mode.selected} />
                    <Text>{mode.name}</Text>
                  </ListItem>
                )
              })
            }
          </List>
        </Content>
      </Container>
    );
  },

  handleSettingsButtonPress: function(){
    console.log("PRESSED SETTINGS BUTTON AGAIN")
    this.goHome()
  },

  handleRadioSelect: function(selectedMode){
    console.log("SELECTED MODE: "+ selectedMode.id)
    var modes = this.state.modes;
    modes.map(function(mode){
      if (mode.id == selectedMode.id) {
        mode.selected = true;
      } else {
        mode.selected = false;
      }
      return mode;
    })
    console.log(modes)
    this.setState({modes: modes});
  },

  goHome: function(){
    var selectedMode = this.state.modes.filter(function(mode){  return mode.selected == true; })[0];
    var component = this;
    this.props.navigator.push({
      name: selectedMode.homeRouteName,
      type: "Menu"
    })
  }
});

module.exports = SettingsPage;
