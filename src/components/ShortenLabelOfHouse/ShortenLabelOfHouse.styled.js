import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('screen');

const styles = () => {
  
    return StyleSheet.create({
        mainView: {
            height: 120,
            width: width,
            backgroundColor: '#f7f1e9',
            flexDirection: 'row',
            borderWidth: 1,
            marginBottom: 10
        },
        imageView: {
            width: '35%', 
            height: '100%'
        },
        image: {
            width: '100%', 
            height: '100%'
        },
        textsView: {
            marginLeft: 5, 
            justifyContent: 'space-around'
        },
        nameText: {
            fontSize: 23
        },
        markerTextView: {
            flexDirection: 'row', 
            alignItems: 'center'
        },
        distanceText: {
            fontSize: 15, 
            marginLeft: 5
        },
        lineView: {
            marginVertical: 5
        },
        priceView: {
            flexDirection: 'row', 
            alignItems: 'center'
        },
        fromText: {
            fontSize: 15
        },
        price: {
            color: '#c1824d', 
            fontWeight: 'bold'
        },
        ratingView: {
            flexDirection: 'row', 
            backgroundColor: '#f7f1e9', 
            height: 23,
            width: 40,
            alignItems: 'center', 
            position: 'absolute',
            bottom: 90, 
            zIndex: 1000, 
            justifyContent: 'flex-end', 
            left: 75, 
            borderRadius: 5
        },
        ratingText: {
            fontWeight: '500'
        }
    });
  };

export default styles;