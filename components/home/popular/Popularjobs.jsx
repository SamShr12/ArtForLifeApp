import React, {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import styles from './popularjobs.style'
import {COLORS, SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { useRouter } from 'expo-router'
import useFetch from '../../../hook/useFetch'

const Popularjobs = ({artUrl}) => {
  const router = useRouter()
  const {data, isLoading, error} = useFetch()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Art</Text>
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
          <FlatList 
          data={[1,2,3,4]}
          renderItem={(item) => (
            <PopularJobCard
            artUrl = {artUrl} 
            item={item}
            />
          )}
          keyExtractor={item => item?.job_id}
          contentContainerStyle={{columnGap: SIZES.medium}}
          horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs