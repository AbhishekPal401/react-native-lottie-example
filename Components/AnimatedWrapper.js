import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import LattieView from 'lottie-react-native';

const AnimatedWrapper = (props) => {

    if(!props.showAnimation){
        return <>{props.children}</>
    }

    return (
        <View style={styles.lottieContainer} >
        <LattieView source={props.source} style={[{width:'80%' ,aspectRatio:1},props.style]} autoPlay loop />
       {props.title && <Text style={{fontSize:25,fontWeight:'300'}}>{props.title}</Text>} 
      </View>
    )
}

export default AnimatedWrapper;


const styles = StyleSheet.create({
    lottieContainer:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'30%'
      },
})
