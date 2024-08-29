import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import * as ImagePicker from "expo-image-picker";

import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import { useState } from "react";

const imageSource = require("./assets/images/background-image.png");

export default function App() {
  const [selectedImage, setSelectedImage] = useState('');

  const imagePickerAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    });

    if(!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
    }
    else {
      alert('You did not select an image!');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer source={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Chose a photo" theme="primary" onPress={imagePickerAsync}></Button>
        <Button label="Use this photo"></Button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  defaultText: {
    color: "#fff",
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});
