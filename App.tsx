import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const imageSource = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={imageSource} style={styles.image}  />
      </View>
      <Text style={styles.normalText}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalText: {
    color: '#fff'
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18
  }
});
