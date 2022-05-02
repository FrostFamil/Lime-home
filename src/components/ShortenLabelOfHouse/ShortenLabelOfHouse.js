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
            <View style={style.textsView}>
                <View>
                    <Text style={style.nameText}>{name}</Text>
                </View>
                <View style={style.markerTextView}>
                    <Foundation name="marker" size={24} color="#c1824d" />
                    <Text style={style.distanceText}>
                        {distance.toFixed(1)} km from city center
                    </Text>
                </View>
                <View style={style.lineView}>
                    <Line/>
                </View>
                <View style={style.priceView}>
                    <Text style={style.fromText}>From</Text>
                    <Text style={style.price}> {price}.00$/Night</Text>
                </View>
            </View>
        </View>
    )
}

export default ShortenLabelOfHouse;