import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function ImageViewer({ placeholder, source }: any) {
  const imageSource = source ? { uri: source } : placeholder;
  console.log(placeholder, source, imageSource);
  
  return (
    <Image source={imageSource} style={styles.image} />
  )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
});