import React, { Component } from 'react';
import { Container, Header, View, Button, Fab } from 'native-base';
import Icon from 'react-native-ico';
export default class Fabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  render() {
    return (  
        <View style={{ flex: 1,marginRight: 140 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#f4511e' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="arrow-up" group="font-awesome"/>
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="united-states-of-america" group="flags" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="azores-islands" group="flags" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="spain" group="flags" />
            </Button>
          </Fab>
        </View>
    );
  }
}