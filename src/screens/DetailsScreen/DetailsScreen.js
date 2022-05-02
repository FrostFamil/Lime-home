import React, {useEffect, useState} from 'react';
import {View, Text, Image, Dimensions, Button, FlatList} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import api from '../../api/api';
import { AntDesign, Feather } from '@expo/vector-icons';
import Line from '../../components/Line/Line';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './DetailsScreen.styled';

const { width } = Dimensions.get('window');


const DetailsScreen = ({route}) => {

    const style = styles();
    const [house, setHouse] = useState(null);
    const [paginationIndex, setPaginationIndex] = useState(0);

    useEffect(async() => {
        await api.getSpecificHouse({id: route.params.id}).then(res => {
            setHouse(res.payload);
        })
    }, [route])

    return (
        <View style={style.mainView}>
            <View style={style.carouselView}>
                <Carousel
                data={house?.images}
                sliderWidth={width}
                itemWidth={width}
                onSnapToItem={(index) => setPaginationIndex(index) }
                renderItem={({item}) => (
                    <Image
                        style={style.image}
                        source={{uri: item.url}}
                    />
                    
                )}
                />
                <View style={style.paginationView}>
                    <Pagination
                        dotsLength={house?.images.length}
                        activeDotIndex={paginationIndex}
                        dotStyle={style.dotStyle}
                        inactiveDotStyle={style.inactiveDotStyle}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                    />
                 </View>
            </View>

            <View>
                <View style={style.titleDistanceMainView}>
                    <Text style={style.nameText}>{house?.name}</Text>
                    <View style={style.ratingMainView}>
                        <Text style={style.ratingText}>4.5</Text>
                        <AntDesign name="star" size={22} color="#b26423" />
                    </View>
                </View>
                
                <View style={style.markerTextView}>
                    <Feather name="map-pin" size={20} color="#c1824d" />
                    <Text style={style.markerText}>
                        {house?.distance.toFixed(1)} km from city center
                    </Text>
                </View>

                <View style={style.descriptionView}>
                    <Text style={style.description}>{house?.description}</Text>
                </View>
            </View>

            <View style={style.lineView}>
                <Line/>
            </View>
            
            <View style={style.roomTypesMainView}>
                <Text style={style.roomTypesText}>Room types available in this location</Text>
                <FlatList
                    data={house?.unit_groups}
                    renderItem={({item}) => (
                        <View style={style.flatListItemView}>
                            <Text>{item.max_guests}X1 Bedroom suits</Text>
                        </View>
                    )}
                    horizontal={false}
                    numColumns={2}
                />
            </View>

            <View style={style.footerView}>
                <View style={style.footerSubView}>
                    <View style={style.textView}>
                        <Text style={style.fromText}>From</Text>
                        <Text style={style.priceText}> {house?.city_id}.00$/Night</Text>
                    </View>
                    <TouchableOpacity style={style.buttonView}>
                        <Text style={style.buttonText}>EXPLORE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default DetailsScreen;