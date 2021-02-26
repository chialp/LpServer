import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
    Avatar, Title, Caption, Drawer, Paragraph, Text, Switch, TouchableRipple
} from 'react-native-paper'
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as React from 'react';
import { Icon } from 'native-base';


export function DrawerContent(props) {
    const[isdarktheme,setisdarktheme]=React.useState(false);
const toggleTheme=()=>{
    setisdarktheme(!isdarktheme);
}

    return (
        
        <View style={{ flex: 2 }}>
            <DrawerContentScrollView {...props}>
                <View >
                    <Avatar.Image style={{ marginLeft: 100 }}
                        source={require("./assets/1.gif")}>

                    </Avatar.Image>
                </View>
                <View>
                    <Title style={{ marginLeft: 70 }}>Lp Vpn Server</Title>
                    <Caption style={{ marginLeft: 70 }}>Sefe Secure With Lp</Caption>

                </View>
                <View>
                    <Drawer.Section style={{ marginBottom: 15, borderTopWidth: 2, borderTopColor: "#f4511e" }}>
                        <DrawerItem
                            label="Home"
                            icon={() => (
                                <Icon
                                    name="home"
                                />
                            )}
                            onPress={() => {
                                props.navigation.navigate("Home")

                            }}
                        >
                        </DrawerItem>
                        <DrawerItem
                            label="Settings"
                            icon={() => (
                                <Icon
                                    name="settings"
                                />
                            )}
                            onPress={() => {
                                props.navigation.navigate("Settings"
                                
                                
                                )
                            }}
                        >
                        </DrawerItem>
                        <DrawerItem
                            label="Server"
                            icon={() => (
                                <Icon
                                    name="server"
                                />
                            )}
                            onPress={() => {
                                props.navigation.navigate('')
                                
                            }}
                        >
                        </DrawerItem>
                      
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={()=>{toggleTheme()}}>
                            <View style={{flexDirection:'row'}}> 
                                <Text style={{marginLeft:10}}>Dark Theme</Text>
                                <View pointerEvents="none">
                                <Switch value={isdarktheme}  style={{marginLeft:150}}></Switch>

                                </View>
                            </View>

                        </TouchableRipple>

                    </Drawer.Section>

                </View>

            </DrawerContentScrollView>
            <Drawer.Section style={{ marginBottom: 15, borderTopWidth: 2, borderTopColor: "#f4511e" }}>
                <DrawerItem
                    label="Exit"
                    icon={() => (
                        <Icon
                            name="exit"
                        />
                    )}
                    onPress={() => {
                    }}
                >
                </DrawerItem>
            </Drawer.Section>
        </View>
    )
}