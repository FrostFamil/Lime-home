import React,{useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import api from '../../api/api';
import ShortenLabelOfHouse from '../../components/ShortenLabelOfHouse/ShortenLabelOfHouse';
import styles from './MapScreens.styles';

const MapScreens  = () => {
    const style = styles();

    const [allHouses, setAllHouses] = useState([]);
    const [chosenHouse, setChosenHouse] = useState(null);

    useEffect(async() => {
        await api.getAllHouses().then(res => {
            setAllHouses(res.payload);
        });
    }, [])

    return (
        <View style={{flex: 1}}>
            <MapView style={{flex: 1, zIndex: 100}}>
            {allHouses.map((marker, index) => (
                <Marker
                    key={marker.id}
                    coordinate={{latitude : marker.location.lat , longitude : marker.location.lng}}
                    onPress={() => setChosenHouse(marker)}
                >
                    <View style={style.markerView}>
                        <Text style={{color: 'white'}}>{marker.city_id}$</Text>
                    </View>
                </Marker>
            ))}
            </MapView>
            {
                chosenHouse !== null && (
                    <ShortenLabelOfHouse
                        name={chosenHouse.name}
                        distance={chosenHouse.distance}
                        image={chosenHouse.images[0].url}
                        price={chosenHouse.city_id}
                    />
                )
            }
        </View>
    )
}

export default MapScreens;