import React,{Component} from 'react';
import { View, Image, ScrollView, Button, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Block, Text } from 'expo-ui-kit'
import { Icon } from 'native-base';
import First from "./First"
class Welcome extends Component{
    render(navigation){
        return (
            <Block safe>
                <Block center bottom>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        scrollEnabled
                        scrollEventThrottle={16}
                        snapToAlignment="center"
                        decelerationRate={0}
                        showsHorizontalScrollIndicator={false} >
                        <Image style={{ marginTop: 15, width: 350, height: 350, }} source={require("./assets/1.gif")}>
                        </Image>
                    </ScrollView>
                </Block>
                <Block middle center>
                    <Text h3 semibold>
                        Secured,Forever.
                </Text>
                    <Text center caption gray margin={[10]}>
                        change Ip connect fast only just with Lp App
                </Text>
                </Block>
            </Block>
        );
    }
}export default Welcome;