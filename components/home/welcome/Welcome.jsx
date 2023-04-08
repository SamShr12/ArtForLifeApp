import React, {useState} from 'react'

import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import {useRouter} from 'expo-router'
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const artCategory = ["Original", "AI", "Creative", "Illustration"]
const Welcome = () => {
  const router = useRouter()
  const [activeArtCategory, setactiveArtCategory] = useState('Original')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Sam</Text>
        <Text style={styles.welcomeMessage}>Find art</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
          style={styles.searchInput}
          value=''
          onChange={() => {}}
          placeholder='Search...'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
          source={icons.search}
          resizeMode='contain'
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList 
        data={artCategory}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.tab(activeArtCategory, item)} 
          onPress={() => {
            setactiveArtCategory(item); 
            router.push(`/search/${item}`)
            }}>
            <Text style={styles.tabText(activeArtCategory, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap: SIZES.small}}
        horizontal
        />
      </View>
    </View>
  )
}

export default Welcome