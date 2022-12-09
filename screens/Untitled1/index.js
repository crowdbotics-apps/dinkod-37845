import { CheckBox } from "react-native-elements";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
        <Pressable onPress={() => navigation.navigate("Untitled2")}><ScrollView contentContainerStyle={{
        backgroundColor: '#f0f0f1',
        padding: 10,
        position: 'relative',
        flex: 1
      }} style={styles.tmNSAINY}><View style={styles.IOnAvDiP}></View></ScrollView></Pressable>
    <TextInput style={styles.jQVPyjeu}></TextInput><CheckBox title="Like it" style={styles.lGIVAlLD} checked={true}></CheckBox></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  tmNSAINY: {
    borderRadius: 40
  },
  IOnAvDiP: {
    width: 80,
    height: 80,
    backgroundColor: "#E4E4E4",
    borderRadius: 40
  },
  jQVPyjeu: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 178,
    height: 43,
    left: 63,
    top: 281
  },
  lGIVAlLD: {
    position: "absolute",
    width: 183,
    height: 69,
    top: 504
  }
});
export default Untitled1;