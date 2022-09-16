import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Animated,
  TouchableHighlight,
} from "react-native";
import React, { FC } from "react";
import Colors from "../constants/Colors";
import * as Haptics from "expo-haptics";

interface CButtonProps {
  title: string;
}

const CButton: FC<CButtonProps> = ({ title }) => {
  const animatedvalue = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(animatedvalue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animatedvalue, {
      toValue: 1,
      useNativeDriver: true,
    }).start;
  };

  const animatedStyle = {
    transform: [{ scale: animatedvalue }],
  };

  // function onPressIn() {
  //   Animated.spring(animatedvalue, {
  //     toValue: 0.9,
  //     useNativeDriver: true,
  //   }).start;
  // }
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <TouchableHighlight
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
        style={{ borderRadius: 10 }}
        activeOpacity={0.1}
      >
        <View style={styles.button}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableHighlight>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    borderRadius: 8,
  },
  button: {
    width: "100%",
    height: 57,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.cbBlue,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CButton;
