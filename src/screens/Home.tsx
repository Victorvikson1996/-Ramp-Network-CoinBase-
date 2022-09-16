import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { CButton } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Image
          style={styles.image}
          source={{
            uri: "https://i.imgur.com/9EEaSaS.png",
          }}
        />
        <Text style={styles.title}>Welcome to Coin Base</Text>
        <Text style={styles.subTitle}>Make your first investment today</Text>
        <CButton title="Get Started" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 250,
    width: 150,
    marginTop: 40,
  },
  title: {
    fontSize: 21,
    fontWeight: "600",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  subTitle: {
    fontSize: 17,
    marginBottom: 24,
    color: Colors.subtitle,
  },
});
export default Home;
