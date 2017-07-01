import React from 'react';
import { merge } from 'lodash';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';

export function RoomBox (props) {
  let place = props.room;
  let styles = {
    box: {
        width: 150,
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
  const icon = place.icon ? place.icon : '~default';
  const iconName = place.isactive ? 'active' : 'deactive';

  if (place.isactive) {
    styles = merge(styles , activeStyles);
  }

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.box}>
      <View >
        <Text style={styles.text}>
          {place.name}
        </Text>
        <Image style={styles.image} source={icons[icon][iconName]} />
        <Text style={styles.quickInfo}>5 Accessories Installed</Text>
        <Text style={styles.accessoriesInfo}>AC is on, TV is on, Lights is on</Text>
      </View>
    </TouchableOpacity>
  );
}