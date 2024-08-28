import { View, Text, Image } from 'react-native'
import React from 'react'

interface ImageProps {
    imageSource: string
}

export default function ImageViewer({ imageSource }: any) {
  return (
    <Image source={imageSource}></Image>
  )
}