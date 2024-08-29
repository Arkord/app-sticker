import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function ImageViewer({ source }: any) {
  return (
    <Image source={source} style={styles.image} />
  )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
});
