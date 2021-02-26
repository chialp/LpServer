import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import{createStackNavigator}from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button ,Container, Header, Content, ListItem, Icon, Left, Body, Right, Switch,Fab, Footer, FooterTab, Image } from 'native-base';
import Fabs from './fabs'
import {DrawerContent} from './DrawerContent'
import Test from './test';
const stack=createStackNavigator();
function HomeScreen ({navigation}) {
  return(
    <Container >
      <Header style={{backgroundColor:'#f4511e'}}>
        <Button style={{  backgroundColor:'#f4511e',marginRight: 300,borderWidth:1,borderColor:"white" }}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <Icon  name="menu"></Icon>
        </Button>
      </Header>
     <View style={{flex:2}}>
       <Fabs></Fabs>
     </View>
    </Container>
  )
}
function SettingsScreen() {
  return (
      
  <Test></Test>
  );
}

function TabNavigator(){
  return(
    <Tab.Navigator 
    screenOptions={    
      ({ route }) => ({
       Header: { visible: false },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === 'Home') {
              iconName = focused
                ? 'apps'
                : 'apps-outline';
            } else if (route.name === 'Settings') {
              iconName = focused 
              ? 'ios-list-box' 
              : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
>
  <Tab.Screen screenOptions={{headerTitle:false}}  name="Home" component={HomeScreen} />
  <Tab.Screen name="Settings" component={SettingsScreen} />
</Tab.Navigator>
  )
}
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
export default function First() {
  return (
    <NavigationContainer  independent={true}>
     <Drawer.Navigator 
      drawerContent={props => <DrawerContent {...props}/>}
     
     >
        <Drawer.Screen 
        name="Vpn>" component={TabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}