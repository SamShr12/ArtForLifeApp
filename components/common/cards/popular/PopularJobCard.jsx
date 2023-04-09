import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'
import { checkImageUrl } from '../../../../utils'

// source = {{uri : checkImageUrl(item.image) ? item.image : "randomimage"}}

const PopularJobCard = ({item, selectedJob, handleCardPress, artUrl}) => {
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)}
    onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
      style={styles.logoContainer(selectedJob, item)}
      >
        <Image 
        source={artUrl}
        resizeMode='cover'
        style={styles.artImage}
        />
        </TouchableOpacity>
        <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.jobName(selectedJob, item)}>GodTier Art</Text>
          <Text style={styles.location}>Never made this tier art ever sheeesh</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard