import React, { Component } from 'react';
import {Image, ScrollView, View, Text} from 'react-native';
import styles from './EmptyComponentStyle';

export default function EmptyComponent () {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./images/empty.png')} />
      <Text style={styles.heading}>This room is vacant!</Text>
      <Text style={styles.text}>Please login into your dashboard admin, and assign some widgets ( accessories ) into this place, then you can control them from here.</Text>
    </View>
  )
}