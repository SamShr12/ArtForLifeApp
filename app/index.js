import { useState } from "react"
import { View, ScrollView, SafeAreaView} from "react-native"
import { Stack, useRouter } from "expo-router"
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components"
import {COLORS, icons, images, SIZES} from '../constants'
const Home = () => {
    const router = useRouter();
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
            options={{
                headerStyle: {backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft:() => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight:() => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
                ),
                headerTitle:""
            }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{padding:17}}>
                    <Welcome />
                    <Popularjobs artUrl={images.profile} />
                    <Nearbyjobs artUrl={images.profile} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home