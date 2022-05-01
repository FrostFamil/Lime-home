import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './ShortenLabelOfHouse.styled';
import { Foundation } from '@expo/vector-icons'; 
import Line from '../Line/Line';

const ShortenLabelOfHouse = ({name, distance, price, image}) => {

    const style = styles();

    return (
        <View style={style.mainView}>
            <View style={style.imageView}>
                <Image style={style.image} source={{uri: image}}/>
            </View>
            <View style={{marginLeft: 5}}>
                <View>
                    <Text style={{fontSize: 25}}>{name}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Foundation name="marker" size={24} color="#c1824d" />
                    <Text style={{fontSize: 15, marginLeft: 5}}>{distance.toFixed(1)} km from city center</Text>
                </View>
                <View style={{margin: 5}}>
                    <Line/>
                </View>
                <View>
                    <Text>From {price}.00$/Night</Text>
                </View>
            </View>
        </View>
    )
}

export default ShortenLabelOfHouse;