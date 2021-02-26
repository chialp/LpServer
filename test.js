import * as React from 'react';
import { Text, View } from 'react-native';
import{createStackNavigator}from "@react-navigation/stack"
import { Button ,Container, Header, Content, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';
import { StackRouter } from 'react-navigation';

function Test() {
    return (
        
      <Container>
        <Header>
          
        </Header>
      <Content>
        <ListItem icon>
          <Left>
            <Button title="1" style={{ backgroundColor: "#FF9501" }}>
              <Icon active name="airplane" />
            </Button>
          </Left>
          <Body>
            <Text>Airplane Mode</Text>
          </Body>
          <Right>
            <Switch value={false} />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button title="2" style={{ backgroundColor: "#007AFF" }}>
              <Icon active name="wifi" />
            </Button>
          </Left>
          <Body>
            <Text>Wi-Fi</Text>
          </Body>
          <Right>
            <Text>GeekyAnts</Text>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button title="3" style={{ backgroundColor: "#007AFF" }}>
              <Icon active name="bluetooth" />
            </Button>
          </Left>
          <Body>
            <Text>Bluetooth</Text>
          </Body>
          <Right>
            <Text>On</Text>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
      </Content>
    </Container>
    );
  }
  export default Test;