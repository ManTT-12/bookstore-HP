import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
 
export default function Item({title, rightSubtitle}) {
  return (
    <View>
      <Text style={{color: 'black'}}>{title}</Text>
      <Text style={{color: 'orangered'}}>{rightSubtitle}</Text>
    </View>
  );
}
