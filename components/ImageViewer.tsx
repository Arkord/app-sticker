import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function ImageViewer({ source, selectedImage }: any) {
  const imageSource = selectedImage.length > 0 ? { uri: selectedImage } : source;

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