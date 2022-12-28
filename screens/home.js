import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import { TouchableOpacity } from "react-native-web";
import Title  from "../components/title";
const Home = () => {

    return(
    <View >
        <Title />
        <View style={styles.bannerContainer}>
            <Image source={{
                uri: 'https://www.drupal.org/files/project-images/quiz-5.png'}} 
                 style={styles.banner}
                 resizeMode="contain"
                 />
                </View>
    <TouchableOpacity>
        <Text>Start </Text>
    </TouchableOpacity>
    </View>
    )
} 
 
export default Home

const styles = StyleSheet.create({
       banner:{
        height :300,
        width: 300,
       },
       bannerContainer:{
        justifyContent:'center',
        alignItems:'center',
       },
}); 

