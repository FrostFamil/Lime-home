import React from 'react';
import {Text, View} from 'react-native';
import styles from './CustomMarker.styled';


const CustomMarker = ({chosenHouse, marker, text}) => {
    const style = styles();

    return (
        <View style={[
            style.markerView, 
            {backgroundColor: chosenHouse?.id === marker.id ?  '#b26423':'#4b4b4d', 
            borderRadius: chosenHouse?.id === marker.id ? 8 : 0  
        }]}>
            <View  style={[{
                width: 25, height: 25, backgroundColor: chosenHouse?.id === marker.id ?  '#b26423':'#4b4b4d', position: 'absolute', top: 12}, 
                {transform: [{ rotateZ: 15 }]}]}
            />
            <Text style={{color: 'white'}}>{text}$</Text>
        </View>
    )
}

export default CustomMarker;