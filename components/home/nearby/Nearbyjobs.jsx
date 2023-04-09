import React, {useState} from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import styles from './nearbyjobs.style'
import {COLORS} from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch'
import { useRouter } from 'expo-router'

const Nearbyjobs = ({artUrl}) => {
  const router = useRouter()

  const { isLoading, error} = useFetch()
  const data = [1,2,3,4]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Arts</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text>Loading Failed, Something went wrong !</Text>
        ) : (
          data?.map((el) => (
            <NearbyJobCard key={el} el={el}
            artUrl={artUrl}
            handleNavigate={() => router.push(`/art-detail/${el}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs