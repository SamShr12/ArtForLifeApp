import { useState } from "react"
import { View, ScrollView, SafeAreaView} from "react-native"
import { Stack, useRouter } from "expo-router"
import { Nearbyjobs, ScreenHeaderBtn, Welcome } from "../components"

const Styles = ({
    paddingType1: "2em"
})
const Home = () => {
    const router = useRouter();
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: "#ccc"}}>
            <Stack.Screen 
            options={{
                headerStyle: {backgroundColor: "#47baef"},
                headerShadowVisible: false,
                headerLeft:() => (
                    <ScreenHeaderBtn />
                ),
                headerRight:() => (
                    <ScreenHeaderBtn/>
                ),
                headerTitle:""
            }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{padding:20}}>
                    <Welcome />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home