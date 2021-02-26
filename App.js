import * as React from 'react';
import { View, Image, ScrollView, Button, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Block, Text } from 'expo-ui-kit'
import First from "./First"
import WelCome from "./Welcome"
//صفحه خوش آمدگویی
function FirstPage({ navigation }) {
    return (
        <Block>
        <WelCome></WelCome>
        <Block marginBottom={50} flex={false} style={{ alignContent: "center", justifyContent: "center", }} marginLeft={10} center bottom >
                    <Button color="#f4511e"
                     title="                          Lets Start                          "
                    onPress={() => navigation.navigate("Home")}>
                    </Button>
                </Block>
        </Block>
        
        );
}
//صفحه اصلی
function HomeScreen({ navigation }) {
    return (
        <First></First>  
    );
}

const Stack = createStackNavigator();
function App() {
    return (
        <NavigationContainer>
            
            <Stack.Navigator >
                <Stack.Screen  options={{headerTitle:false,headerLeft: null,}}
                 
                    name="WelCome" component={FirstPage}>    
                    </Stack.Screen>
                <Stack.Screen   options={{headerTitle:false,headerLeft: null,}} name="Home" component={HomeScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;