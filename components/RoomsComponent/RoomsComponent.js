import React, { Component } from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import { merge } from 'lodash';

function Box (props) {

  let styles = {
    box: {
        width: 225,
        backgroundColor: 'white',
        flex: 1,
        margin:5,
        padding:20,
        borderRadius: 20
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'left'
    },
    image: {
        marginTop: 10
    },
    quickInfo: {
        marginTop: 10,
        fontWeight: 'bold',
        color: '#567182'
    },
    accessoriesInfo: {
        color: '#798E9C'
    }
  }

  const activeStyles = {
      text: {
          color: 'rgb(74, 109,249)'
      }
  }

  const icons = {
      '~default': {
          'active': require('./images/default-active.png'),
          'deactive': require('./images/default.png')
      },
      'bed': {
          'active': require('./images/bed-active.png'),
          'deactive': require('./images/bed.png')
      },
      'livingroom': {
          'active': require('./images/livingroom-active.png'),
          'deactive': require('./images/livingroom.png')
      },
      'kitchen': {
          'active': require('./images/kitchen-active.png'),
          'deactive': require('./images/kitchen.png')
      }
  };

  const defaultIcon = require('./images/bed-active.png');
  const icon = props.icon ? props.icon : '~default';
  const iconName = props.isactive ? 'active' : 'deactive';

  if (props.isactive) {
    styles = merge(styles , activeStyles);
  }

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.box}>
      <View >
        <Text style={styles.text}>
          {props.title}
        </Text>
        <Image style={styles.image} source={icons[icon][iconName]} />
        <Text style={styles.quickInfo}>5 Accessories Installed</Text>
        <Text style={styles.accessoriesInfo}>AC is on, TV is on, Lights is on</Text>
      </View>
    </TouchableOpacity>
  );
}
export class RoomsComponent extends Component {
    
    render () {
        let styles = {
            container: {
                flexDirection: 'row',
                paddingBottom: 10
            }
        }
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
                <Box title='Bedroom' icon='bed' isactive={true} onPress={() => this.props.navigate('Places')} />
                <Box title='Kitchen' icon='kitchen' />
                <Box title='Living Room' icon='livingroom' />
                <Box title='Parking lot' />
            </ScrollView>
        );
    }
}