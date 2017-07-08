import React from 'react';
import { merge } from 'lodash';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import icons from './RoomIcons';
import style, { activeStyles } from './RoomsComponentStyle';

export function RoomBox (props) {
  let place = props.room;

  const defaultIcon = require('./images/bed-active.png');
  const icon = place.icon ? place.icon : '~default';
  const iconName = place.isactive ? 'active' : 'deactive';
  const styles = place.isactive ? merge({}, style, activeStyles) : style;

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