import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'
import { checkImageUrl } from '../../../../utils'

// source = {{uri : checkImageUrl(item.image) ? item.image : "randomimage"}}

const NearbyJobCard = ({el, handleNavigate, artUrl}) => {
  return (
    <TouchableOpacity style={styles.container}
    onPress={handleNavigate}
    >
      <TouchableOpacity
      style={styles.logoContainer}
      >
        <Image 
        source={artUrl}
        resizeMode='cover'
        style={styles.artImage}
        />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.jobName}>GodTier Art</Text>
          <Text style={styles.jobType}>Get rekt</Text>
        </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard