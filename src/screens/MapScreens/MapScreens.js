import React,{useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import api from '../../api/api';
import CustomMarker from '../../components/CustomMarker/CustomMarker';
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
        <View style={style.mainView}>
            <MapView style={style.mapView}>
            {allHouses.map((marker, index) => (
                <Marker
                    key={marker.id}
                    coordinate={{latitude : marker.location.lat , longitude : marker.location.lng}}
                    onPress={() => setChosenHouse(marker)}
                >
                    <CustomMarker
                        chosenHouse={chosenHouse}
                        marker={marker}
                        text={marker.city_id}
                    />
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
                        rating={'4.5'}
                    />
                )
            }
        </View>
    )
}

export default MapScreens;