import React from "react";
import { View, Text, StyleSheet,Image,TouchableOpacity} from "react-native";

const Result = () => {

    return(
        <View>
      <View>
          <Text> Result</Text>
      </View>
      <View style={styles.bannerContainer}>
       <Image source={{
           uri: 'https://www.drupal.org/files/project-images/quiz-5.png'}} 
            style={styles.banner}
            resizeMode="contain"
            />
           </View>
           <View>
           <TouchableOpacity>
         <Text> Home</Text>
         </TouchableOpacity>
       
           </View>
           </View>
    );
    
};  
 
export default Result

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
